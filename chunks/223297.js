r.r(t), r.d(t, { createProvider: () => u });
var a = r(825123);
let i = {
        frost: 0.55,
        sandblast: 0.28,
        grainSize: 0.5,
        brightness: 1.12,
        shadowLift: 0.12,
        warmth: 0.5,
        sun: 0.71,
        sunSpeed: 0.26,
    },
    o = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,
    s = `
// The grain hash (h21 below) feeds large gl_FragCoord-derived values through
// sin()*43758.5 \u{2014} that overflows mediump's range on many mobile GPUs and
// collapses the grain to a flat artifact. Use highp where available (all WebGL2
// and most WebGL1 devices); fall back to mediump on the rare device without it.
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 vUv;
uniform sampler2D uVideo;
uniform vec2 uRes;        // canvas pixel size (square)
uniform vec2 uVideoRes;   // decoded video pixel size
uniform float uTime;      // seconds (sun drift only)
uniform float uFrost;
uniform float uSandblast;
uniform float uGrainSize;
uniform float uWarmth;
uniform float uBright;
uniform float uShadow;
uniform float uSun;
uniform float uSunSpeed;

// Static per-cell hash \u{2014} NO time term, so the grain is a fixed matte surface.
float h21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// Cover-fit the (non-square) video into the square output, centre-cropped, so
// faces are never stretched.
vec2 coverUv(vec2 uv) {
  float va = uVideoRes.x / max(uVideoRes.y, 1.0);
  vec2 o = uv;
  if (va > 1.0) o.x = (uv.x - 0.5) / va + 0.5;   // landscape: crop sides
  else          o.y = (uv.y - 0.5) * va + 0.5;    // portrait: crop top/bottom
  return o;
}

const int N = 12;

void main() {
  vec2 uv = vUv;
  vec2 base = coverUv(uv);
  float aspect = uRes.y / max(uRes.x, 1.0);

  // Per-fragment static seed, clustered into grain cells. Small cells = ultra
  // fine sandblast (effectively invisible pattern); larger = coarser frosting.
  vec2 cell = floor(gl_FragCoord.xy / max(uGrainSize, 0.5));
  float rnd = h21(cell);
  float baseAngle = rnd * 6.2831853;

  // Stochastic sandblasted scatter: an even golden-angle disk, but each pixel
  // cell rotates + jitters the kernel differently \u{2192} a fine matte grain rather
  // than a smooth blur. The video moves UNDER this fixed glass grain.
  vec3 col = vec3(0.0);
  for (int i = 0; i < N; i++) {
    float fi = float(i) + 0.5;
    float ang = baseAngle + fi * 2.399963; // golden angle
    float rad = sqrt(fi / float(N));        // even area coverage 0..1
    float j = h21(cell + vec2(fi * 7.13, fi * 3.71));
    float r = uFrost * 0.06 * rad + (j - 0.5) * uSandblast * 0.03;
    vec2 off = vec2(cos(ang), sin(ang)) * r;
    off.x *= aspect;
    col += texture2D(uVideo, base + off).rgb;
  }
  col /= float(N);

  // Airy + warm grade (luminous frosted glass, not murky).
  col = col + uShadow * (1.0 - col);
  col *= uBright;
  vec3 warm = vec3(1.0, 0.92, 0.80);
  col = mix(col, col * warm + vec3(0.03, 0.015, 0.0), uWarmth);

  // Drifting sun: a broad soft glow + a fine STATIC sparkle (per-cell) that
  // catches the ground-glass grain only where the light falls \u{2014} not all-over.
  vec2 sun = vec2(0.34 + 0.16 * sin(uTime * uSunSpeed),
                  0.26 + 0.10 * cos(uTime * uSunSpeed * 0.8));
  float glow = smoothstep(0.7, 0.0, distance(uv, sun));
  vec3 sunCol = vec3(1.0, 0.96, 0.88);
  col += sunCol * glow * (0.20 + (rnd - 0.5) * 0.18 * uSandblast) * uSun;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,
    l = (e) =>
        "function" == typeof e.requestVideoFrameCallback && "function" == typeof e.cancelVideoFrameCallback ? e : null;
var n = class {
    constructor() {
        (this.gl = null),
            (this.program = null),
            (this.quad = null),
            (this.videoTex = null),
            (this.uniforms = new Map()),
            (this.videoHandle = null),
            (this.rafId = null),
            (this.rvfcHandle = null),
            (this.usingRvfc = !1),
            (this.stopped = !1),
            (this.lastFrameAt = 0),
            (this.minFrameIntervalMs = 33.333333333333336),
            (this.startTime = 0),
            (this.loop = (e) => {
                if (this.stopped || (this.scheduleNextFrame(), e - this.lastFrameAt < this.minFrameIntervalMs)) return;
                this.lastFrameAt = e;
                let t = this.gl,
                    r = this.videoHandle?.element;
                if (!t || !this.program) return;
                if (!r || r.readyState < 2 || !r.videoWidth) return void t.clear(t.COLOR_BUFFER_BIT);
                t.activeTexture(t.TEXTURE0),
                    t.bindTexture(t.TEXTURE_2D, this.videoTex),
                    t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r);
                let a = (() => {
                        if ("u" < typeof window) return i;
                        let e = window.__incodePrivacyLensParams;
                        return e ? { ...i, ...e } : i;
                    })(),
                    o = (e, r) => {
                        let a = this.uniforms.get(e);
                        a && t.uniform1f(a, r);
                    },
                    s = (e, r, a) => {
                        let i = this.uniforms.get(e);
                        i && t.uniform2f(i, r, a);
                    };
                s("uRes", 512, 512),
                    s("uVideoRes", r.videoWidth, r.videoHeight),
                    o("uTime", (e - this.startTime) / 1e3),
                    o("uFrost", a.frost),
                    o("uSandblast", a.sandblast),
                    o("uGrainSize", a.grainSize),
                    o("uWarmth", a.warmth),
                    o("uBright", a.brightness),
                    o("uShadow", a.shadowLift),
                    o("uSun", a.sun),
                    o("uSunSpeed", a.sunSpeed),
                    t.drawArrays(t.TRIANGLE_STRIP, 0, 4);
            }),
            (this.canvas = document.createElement("canvas")),
            (this.canvas.width = 512),
            (this.canvas.height = 512);
    }
    getCanvas() {
        return this.canvas;
    }
    async start(e, t = {}) {
        (this.minFrameIntervalMs = 1e3 / (t.maxFps ?? 30)), (this.videoHandle = (0, a.t)(e, { keepStreamAlive: !0 }));
        try {
            if ((this.initGl(), this.stopped)) return;
            this.startTime = performance.now();
            let e = this.videoHandle.element;
            (this.usingRvfc = !!l(e)), this.scheduleNextFrame();
        } catch (e) {
            throw (this.stop(), e);
        }
        return Promise.resolve();
    }
    stop() {
        (this.stopped = !0), null != this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = null));
        let e = this.videoHandle?.element;
        e && null != this.rvfcHandle && (l(e)?.cancelVideoFrameCallback(this.rvfcHandle), (this.rvfcHandle = null));
        let t = this.gl;
        t &&
            (this.program && t.deleteProgram(this.program),
            this.quad && t.deleteBuffer(this.quad),
            this.videoTex && t.deleteTexture(this.videoTex),
            t.getExtension("WEBGL_lose_context")?.loseContext()),
            (this.program = null),
            (this.quad = null),
            (this.videoTex = null),
            (this.gl = null),
            this.videoHandle?.dispose(),
            (this.videoHandle = null);
    }
    initGl() {
        let e =
            this.canvas.getContext("webgl", {
                alpha: !1,
                antialias: !1,
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !1,
            }) ?? this.canvas.getContext("experimental-webgl");
        if (!e) throw Error("PrivacyLensProvider: WebGL is not available");
        this.gl = e;
        let t = this.buildProgram(e, o, s);
        (this.program = t), e.useProgram(t);
        let r = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, r),
            e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), e.STATIC_DRAW);
        let a = e.getAttribLocation(t, "aPos");
        for (let i of (e.enableVertexAttribArray(a),
        e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0),
        (this.quad = r),
        (this.videoTex = this.makeTexture(e, e.CLAMP_TO_EDGE)),
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
        [
            "uVideo",
            "uRes",
            "uVideoRes",
            "uTime",
            "uFrost",
            "uSandblast",
            "uGrainSize",
            "uWarmth",
            "uBright",
            "uShadow",
            "uSun",
            "uSunSpeed",
        ]))
            this.uniforms.set(i, e.getUniformLocation(t, i));
        e.uniform1i(this.uniforms.get("uVideo") ?? null, 0),
            e.viewport(0, 0, 512, 512),
            e.clearColor(0.88, 0.86, 0.83, 1);
    }
    buildProgram(e, t, r) {
        let a = (t, r) => {
                let a = e.createShader(t);
                if (!a) throw Error("PrivacyLensProvider: createShader failed");
                if ((e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS))) {
                    let t = e.getShaderInfoLog(a);
                    throw (e.deleteShader(a), Error(`PrivacyLensProvider: shader compile failed: ${t}`));
                }
                return a;
            },
            i = a(e.VERTEX_SHADER, t),
            o = a(e.FRAGMENT_SHADER, r),
            s = e.createProgram();
        if (!s) throw Error("PrivacyLensProvider: createProgram failed");
        if (
            (e.attachShader(s, i),
            e.attachShader(s, o),
            e.linkProgram(s),
            e.deleteShader(i),
            e.deleteShader(o),
            !e.getProgramParameter(s, e.LINK_STATUS))
        ) {
            let t = e.getProgramInfoLog(s);
            throw (e.deleteProgram(s), Error(`PrivacyLensProvider: program link failed: ${t}`));
        }
        return s;
    }
    makeTexture(e, t) {
        let r = e.createTexture();
        if (!r) throw Error("PrivacyLensProvider: createTexture failed");
        return (
            e.bindTexture(e.TEXTURE_2D, r),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, t),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, t),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
            r
        );
    }
    scheduleNextFrame() {
        if (this.stopped) return;
        let e = this.videoHandle?.element,
            t = this.usingRvfc && e ? l(e) : null;
        t
            ? (this.rvfcHandle = t.requestVideoFrameCallback(this.loop))
            : (this.rafId = requestAnimationFrame(this.loop));
    }
};
function u() {
    return new n();
}
