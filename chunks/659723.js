r.d(t, { A: () => p });
var n = r(477900),
    i = r(582128),
    l = r(17928),
    a = r(245179);
r(321073);
var o = r(148087),
    s = r(725927);
let u = [6, 8, 10, 12],
    c = 0,
    h = -1 / 0,
    d = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function f(e, t, r) {
    let n = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * r);
    return ((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)), (((n ^= n >>> 16) >>> 0) % 1e6) / 1e6);
}
let m = i.memo(function (e) {
    let { state: t, orientation: r = "bottom" } = e,
        l = i.useRef(null),
        a = i.useRef(null),
        m = i.useRef(t);
    i.useEffect(() => {
        m.current = t;
    }, [t]);
    let g = i.useRef(r);
    i.useEffect(() => {
        g.current = r;
    }, [r]);
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
            let r = e.getContext("2d", { alpha: !0 });
            if (null == r) return;
            let n =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                i = 0,
                o = 0,
                s = [],
                p = 0,
                x = 0,
                M = (function () {
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
                w = d.home.blob,
                A = d.home.twink,
                y = d.home.alpha,
                j = u[c],
                R = [],
                N = 0,
                $ = Array(8).fill(""),
                k = !1;
            function F() {
                (!(function () {
                    let {
                            r: e,
                            g: r,
                            b: n,
                        } = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-fill").trim();
                            if ("" === e) return { r: 225, g: 240, b: 255 };
                            let r = e.split(",").map((e) => parseInt(e.trim(), 10));
                            return 3 !== r.length || r.some((e) => !Number.isFinite(e))
                                ? { r: 225, g: 240, b: 255 }
                                : { r: r[0], g: r[1], b: r[2] };
                        })(),
                        i = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-opacity").trim();
                            if ("" === e) return 0.1;
                            let r = parseFloat(e);
                            return Number.isFinite(r) ? r : 0.1;
                        })();
                    for (let t = 0; t < 8; t++) {
                        let l = ((t + 0.5) / 8) * i;
                        $[t] = `rgba(${e}, ${r}, ${n}, ${l})`;
                    }
                })(),
                    (k = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            F();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let C = new MutationObserver(F);
            C.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let E = -1;
            function P() {
                let e = Math.max(i, p),
                    t = Math.max(o, x);
                (e === p && t === x && E === j && s.length > 0) ||
                    ((p = e),
                    (x = t),
                    (E = j),
                    (s = (function (e, t, r) {
                        let n = [],
                            { cols: i, rows: l } = {
                                cols: Math.ceil(Math.max(0, e) / r) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / r) + 1,
                            };
                        for (let e = 0; e < l; e++)
                            for (let t = 0; t < i; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * f(t, e, 1),
                                    phase: f(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * f(t, e, 3),
                                });
                        return n;
                    })(e, t, j)));
            }
            function O() {
                let t = e.getBoundingClientRect(),
                    l = t.width,
                    a = t.height;
                (0.5 > Math.abs(l - i) && 0.5 > Math.abs(a - o)) ||
                    ((i = l),
                    (o = a),
                    (e.width = Math.max(1, Math.floor(i * n))),
                    (e.height = Math.max(1, Math.floor(o * n))),
                    null != r && (r.setTransform(n, 0, 0, n, 0, 0), (r.imageSmoothingEnabled = !1)),
                    P(),
                    q(0.001 * performance.now()));
            }
            O();
            let I = new ResizeObserver(O);
            (I.observe(t), window.addEventListener("resize", O));
            let S = performance.now(),
                D = 0;
            function q(e) {
                var t, n, l;
                if (i <= 0 || o <= 0) return;
                (r.clearRect(0, 0, i, o), (r.globalAlpha = y));
                let a = j,
                    u = "right" === g.current,
                    c = u ? o : i,
                    h = c <= 1e3 ? 1.2 : (1e3 / c) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let r = 0; r < s.length; r++) {
                    let n,
                        l = s[r],
                        c = (l.i * a) / i,
                        d = (l.j * a) / o,
                        { u: f, v: m } = ((t = k), u ? { u: d, v: t ? 1 - c : c } : { u: c, v: d }),
                        g =
                            0.55 *
                            (function (e, t, r) {
                                let n = (e - 0.5) * r,
                                    i = 1 - t,
                                    l = 1 - Math.sqrt(n * n + i * i * 1.8);
                                return l < 0 ? 0 : l * l;
                            })(f, m, h);
                    for (let e = 0; e < M.length; e++) {
                        let t = M[e],
                            r = f - t.x,
                            n = m - t.y,
                            i = (r * r + n * n) / (t.radius * t.radius);
                        g += t.strength * Math.exp(-i) * 0.7;
                    }
                    let p = 0.1 * Math.sin(e * l.freq * 1.85 * A + l.phase),
                        v = g - (l.threshold + p);
                    1;
                    if (!(v <= -0.1)) {
                        if (v >= 0.1) n = 7;
                        else {
                            let e = (v + 0.1) / 0.2;
                            n = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(n) && T[n].push(l);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((r.fillStyle = $[e]), r.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            ((n = i.i * a),
                                (l = i.j * a),
                                "function" == typeof r.roundRect
                                    ? r.roundRect(n, l, 4, 4, 1)
                                    : (r.moveTo(n + 1, l),
                                      r.arcTo(n + 4, l, n + 4, l + 4, 1),
                                      r.arcTo(n + 4, l + 4, n, l + 4, 1),
                                      r.arcTo(n, l + 4, n, l, 1),
                                      r.arcTo(n, l, n + 4, l, 1)));
                        }
                        r.fill();
                    }
                }
            }
            function G(e) {
                if (!v.current) {
                    D = 0;
                    return;
                }
                j = u[c];
                let t = e - S,
                    r = Math.min(64, t);
                ((S = e),
                    !(function (e, t) {
                        if (
                            ++N < 30 ||
                            e > 100 ||
                            (R.push(e), R.length > 60 && R.shift(), R.length < 60 || t - h < 3e3 || c >= u.length - 1)
                        )
                            return;
                        let r = 0;
                        for (let e = 0; e < R.length; e++) r += R[e];
                        let n = r / R.length;
                        n <= 22 ||
                            ((j = u[++c]),
                            (h = t),
                            (E = -1),
                            P(),
                            console.log(
                                "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                j,
                                "avg",
                                n.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let n = d[m.current] ?? d.home,
                    i = 1 - Math.exp(-r / 80);
                ((w += (n.blob - w) * i), (A += (n.twink - A) * i), (y += (n.alpha - y) * i));
                let l = 1.5 * w;
                for (let e = 0; e < M.length; e++) {
                    let t = M[e];
                    ((t.x += t.vx * r * l),
                        (t.y += t.vy * r * l),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * r),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * r));
                }
                (q(0.001 * e), (D = requestAnimationFrame(G)));
            }
            return (
                (b.current = () => {
                    0 === D && ((S = performance.now()), (D = requestAnimationFrame(G)));
                }),
                (D = requestAnimationFrame(G)),
                () => {
                    ((b.current = null),
                        cancelAnimationFrame(D),
                        I.disconnect(),
                        C.disconnect(),
                        window.removeEventListener("resize", O));
                }
            );
        }, []));
    let x = s.P5;
    return (
        (x = "conversation" === t ? `${x} ${s.wY}` : "home" === t ? `${x} ${s.Qy}` : `${x} ${s.fR}`),
        "right" === r && (x = `${x} ${s.L$}`),
        (0, n.jsx)("div", {
            ref: l,
            className: x,
            "aria-hidden": "true",
            children: (0, n.jsx)("canvas", { ref: a, className: "right" === r ? `${s.DX} ${s.l4}` : s.DX }),
        })
    );
});
var g = r(839806);
function p(e) {
    let { projectId: t, orientation: r = "bottom", state: i } = e,
        o = (0, l.bG)([a.A], () => (a.A.isThinking(t) ? "thinking" : "conversation"), [t]),
        s = i ?? o,
        u = "right" === r ? `${g.ys} ${g.WR}` : g.ys;
    return (0, n.jsxs)("div", {
        className: g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: u,
                "data-state": s,
                children: [(0, n.jsx)("div", { className: g.Fc }), (0, n.jsx)("div", { className: g.dW })],
            }),
            (0, n.jsx)(m, { state: s, orientation: r }),
        ],
    });
}
