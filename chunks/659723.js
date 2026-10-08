n.d(t, { A: () => p });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179);
n(321073);
var o = n(148087),
    u = n(725927);
let s = [6, 8, 10, 12],
    h = 0,
    c = -1 / 0,
    f = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function d(e, t, n) {
    let r = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return ((r = Math.imul(r ^ (r >>> 13), 0x4bf19f61)), (((r ^= r >>> 16) >>> 0) % 1e6) / 1e6);
}
let m = i.memo(function (e) {
    let { state: t, orientation: n = "bottom" } = e,
        l = i.useRef(null),
        a = i.useRef(null),
        m = i.useRef(t);
    i.useEffect(() => {
        m.current = t;
    }, [t]);
    let g = i.useRef(n);
    i.useEffect(() => {
        g.current = n;
    }, [n]);
    let p = (0, o.A)(),
        v = i.useRef(p),
        b = i.useRef(null);
    (i.useEffect(() => {
        ((v.current = p), p && b.current?.());
    }, [p]),
        i.useEffect(() => {
            let e = a.current,
                t = l.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let n = e.getContext("2d", { alpha: !0 });
            if (null == n) return;
            let r =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                i = 0,
                o = 0,
                u = [],
                p = 0,
                x = 0,
                y = (function () {
                    let e = [];
                    for (let t = 0; t < 3; t++)
                        e.push({
                            x: Math.random(),
                            y: 0.4 + 0.6 * Math.random(),
                            vx: (Math.random() - 0.5) * 2e-4,
                            vy: (Math.random() - 0.5) * 15e-5,
                            radius: 0.16 + 0.18 * Math.random(),
                            strength: 0.7 + 0.5 * Math.random(),
                        });
                    return e;
                })(),
                M = f.home.blob,
                w = f.home.twink,
                j = f.home.alpha,
                A = s[h],
                $ = [],
                k = 0,
                R = Array(8).fill(""),
                F = !1;
            function N() {
                (!(function () {
                    let {
                            r: e,
                            g: n,
                            b: r,
                        } = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-fill").trim();
                            if ("" === e) return { r: 225, g: 240, b: 255 };
                            let n = e.split(",").map((e) => parseInt(e.trim(), 10));
                            return 3 !== n.length || n.some((e) => !Number.isFinite(e))
                                ? { r: 225, g: 240, b: 255 }
                                : { r: n[0], g: n[1], b: n[2] };
                        })(),
                        i = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-opacity").trim();
                            if ("" === e) return 0.1;
                            let n = parseFloat(e);
                            return Number.isFinite(n) ? n : 0.1;
                        })();
                    for (let t = 0; t < 8; t++) {
                        let l = ((t + 0.5) / 8) * i;
                        R[t] = `rgba(${e}, ${n}, ${r}, ${l})`;
                    }
                })(),
                    (F = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            N();
            let P = [];
            for (let e = 0; e < 8; e++) P.push([]);
            let T = new MutationObserver(N);
            T.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let E = -1;
            function C() {
                let e = Math.max(i, p),
                    t = Math.max(o, x);
                (e === p && t === x && E === A && u.length > 0) ||
                    ((p = e),
                    (x = t),
                    (E = A),
                    (u = (function (e, t, n) {
                        let r = [],
                            { cols: i, rows: l } = {
                                cols: Math.ceil(Math.max(0, e) / n) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / n) + 1,
                            };
                        for (let e = 0; e < l; e++)
                            for (let t = 0; t < i; t++)
                                r.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * d(t, e, 1),
                                    phase: d(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * d(t, e, 3),
                                });
                        return r;
                    })(e, t, A)));
            }
            function S() {
                let t = e.getBoundingClientRect(),
                    l = t.width,
                    a = t.height;
                (0.5 > Math.abs(l - i) && 0.5 > Math.abs(a - o)) ||
                    ((i = l),
                    (o = a),
                    (e.width = Math.max(1, Math.floor(i * r))),
                    (e.height = Math.max(1, Math.floor(o * r))),
                    null != n && (n.setTransform(r, 0, 0, r, 0, 0), (n.imageSmoothingEnabled = !1)),
                    C(),
                    V(0.001 * performance.now()));
            }
            S();
            let q = new ResizeObserver(S);
            (q.observe(t), window.addEventListener("resize", S));
            let I = performance.now(),
                O = 0;
            function V(e) {
                var t, r, l;
                if (i <= 0 || o <= 0) return;
                (n.clearRect(0, 0, i, o), (n.globalAlpha = j));
                let a = A,
                    s = "right" === g.current,
                    h = s ? o : i,
                    c = h <= 1e3 ? 1.2 : (1e3 / h) * 1.2;
                for (let e = 0; e < 8; e++) P[e].length = 0;
                for (let n = 0; n < u.length; n++) {
                    let r,
                        l = u[n],
                        h = (l.i * a) / i,
                        f = (l.j * a) / o,
                        { u: d, v: m } = ((t = F), s ? { u: f, v: t ? 1 - h : h } : { u: h, v: f }),
                        g =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    i = 1 - t,
                                    l = 1 - Math.sqrt(r * r + i * i * 1.8);
                                return l < 0 ? 0 : l * l;
                            })(d, m, c);
                    for (let e = 0; e < y.length; e++) {
                        let t = y[e],
                            n = d - t.x,
                            r = m - t.y,
                            i = (n * n + r * r) / (t.radius * t.radius);
                        g += t.strength * Math.exp(-i) * 0.7;
                    }
                    let p = 0.1 * Math.sin(e * l.freq * 1.85 * w + l.phase),
                        v = g - (l.threshold + p);
                    1;
                    if (!(v <= -0.1)) {
                        if (v >= 0.1) r = 7;
                        else {
                            let e = (v + 0.1) / 0.2;
                            r = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(r) && P[r].push(l);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = P[e];
                    if (0 !== t.length) {
                        ((n.fillStyle = R[e]), n.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            ((r = i.i * a),
                                (l = i.j * a),
                                "function" == typeof n.roundRect
                                    ? n.roundRect(r, l, 4, 4, 1)
                                    : (n.moveTo(r + 1, l),
                                      n.arcTo(r + 4, l, r + 4, l + 4, 1),
                                      n.arcTo(r + 4, l + 4, r, l + 4, 1),
                                      n.arcTo(r, l + 4, r, l, 1),
                                      n.arcTo(r, l, r + 4, l, 1)));
                        }
                        n.fill();
                    }
                }
            }
            function z(e) {
                if (!v.current) {
                    O = 0;
                    return;
                }
                A = s[h];
                let t = e - I,
                    n = Math.min(64, t);
                ((I = e),
                    !(function (e, t) {
                        if (
                            ++k < 30 ||
                            e > 100 ||
                            ($.push(e), $.length > 60 && $.shift(), $.length < 60 || t - c < 3e3 || h >= s.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < $.length; e++) n += $[e];
                        let r = n / $.length;
                        r <= 22 ||
                            ((A = s[++h]),
                            (c = t),
                            (E = -1),
                            C(),
                            console.log(
                                "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                A,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = f[m.current] ?? f.home,
                    i = 1 - Math.exp(-n / 80);
                ((M += (r.blob - M) * i), (w += (r.twink - w) * i), (j += (r.alpha - j) * i));
                let l = 1.5 * M;
                for (let e = 0; e < y.length; e++) {
                    let t = y[e];
                    ((t.x += t.vx * n * l),
                        (t.y += t.vy * n * l),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
                }
                (V(0.001 * e), (O = requestAnimationFrame(z)));
            }
            return (
                (b.current = () => {
                    0 === O && ((I = performance.now()), (O = requestAnimationFrame(z)));
                }),
                (O = requestAnimationFrame(z)),
                () => {
                    ((b.current = null),
                        cancelAnimationFrame(O),
                        q.disconnect(),
                        T.disconnect(),
                        window.removeEventListener("resize", S));
                }
            );
        }, []));
    let x = u.P5;
    return (
        (x = "conversation" === t ? `${x} ${u.wY}` : "home" === t ? `${x} ${u.Qy}` : `${x} ${u.fR}`),
        "right" === n && (x = `${x} ${u.L$}`),
        (0, r.jsx)("div", {
            ref: l,
            className: x,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: a, className: "right" === n ? `${u.DX} ${u.l4}` : u.DX }),
        })
    );
});
var g = n(839806);
function p(e) {
    let { projectId: t, orientation: n = "bottom", state: i } = e,
        o = (0, l.bG)([a.Ay], () => (a.Ay.isThinking(t) ? "thinking" : "conversation"), [t]),
        u = i ?? o,
        s = "right" === n ? `${g.ys} ${g.WR}` : g.ys;
    return (0, r.jsxs)("div", {
        className: g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: s,
                "data-state": u,
                children: [(0, r.jsx)("div", { className: g.Fc }), (0, r.jsx)("div", { className: g.dW })],
            }),
            (0, r.jsx)(m, { state: u, orientation: n }),
        ],
    });
}
