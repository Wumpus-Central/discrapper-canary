n.d(t, { Z: () => j }),
    n(17294),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(237953),
    o = n(398759),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(176354),
    d = n(830960),
    f = n(612776),
    p = n(148550);
let _ = 256,
    m = 512,
    h = 70,
    g = 40,
    E = 45,
    b = 45,
    y = 100,
    O = 2,
    v = 1,
    S = [0, 0, 2],
    I = [0, 1, 0],
    T = [0, 0, 0],
    C =
        "\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_normalMatrix;\nattribute vec3 a_vertexNormal;\n\nuniform mat4 u_matrix;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nvoid main() {\n  // Multiply the position by the matrix.\n  gl_Position = u_matrix * a_position;\n\n  // Pass the texcoord to the fragment shader.\n  v_texcoord = a_texcoord;\n\n  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);\n  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);\n  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));\n\n  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);\n\n  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n  v_lighting = ambientLight + (directionalLightColor * directional);\n}\n",
    A =
        "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\nvarying highp vec3 v_lighting;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  highp vec4 texelColor = texture2D(u_texture, v_texcoord);\n  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);\n}\n",
    N = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    P = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    R = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ],
    D = (e) => {
        let t = new Float32Array(N);
        e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW);
    },
    w = (e) => {
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(P), e.STATIC_DRAW);
    },
    x = (e) => {
        e.bufferData(e.ARRAY_BUFFER, new Float32Array(R), e.STATIC_DRAW);
    };
function L(e, t, n, r, s) {
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
                (i.shaderSource(c, C),
                i.shaderSource(u, A),
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
                m = i.getUniformLocation(d, "u_texture"),
                h = i.getAttribLocation(d, "a_vertexNormal"),
                g = i.getUniformLocation(d, "u_normalMatrix"),
                E = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, E),
                x(i),
                i.vertexAttribPointer(h, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(h);
            let b = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, b), D(i);
            let y = i.createBuffer();
            i.bindBuffer(i.ARRAY_BUFFER, y), w(i);
            let O = a.c$(60),
                v = () => {
                    if (null == i || null == e) return;
                    i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST);
                    let t = a.c$(r.current),
                        l = a.c$(s.current);
                    i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(f),
                        i.bindBuffer(i.ARRAY_BUFFER, b),
                        i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(p),
                        i.bindBuffer(i.ARRAY_BUFFER, y),
                        i.vertexAttribPointer(p, 2, i.FLOAT, !1, 0, 0);
                    let c = e.clientWidth / e.clientHeight,
                        u = o.G3(o.Ue(), O, c, 1, 2000),
                        h = o.zB(o.Ue(), S, T, I),
                        E = o.Jp(o.Ue(), u, h),
                        C = o.Ue();
                    o.lM(C, C, t), o.uD(C, C, l);
                    let A = o.Jp(o.Ue(), E, C),
                        N = o.Ue();
                    o.U_(N, C),
                        o.p4(N, N),
                        i.uniformMatrix4fv(g, !1, N),
                        i.uniformMatrix4fv(_, !1, A),
                        i.uniform1i(m, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(v));
                };
            return (n = requestAnimationFrame(v)), () => cancelAnimationFrame(n);
        }, [r, s, e, t]);
}
function j(e) {
    let { emoji: t } = e,
        [n, a] = i.useState(null),
        [o, S] = i.useState(null),
        I = i.useRef(new Image()),
        [T, C] = i.useState(null),
        [A, N] = i.useState(!1),
        P = i.useRef(0),
        R = i.useRef(0),
        D = d.E[f.yD.EMOJIS],
        w = (0, l.dQu)(D.primaryColor).hex(),
        x = i.useRef(E),
        j = i.useRef(b),
        M = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        k = M ? 0 : h,
        U = M ? 0 : g,
        G = i.useRef(k),
        Z = i.useRef(U),
        B = i.useRef(!1),
        F = i.useRef(0),
        V = i.useRef(0);
    L(n, o, T, x, j);
    let H = i.useCallback(() => {
        let e = null == o ? void 0 : o.getContext("2d");
        null != o &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, o.width, o.height),
            e.drawImage(I.current, 0, 0, o.width, o.height),
            (e.fillStyle = w),
            e.fillRect(0, 0, o.width, v),
            e.fillRect(0, 0, v, o.height),
            e.fillRect(0, o.height - v, o.width, v),
            e.fillRect(o.width - v, 0, v, o.height),
            C(t),
            N(!0));
    }, [t, I, w, o]);
    i.useEffect(() => {
        C(null),
            (I.current.crossOrigin = "anonymous"),
            (I.current.src = (0, u.qc)(t, _)),
            (I.current.onload = H),
            I.current.complete && H();
    }, [t, H, I]),
        i.useEffect(() => {
            let e = (t) => {
                let n = 0.001 * t,
                    r = n - R.current;
                if (((j.current += -Z.current * r), (x.current += -G.current * r), !B.current)) {
                    if (Math.abs(G.current) > k) {
                        let e = G.current > 0 ? 1 : -1;
                        G.current -= O * e * window.devicePixelRatio;
                    }
                    if (Math.abs(Z.current) > U) {
                        let e = Z.current > 0 ? 1 : -1;
                        Z.current -= O * e * window.devicePixelRatio;
                    }
                }
                (R.current = n), (P.current = requestAnimationFrame(e));
            };
            return e(0), () => cancelAnimationFrame(P.current);
        }, [k, U]);
    let Y = i.useCallback((e) => {
            (B.current = !0), (G.current = 0), (Z.current = 0), (F.current = e.clientX), (V.current = e.clientY);
        }, []),
        W = i.useCallback((e) => {
            if (B.current) {
                let t = (e.clientX - F.current) / window.devicePixelRatio;
                (G.current = -((e.clientY - V.current) / window.devicePixelRatio) * (y / window.devicePixelRatio)),
                    (Z.current = -t * (y / window.devicePixelRatio)),
                    (F.current = e.clientX),
                    (V.current = e.clientY);
            }
        }, []),
        K = i.useCallback(() => {
            B.current = !1;
        }, []);
    return (
        i.useEffect(
            () => (
                window.addEventListener("mouseup", K),
                window.addEventListener("mousemove", W),
                () => {
                    window.removeEventListener("mouseup", K), window.removeEventListener("mousemove", W);
                }
            ),
            [W, K],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: A ? p.visibleCanvas : p.invisible,
                    ref: a,
                    height: m,
                    width: m,
                    onMouseDown: Y,
                }),
                (0, r.jsx)("canvas", {
                    className: p.hidden,
                    ref: S,
                    height: _,
                    width: _,
                }),
            ],
        })
    );
}
