n.d(t, {
    A: () => v,
}),
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
    l = n(64700),
    a = n(445199),
    i = n(205524),
    s = n(311907),
    o = n(397927),
    c = n(775602),
    u = n(690521),
    d = n(222713),
    m = n(532294),
    f = n(986177);
let p = [0, 0, 2],
    h = [0, 1, 0],
    b = [0, 0, 0],
    g = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    x = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    y = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];

function v(e) {
    let t,
        { emoji: n } = e,
        [v, j] = l.useState(null),
        [C, _] = l.useState(null),
        A = l.useRef(new Image()),
        [O, E] = l.useState(null),
        [S, N] = l.useState(!1),
        I = l.useRef(0),
        P = l.useRef(0),
        w = d.g[m.P7.EMOJIS],
        T = (0, o.rdh)(w.primaryColor).hex(),
        R = l.useRef(45),
        L = l.useRef(45),
        D = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        k = 70 * !D,
        M = 40 * !D,
        H = l.useRef(k),
        U = l.useRef(M),
        F = l.useRef(!1),
        G = l.useRef(0),
        V = l.useRef(0);
    (t = l.useRef(null)),
        l.useEffect(() => {
            if (null == t.current || null == C) return;
            let e = t.current,
                n = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, n),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, C),
                e.generateMipmap(e.TEXTURE_2D);
        }, [C, O]),
        l.useEffect(() => {
            let e,
                n = 0,
                r = null == v ? void 0 : v.getContext("webgl");
            if (null == r || null == v || null == C) return;
            t.current = r;
            let l = r.createShader(r.VERTEX_SHADER),
                s = r.createShader(r.FRAGMENT_SHADER);
            if (null == l || null == s) return;
            if (
                (r.shaderSource(
                    l,
                    "\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_normalMatrix;\nattribute vec3 a_vertexNormal;\n\nuniform mat4 u_matrix;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nvoid main() {\n  // Multiply the position by the matrix.\n  gl_Position = u_matrix * a_position;\n\n  // Pass the texcoord to the fragment shader.\n  v_texcoord = a_texcoord;\n\n  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);\n  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);\n  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));\n\n  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);\n\n  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n  v_lighting = ambientLight + (directionalLightColor * directional);\n}\n",
                ),
                r.shaderSource(
                    s,
                    "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  highp vec4 texelColor = texture2D(u_texture, v_texcoord);\n  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);\n}\n",
                ),
                r.compileShader(l),
                !r.getShaderParameter(l, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(l));
            if ((r.compileShader(s), !r.getShaderParameter(s, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(s));
            let o = r.createProgram();
            if (
                (r.attachShader(o, l), r.attachShader(o, s), r.linkProgram(o), !r.getProgramParameter(o, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(o));
            if ((r.validateProgram(o), !r.getProgramParameter(o, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(o));
            let c = r.getAttribLocation(o, "a_position"),
                u = r.getAttribLocation(o, "a_texcoord"),
                d = r.getUniformLocation(o, "u_matrix"),
                m = r.getUniformLocation(o, "u_texture"),
                f = r.getAttribLocation(o, "a_vertexNormal"),
                j = r.getUniformLocation(o, "u_normalMatrix"),
                _ = r.createBuffer();
            r.bindBuffer(r.ARRAY_BUFFER, _),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(y), r.STATIC_DRAW),
                r.vertexAttribPointer(f, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(f);
            let A = r.createBuffer();
            r.bindBuffer(r.ARRAY_BUFFER, A), (e = new Float32Array(g)), r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW);
            let O = r.createBuffer();
            r.bindBuffer(r.ARRAY_BUFFER, O), r.bufferData(r.ARRAY_BUFFER, new Float32Array(x), r.STATIC_DRAW);
            let E = a.DF(60),
                S = () => {
                    if (null == r || null == v) return;
                    r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST);
                    let e = a.DF(R.current),
                        t = a.DF(L.current);
                    r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(o),
                        r.enableVertexAttribArray(c),
                        r.bindBuffer(r.ARRAY_BUFFER, A),
                        r.vertexAttribPointer(c, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(u),
                        r.bindBuffer(r.ARRAY_BUFFER, O),
                        r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0);
                    let l = v.clientWidth / v.clientHeight,
                        s = i.fN(i.vt(), E, l, 1, 2e3),
                        f = i.t5(i.vt(), p, b, h),
                        g = i.lw(i.vt(), s, f),
                        x = i.vt();
                    i.eL(x, x, e), i.Z8(x, x, t);
                    let y = i.lw(i.vt(), g, x),
                        C = i.vt();
                    i.B8(C, x),
                        i.mg(C, C),
                        r.uniformMatrix4fv(j, !1, C),
                        r.uniformMatrix4fv(d, !1, y),
                        r.uniform1i(m, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(S));
                };
            return (n = requestAnimationFrame(S)), () => cancelAnimationFrame(n);
        }, [R, L, v, C]);
    let B = l.useCallback(() => {
        let e = null == C ? void 0 : C.getContext("2d");
        null != C &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, C.width, C.height),
            e.drawImage(A.current, 0, 0, C.width, C.height),
            (e.fillStyle = T),
            e.fillRect(0, 0, C.width, 1),
            e.fillRect(0, 0, 1, C.height),
            e.fillRect(0, C.height - 1, C.width, 1),
            e.fillRect(C.width - 1, 0, 1, C.height),
            E(n),
            N(!0));
    }, [n, A, T, C]);
    l.useEffect(() => {
        E(null),
            (A.current.crossOrigin = "anonymous"),
            (A.current.src = (0, u.Ez)(n, 256)),
            (A.current.onload = B),
            A.current.complete && B();
    }, [n, B, A]),
        l.useEffect(() => {
            let e = (t) => {
                let n = 0.001 * t,
                    r = n - P.current;
                if (((L.current += -U.current * r), (R.current += -H.current * r), !F.current)) {
                    if (Math.abs(H.current) > k) {
                        let e = H.current > 0 ? 1 : -1;
                        H.current -= 2 * e * window.devicePixelRatio;
                    }
                    if (Math.abs(U.current) > M) {
                        let e = U.current > 0 ? 1 : -1;
                        U.current -= 2 * e * window.devicePixelRatio;
                    }
                }
                (P.current = n), (I.current = requestAnimationFrame(e));
            };
            return e(0), () => cancelAnimationFrame(I.current);
        }, [k, M]);
    let W = l.useCallback((e) => {
            (F.current = !0), (H.current = 0), (U.current = 0), (G.current = e.clientX), (V.current = e.clientY);
        }, []),
        z = l.useCallback((e) => {
            if (F.current) {
                let t = (e.clientX - G.current) / window.devicePixelRatio;
                (H.current = -((e.clientY - V.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (U.current = -t * (100 / window.devicePixelRatio)),
                    (G.current = e.clientX),
                    (V.current = e.clientY);
            }
        }, []),
        K = l.useCallback(() => {
            F.current = !1;
        }, []);
    return (
        l.useEffect(
            () => (
                window.addEventListener("mouseup", K),
                window.addEventListener("mousemove", z),
                () => {
                    window.removeEventListener("mouseup", K), window.removeEventListener("mousemove", z);
                }
            ),
            [z, K],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: S ? f.n3 : f.q4,
                    ref: j,
                    height: 512,
                    width: 512,
                    onMouseDown: W,
                }),
                (0, r.jsx)("canvas", {
                    className: f.R,
                    ref: _,
                    height: 256,
                    width: 256,
                }),
            ],
        })
    );
}
