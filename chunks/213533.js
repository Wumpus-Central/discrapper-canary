n.d(t, { A: () => j }),
    n(927092),
    n(212978),
    n(648691),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(445199),
    s = n(205524),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(690521),
    d = n(222713),
    f = n(532294),
    p = n(986177);
let _ = 256,
    h = 512,
    m = 70,
    g = 40,
    E = 45,
    b = 45,
    y = 100,
    O = 2,
    A = 1,
    v = [0, 0, 2],
    S = [0, 1, 0],
    I = [0, 0, 0],
    T =
        "\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_normalMatrix;\nattribute vec3 a_vertexNormal;\n\nuniform mat4 u_matrix;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nvoid main() {\n  // Multiply the position by the matrix.\n  gl_Position = u_matrix * a_position;\n\n  // Pass the texcoord to the fragment shader.\n  v_texcoord = a_texcoord;\n\n  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);\n  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);\n  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));\n\n  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);\n\n  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n  v_lighting = ambientLight + (directionalLightColor * directional);\n}\n",
    C =
        "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  highp vec4 texelColor = texture2D(u_texture, v_texcoord);\n  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);\n}\n",
    N = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    R = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    w = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ],
    P = (e) => {
        let t = new Float32Array(N);
        e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW);
    },
    D = (e) => {
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(R), e.STATIC_DRAW);
    },
    x = (e) => {
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(w), e.STATIC_DRAW);
    };
function L(e, t, n, r, o) {
    let l = i.useRef(null);
    i.useEffect(() => {
        if (null == l.current || null == t) return;
        let e = l.current,
            n = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, n),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            e.generateMipmap(e.TEXTURE_2D);
    }, [t, n]),
        i.useEffect(() => {
            let n = 0,
                i = null == e ? void 0 : e.getContext("webgl");
            if (null == i || null == e || null == t) return;
            l.current = i;
            let c = i.createShader(i.VERTEX_SHADER),
                u = i.createShader(i.FRAGMENT_SHADER);
            if (null == c || null == u) return;
            if (
                (i.shaderSource(c, T),
                i.shaderSource(u, C),
                i.compileShader(c),
                !i.getShaderParameter(c, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(c));
            if ((i.compileShader(u), !i.getShaderParameter(u, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(u));
            let d = i.createProgram();
            if (
                (i.attachShader(d, c), i.attachShader(d, u), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", i.getProgramInfoLog(d));
            if ((i.validateProgram(d), !i.getProgramParameter(d, i.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", i.getProgramInfoLog(d));
            let f = i.getAttribLocation(d, "a_position"),
                p = i.getAttribLocation(d, "a_texcoord"),
                _ = i.getUniformLocation(d, "u_matrix"),
                h = i.getUniformLocation(d, "u_texture"),
                m = i.getAttribLocation(d, "a_vertexNormal"),
                g = i.getUniformLocation(d, "u_normalMatrix"),
                E = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, E),
                x(i),
                i.vertexAttribPointer(m, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(m);
            let b = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, b), P(i);
            let y = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, y), D(i);
            let O = a.DF(60),
                A = () => {
                    if (null == i || null == e) return;
                    i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST);
                    let t = a.DF(r.current),
                        l = a.DF(o.current);
                    i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(f),
                        i.bindBuffer(i.ARRAY_BUFFER, b),
                        i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(p),
                        i.bindBuffer(i.ARRAY_BUFFER, y),
                        i.vertexAttribPointer(p, 2, i.FLOAT, !1, 0, 0);
                    let c = e.clientWidth / e.clientHeight,
                        u = s.fN(s.vt(), O, c, 1, 2000),
                        m = s.t5(s.vt(), v, I, S),
                        E = s.lw(s.vt(), u, m),
                        T = s.vt();
                    s.eL(T, T, t), s.Z8(T, T, l);
                    let C = s.lw(s.vt(), E, T),
                        N = s.vt();
                    s.B8(N, T),
                        s.mg(N, N),
                        i.uniformMatrix4fv(g, !1, N),
                        i.uniformMatrix4fv(_, !1, C),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(A));
                };
            return (n = requestAnimationFrame(A)), () => cancelAnimationFrame(n);
        }, [r, o, e, t]);
}
function j(e) {
    let { emoji: t } = e,
        [n, a] = i.useState(null),
        [s, v] = i.useState(null),
        S = i.useRef(new Image()),
        [I, T] = i.useState(null),
        [C, N] = i.useState(!1),
        R = i.useRef(0),
        w = i.useRef(0),
        P = d.g[f.P7.EMOJIS],
        D = (0, l.rdh)(P.primaryColor).hex(),
        x = i.useRef(E),
        j = i.useRef(b),
        M = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        k = M ? 0 : m,
        U = M ? 0 : g,
        G = i.useRef(k),
        V = i.useRef(U),
        F = i.useRef(!1),
        B = i.useRef(0),
        H = i.useRef(0);
    L(n, s, I, x, j);
    let Y = i.useCallback(() => {
        let e = null == s ? void 0 : s.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(S.current, 0, 0, s.width, s.height),
            (e.fillStyle = D),
            e.fillRect(0, 0, s.width, A),
            e.fillRect(0, 0, A, s.height),
            e.fillRect(0, s.height - A, s.width, A),
            e.fillRect(s.width - A, 0, A, s.height),
            T(t),
            N(!0));
    }, [t, S, D, s]);
    i.useEffect(() => {
        T(null),
            (S.current.crossOrigin = "anonymous"),
            (S.current.src = (0, u.Ez)(t, _)),
            (S.current.onload = Y),
            S.current.complete && Y();
    }, [t, Y, S]),
        i.useEffect(() => {
            let e = (t) => {
                let n = 0.001 * t,
                    r = n - w.current;
                if (((j.current += -V.current * r), (x.current += -G.current * r), !F.current)) {
                    if (Math.abs(G.current) > k) {
                        let e = G.current > 0 ? 1 : -1;
                        G.current -= O * e * window.devicePixelRatio;
                    }
                    if (Math.abs(V.current) > U) {
                        let e = V.current > 0 ? 1 : -1;
                        V.current -= O * e * window.devicePixelRatio;
                    }
                }
                (w.current = n), (R.current = requestAnimationFrame(e));
            };
            return e(0), () => cancelAnimationFrame(R.current);
        }, [k, U]);
    let W = i.useCallback((e) => {
            (F.current = !0), (G.current = 0), (V.current = 0), (B.current = e.clientX), (H.current = e.clientY);
        }, []),
        K = i.useCallback((e) => {
            if (F.current) {
                let t = (e.clientX - B.current) / window.devicePixelRatio;
                (G.current = -((e.clientY - H.current) / window.devicePixelRatio) * (y / window.devicePixelRatio)),
                    (V.current = -t * (y / window.devicePixelRatio)),
                    (B.current = e.clientX),
                    (H.current = e.clientY);
            }
        }, []),
        z = i.useCallback(() => {
            F.current = !1;
        }, []);
    return (
        i.useEffect(
            () => (
                window.addEventListener("mouseup", z),
                window.addEventListener("mousemove", K),
                () => {
                    window.removeEventListener("mouseup", z), window.removeEventListener("mousemove", K);
                }
            ),
            [K, z],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: C ? p.n3 : p.q4,
                    ref: a,
                    height: h,
                    width: h,
                    onMouseDown: W,
                }),
                (0, r.jsx)("canvas", {
                    className: p.R,
                    ref: v,
                    height: _,
                    width: _,
                }),
            ],
        })
    );
}
