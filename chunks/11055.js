r.d(t, { A: () => g });
var n = r(477900),
    i = r(582128),
    a = r(17928),
    l = r(783791);
r(321073);
var o = r(145615);
let s = [6, 8, 10, 12],
    h = 0,
    u = -1 / 0,
    c = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function f(e, t, r) {
    let n = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * r);
    return (n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)), (((n ^= n >>> 16) >>> 0) % 1e6) / 1e6;
}
let m = i.memo(function (e) {
    let { state: t, orientation: r = "bottom" } = e,
        a = i.useRef(null),
        l = i.useRef(null),
        m = i.useRef(t);
    i.useEffect(() => {
        m.current = t;
    }, [t]);
    let d = i.useRef(r);
    i.useEffect(() => {
        d.current = r;
    }, [r]),
        i.useEffect(() => {
            let e = l.current,
                t = a.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let r = e.getContext("2d", { alpha: !0 });
            if (null == r) return;
            let n =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                i = 0,
                o = 0,
                g = [],
                b = 0,
                p = 0,
                v = (function () {
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
                x = c.home.blob,
                M = c.home.twink,
                w = c.home.alpha,
                y = s[h],
                $ = [],
                R = 0,
                k = Array(8).fill(""),
                F = !1;
            function N() {
                !(function () {
                    let {
                            r: e,
                            g: r,
                            b: n,
                        } = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-fill").trim();
                            if ("" === e) return { r: 225, g: 240, b: 255 };
                            let r = e.split(",").map((e) => parseInt(e.trim(), 10));
                            return 3 !== r.length || r.some((e) => !Number.isFinite(e))
                                ? { r: 225, g: 240, b: 255 }
                                : { r: r[0], g: r[1], b: r[2] };
                        })(),
                        i = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-opacity").trim();
                            if ("" === e) return 0.1;
                            let r = parseFloat(e);
                            return Number.isFinite(r) ? r : 0.1;
                        })();
                    for (let t = 0; t < 8; t++) {
                        let a = ((t + 0.5) / 8) * i;
                        k[t] = `rgba(${e}, ${r}, ${n}, ${a})`;
                    }
                })(),
                    (F = "1" === getComputedStyle(t).getPropertyValue("--custom-vibegrations-glow-mirror").trim());
            }
            N();
            let j = [];
            for (let e = 0; e < 8; e++) j.push([]);
            let P = new MutationObserver(N);
            P.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let A = -1;
            function C() {
                let e = Math.max(i, b),
                    t = Math.max(o, p);
                (e === b && t === p && A === y && g.length > 0) ||
                    ((b = e),
                    (p = t),
                    (A = y),
                    (g = (function (e, t, r) {
                        let n = [],
                            { cols: i, rows: a } = {
                                cols: Math.ceil(Math.max(0, e) / r) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / r) + 1,
                            };
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < i; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * f(t, e, 1),
                                    phase: f(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * f(t, e, 3),
                                });
                        return n;
                    })(e, t, y)));
            }
            function E() {
                let t = e.getBoundingClientRect(),
                    a = t.width,
                    l = t.height;
                (0.5 > Math.abs(a - i) && 0.5 > Math.abs(l - o)) ||
                    ((i = a),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(i * n))),
                    (e.height = Math.max(1, Math.floor(o * n))),
                    null != r && (r.setTransform(n, 0, 0, n, 0, 0), (r.imageSmoothingEnabled = !1)),
                    C(),
                    V(0.001 * performance.now()));
            }
            E();
            let T = new ResizeObserver(E);
            T.observe(t), window.addEventListener("resize", E);
            let q = performance.now(),
                S = 0;
            function V(e) {
                var t, n, a;
                if (i <= 0 || o <= 0) return;
                r.clearRect(0, 0, i, o), (r.globalAlpha = w);
                let l = y,
                    s = "right" === d.current,
                    h = s ? o : i,
                    u = h <= 1e3 ? 1.2 : (1e3 / h) * 1.2;
                for (let e = 0; e < 8; e++) j[e].length = 0;
                for (let r = 0; r < g.length; r++) {
                    let n,
                        a = g[r],
                        h = (a.i * l) / i,
                        c = (a.j * l) / o,
                        { u: f, v: m } = ((t = F), s ? { u: c, v: t ? 1 - h : h } : { u: h, v: c }),
                        d =
                            0.55 *
                            (function (e, t, r) {
                                let n = (e - 0.5) * r,
                                    i = 1 - t,
                                    a = 1 - Math.sqrt(n * n + i * i * 1.8);
                                return a < 0 ? 0 : a * a;
                            })(f, m, u);
                    for (let e = 0; e < v.length; e++) {
                        let t = v[e],
                            r = f - t.x,
                            n = m - t.y,
                            i = (r * r + n * n) / (t.radius * t.radius);
                        d += t.strength * Math.exp(-i) * 0.7;
                    }
                    let b = 0.1 * Math.sin(e * a.freq * 1.85 * M + a.phase),
                        p = d - (a.threshold + b);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) n = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            n = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(n) && j[n].push(a);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = j[e];
                    if (0 !== t.length) {
                        (r.fillStyle = k[e]), r.beginPath();
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            (n = i.i * l),
                                (a = i.j * l),
                                "function" == typeof r.roundRect
                                    ? r.roundRect(n, a, 4, 4, 1)
                                    : (r.moveTo(n + 1, a),
                                      r.arcTo(n + 4, a, n + 4, a + 4, 1),
                                      r.arcTo(n + 4, a + 4, n, a + 4, 1),
                                      r.arcTo(n, a + 4, n, a, 1),
                                      r.arcTo(n, a, n + 4, a, 1));
                        }
                        r.fill();
                    }
                }
            }
            return (
                (S = requestAnimationFrame(function e(t) {
                    y = s[h];
                    let r = t - q,
                        n = Math.min(64, r);
                    (q = t),
                        !(function (e, t) {
                            if (
                                ++R < 30 ||
                                e > 100 ||
                                ($.push(e),
                                $.length > 60 && $.shift(),
                                $.length < 60 || t - u < 3e3 || h >= s.length - 1)
                            )
                                return;
                            let r = 0;
                            for (let e = 0; e < $.length; e++) r += $[e];
                            let n = r / $.length;
                            n <= 22 ||
                                ((y = s[++h]),
                                (u = t),
                                (A = -1),
                                C(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    y,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(r, t);
                    let i = c[m.current] ?? c.home,
                        a = 1 - Math.exp(-n / 80);
                    (x += (i.blob - x) * a), (M += (i.twink - M) * a), (w += (i.alpha - w) * a);
                    let l = 1.5 * x;
                    for (let e = 0; e < v.length; e++) {
                        let t = v[e];
                        (t.x += t.vx * n * l),
                            (t.y += t.vy * n * l),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * n);
                    }
                    V(0.001 * t), (S = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(S), T.disconnect(), P.disconnect(), window.removeEventListener("resize", E);
                }
            );
        }, []);
    let g = o.P5;
    return (
        (g = "conversation" === t ? `${g} ${o.wY}` : "home" === t ? `${g} ${o.Qy}` : `${g} ${o.fR}`),
        "right" === r && (g = `${g} ${o.L$}`),
        (0, n.jsx)("div", {
            ref: a,
            className: g,
            "aria-hidden": "true",
            children: (0, n.jsx)("canvas", { ref: l, className: "right" === r ? `${o.DX} ${o.l4}` : o.DX }),
        })
    );
});
var d = r(408694);
function g(e) {
    let { projectId: t, orientation: r = "bottom", state: i } = e,
        o = (0, a.bG)([l.Ay], () => (l.Ay.isThinking(t) ? "thinking" : "conversation"), [t]),
        s = i ?? o,
        h = "right" === r ? `${d.ys} ${d.WR}` : d.ys;
    return (0, n.jsxs)("div", {
        className: d.D1,
        "data-vibegrations-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: h,
                "data-state": s,
                children: [(0, n.jsx)("div", { className: d.Fc }), (0, n.jsx)("div", { className: d.dW })],
            }),
            (0, n.jsx)(m, { state: s, orientation: r }),
        ],
    });
}
