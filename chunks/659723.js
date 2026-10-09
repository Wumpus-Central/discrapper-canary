n.d(t, { A: () => p });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179);
n(321073);
var o = n(148087),
    u = n(725927);
let s = [6, 8, 10, 12],
    c = 0,
    h = -1 / 0,
    d = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function f(e, t, n) {
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
        N = i.useRef(null);
    (i.useEffect(() => {
        ((v.current = p), p && N.current?.());
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
                b = 0,
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
                A = d.home.blob,
                x = d.home.twink,
                M = d.home.alpha,
                R = s[c],
                E = [],
                I = 0,
                w = Array(8).fill(""),
                C = !1;
            function P() {
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
                        w[t] = `rgba(${e}, ${n}, ${r}, ${l})`;
                    }
                })(),
                    (C = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            P();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let j = new MutationObserver(P);
            j.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let O = -1;
            function _() {
                let e = Math.max(i, p),
                    t = Math.max(o, b);
                (e === p && t === b && O === R && u.length > 0) ||
                    ((p = e),
                    (b = t),
                    (O = R),
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
                                    threshold: 0.05 + 0.95 * f(t, e, 1),
                                    phase: f(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * f(t, e, 3),
                                });
                        return r;
                    })(e, t, R)));
            }
            function k() {
                let t = e.getBoundingClientRect(),
                    l = t.width,
                    a = t.height;
                (0.5 > Math.abs(l - i) && 0.5 > Math.abs(a - o)) ||
                    ((i = l),
                    (o = a),
                    (e.width = Math.max(1, Math.floor(i * r))),
                    (e.height = Math.max(1, Math.floor(o * r))),
                    null != n && (n.setTransform(r, 0, 0, r, 0, 0), (n.imageSmoothingEnabled = !1)),
                    _(),
                    D(0.001 * performance.now()));
            }
            k();
            let F = new ResizeObserver(k);
            (F.observe(t), window.addEventListener("resize", k));
            let $ = performance.now(),
                S = 0;
            function D(e) {
                var t, r, l;
                if (i <= 0 || o <= 0) return;
                (n.clearRect(0, 0, i, o), (n.globalAlpha = M));
                let a = R,
                    s = "right" === g.current,
                    c = s ? o : i,
                    h = c <= 1e3 ? 1.2 : (1e3 / c) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let n = 0; n < u.length; n++) {
                    let r,
                        l = u[n],
                        c = (l.i * a) / i,
                        d = (l.j * a) / o,
                        { u: f, v: m } = ((t = C), s ? { u: d, v: t ? 1 - c : c } : { u: c, v: d }),
                        g =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    i = 1 - t,
                                    l = 1 - Math.sqrt(r * r + i * i * 1.8);
                                return l < 0 ? 0 : l * l;
                            })(f, m, h);
                    for (let e = 0; e < y.length; e++) {
                        let t = y[e],
                            n = f - t.x,
                            r = m - t.y,
                            i = (n * n + r * r) / (t.radius * t.radius);
                        g += t.strength * Math.exp(-i) * 0.7;
                    }
                    let p = 0.1 * Math.sin(e * l.freq * 1.85 * x + l.phase),
                        v = g - (l.threshold + p);
                    1;
                    if (!(v <= -0.1)) {
                        if (v >= 0.1) r = 7;
                        else {
                            let e = (v + 0.1) / 0.2;
                            r = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(r) && T[r].push(l);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((n.fillStyle = w[e]), n.beginPath());
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
            function U(e) {
                if (!v.current) {
                    S = 0;
                    return;
                }
                R = s[c];
                let t = e - $,
                    n = Math.min(64, t);
                (($ = e),
                    !(function (e, t) {
                        if (
                            ++I < 30 ||
                            e > 100 ||
                            (E.push(e), E.length > 60 && E.shift(), E.length < 60 || t - h < 3e3 || c >= s.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < E.length; e++) n += E[e];
                        let r = n / E.length;
                        r <= 22 ||
                            ((R = s[++c]),
                            (h = t),
                            (O = -1),
                            _(),
                            console.log(
                                "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                R,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = d[m.current] ?? d.home,
                    i = 1 - Math.exp(-n / 80);
                ((A += (r.blob - A) * i), (x += (r.twink - x) * i), (M += (r.alpha - M) * i));
                let l = 1.5 * A;
                for (let e = 0; e < y.length; e++) {
                    let t = y[e];
                    ((t.x += t.vx * n * l),
                        (t.y += t.vy * n * l),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
                }
                (D(0.001 * e), (S = requestAnimationFrame(U)));
            }
            return (
                (N.current = () => {
                    0 === S && (($ = performance.now()), (S = requestAnimationFrame(U)));
                }),
                (S = requestAnimationFrame(U)),
                () => {
                    ((N.current = null),
                        cancelAnimationFrame(S),
                        F.disconnect(),
                        j.disconnect(),
                        window.removeEventListener("resize", k));
                }
            );
        }, []));
    let b = u.P5;
    return (
        (b = "conversation" === t ? `${b} ${u.wY}` : "home" === t ? `${b} ${u.Qy}` : `${b} ${u.fR}`),
        "right" === n && (b = `${b} ${u.L$}`),
        (0, r.jsx)("div", {
            ref: l,
            className: b,
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
