n.d(t, { Al: () => x, DA: () => v, Ay: () => b });
var r = n(477900),
    i = n(582128),
    l = n(855986),
    o = n(513425);
n(321073);
var a = n(218394),
    u = n(725927);
let s = [6, 8, 10, 12],
    h = 0,
    c = -1 / 0,
    f = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function m(e, t, n) {
    let r = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return ((r = Math.imul(r ^ (r >>> 13), 0x4bf19f61)), (((r ^= r >>> 16) >>> 0) % 1e6) / 1e6);
}
let d = i.memo(function (e) {
    let { state: t, orientation: n = "bottom", introMs: l } = e,
        o = i.useRef(null),
        d = i.useRef(null),
        g = i.useRef(t);
    i.useEffect(() => {
        g.current = t;
    }, [t]);
    let p = i.useRef(n);
    i.useEffect(() => {
        p.current = n;
    }, [n]);
    let b = i.useRef(l),
        v = (0, a.j)(),
        x = i.useRef(v),
        w = i.useRef(null);
    (i.useEffect(() => {
        ((x.current = v), v && w.current?.());
    }, [v]),
        i.useEffect(() => {
            let e = d.current,
                t = o.current;
            if (null == e || null == t) return;
            let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                r = b.current;
            if (n && null == r) return;
            let i = e.getContext("2d", { alpha: !0 });
            if (null == i) return;
            let l =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                a = 0,
                u = 0,
                v = [],
                M = 0,
                y = 0,
                $ = (function () {
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
                j = f.home.blob,
                R = f.home.twink,
                k = f.home.alpha,
                F = s[h],
                A = [],
                N = 0,
                E = Array(8).fill(""),
                P = !1;
            function C() {
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
                        E[t] = `rgba(${e}, ${n}, ${r}, ${l})`;
                    }
                })(),
                    (P = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            C();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let q = new MutationObserver(C);
            q.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let D = -1;
            function S() {
                let e = Math.max(a, M),
                    t = Math.max(u, y);
                (e === M && t === y && D === F && v.length > 0) ||
                    ((M = e),
                    (y = t),
                    (D = F),
                    (v = (function (e, t, n) {
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
                                    threshold: 0.05 + 0.95 * m(t, e, 1),
                                    phase: m(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * m(t, e, 3),
                                });
                        return r;
                    })(e, t, F)));
            }
            function z() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    r = t.height;
                (0.5 > Math.abs(n - a) && 0.5 > Math.abs(r - u)) ||
                    ((a = n),
                    (u = r),
                    (e.width = Math.max(1, Math.floor(a * l))),
                    (e.height = Math.max(1, Math.floor(u * l))),
                    null != i && (i.setTransform(l, 0, 0, l, 0, 0), (i.imageSmoothingEnabled = !1)),
                    S(),
                    O(0.001 * performance.now()));
            }
            z();
            let L = new ResizeObserver(z);
            (L.observe(t), window.addEventListener("resize", z));
            let V = performance.now(),
                B = 0,
                I = null != r ? V + r : null;
            function O(e) {
                var t, n, r;
                if (a <= 0 || u <= 0) return;
                (i.clearRect(0, 0, a, u), (i.globalAlpha = k));
                let l = F,
                    o = "right" === p.current,
                    s = o ? u : a,
                    h = s <= 1e3 ? 1.2 : (1e3 / s) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let n = 0; n < v.length; n++) {
                    let r,
                        i = v[n],
                        s = (i.i * l) / a,
                        c = (i.j * l) / u,
                        { u: f, v: m } = ((t = P), o ? { u: c, v: t ? 1 - s : s } : { u: s, v: c }),
                        d =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    i = 1 - t,
                                    l = 1 - Math.sqrt(r * r + i * i * 1.8);
                                return l < 0 ? 0 : l * l;
                            })(f, m, h);
                    for (let e = 0; e < $.length; e++) {
                        let t = $[e],
                            n = f - t.x,
                            r = m - t.y,
                            i = (n * n + r * r) / (t.radius * t.radius);
                        d += t.strength * Math.exp(-i) * 0.7;
                    }
                    let g = 0.1 * Math.sin(e * i.freq * 1.85 * R + i.phase),
                        p = d - (i.threshold + g);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) r = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            r = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(r) && T[r].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((i.fillStyle = E[e]), i.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let o = t[e];
                            ((n = o.i * l),
                                (r = o.j * l),
                                "function" == typeof i.roundRect
                                    ? i.roundRect(n, r, 4, 4, 1)
                                    : (i.moveTo(n + 1, r),
                                      i.arcTo(n + 4, r, n + 4, r + 4, 1),
                                      i.arcTo(n + 4, r + 4, n, r + 4, 1),
                                      i.arcTo(n, r + 4, n, r, 1),
                                      i.arcTo(n, r, n + 4, r, 1)));
                        }
                        i.fill();
                    }
                }
            }
            function W(e) {
                if (!x.current) {
                    B = 0;
                    return;
                }
                F = s[h];
                let t = e - V,
                    n = Math.min(64, t);
                ((V = e),
                    !(function (e, t) {
                        if (
                            ++N < 30 ||
                            e > 100 ||
                            (A.push(e), A.length > 60 && A.shift(), A.length < 60 || t - c < 3e3 || h >= s.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < A.length; e++) n += A[e];
                        let r = n / A.length;
                        r <= 22 ||
                            ((F = s[++h]),
                            (c = t),
                            (D = -1),
                            S(),
                            console.log(
                                "[Conjure/glow-dither] perf degrade \u2192 spacing",
                                F,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = f[g.current] ?? f.home,
                    i = 1 - Math.exp(-n / 80);
                ((j += (r.blob - j) * i), (R += (r.twink - R) * i), (k += (r.alpha - k) * i));
                let l = 1.5 * j;
                for (let e = 0; e < $.length; e++) {
                    let t = $[e];
                    ((t.x += t.vx * n * l),
                        (t.y += t.vy * n * l),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
                }
                if ((O(0.001 * e), null != I && e >= I)) {
                    ((B = 0), (w.current = null));
                    return;
                }
                B = requestAnimationFrame(W);
            }
            return (
                (w.current = () => {
                    0 === B && ((V = performance.now()), (B = requestAnimationFrame(W)));
                }),
                n
                    ? ((j = f[g.current].blob),
                      (R = f[g.current].twink),
                      (k = f[g.current].alpha),
                      O(0.001 * performance.now()),
                      (w.current = null))
                    : (B = requestAnimationFrame(W)),
                () => {
                    ((w.current = null),
                        cancelAnimationFrame(B),
                        L.disconnect(),
                        q.disconnect(),
                        window.removeEventListener("resize", z));
                }
            );
        }, []));
    let M = u.P5;
    return (
        (M = "conversation" === t ? `${M} ${u.wY}` : "home" === t ? `${M} ${u.Qy}` : `${M} ${u.fR}`),
        "right" === n && (M = `${M} ${u.L$}`),
        null != l && (M = `${M} ${u.f1}`),
        (0, r.jsx)("div", {
            ref: o,
            className: M,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: d, className: "right" === n ? `${u.DX} ${u.l4}` : u.DX }),
        })
    );
});
var g = n(839806);
function p(e) {
    let { state: t, orientation: n, intro: i = !1 } = e,
        l = "right" === n ? `${g.ys} ${g.WR}` : g.ys;
    return (0, r.jsxs)("div", {
        className: i ? `${g.D1} ${g.BE}` : g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: l,
                "data-state": t,
                children: [(0, r.jsx)("div", { className: g.Fc }), (0, r.jsx)("div", { className: g.dW })],
            }),
            (0, r.jsx)(d, { state: t, orientation: n, introMs: i ? 1e3 : void 0 }),
        ],
    });
}
function b(e) {
    let { projectId: t } = e,
        n = (0, l.bG)([o.A], () => (o.A.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, r.jsx)(p, { state: n, orientation: "bottom" });
}
function v() {
    return (0, r.jsx)(p, { state: "thinking", orientation: "right" });
}
function x() {
    return (0, r.jsx)(p, { state: "thinking", orientation: "bottom", intro: !0 });
}
