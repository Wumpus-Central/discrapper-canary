r.d(t, { Al: () => v, Ay: () => b });
var n = r(477900),
    l = r(582128),
    i = r(17928),
    a = r(245179);
r(321073);
var o = r(218394),
    u = r(725927);
let s = [6, 8, 10, 12],
    h = 0,
    c = -1 / 0,
    f = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function m(e, t, r) {
    let n = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * r);
    return ((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)), (((n ^= n >>> 16) >>> 0) % 1e6) / 1e6);
}
let d = l.memo(function (e) {
    let { state: t, orientation: r = "bottom", introMs: i } = e,
        a = l.useRef(null),
        d = l.useRef(null),
        g = l.useRef(t);
    l.useEffect(() => {
        g.current = t;
    }, [t]);
    let p = l.useRef(r);
    l.useEffect(() => {
        p.current = r;
    }, [r]);
    let b = l.useRef(i),
        v = (0, o.j)(),
        x = l.useRef(v),
        w = l.useRef(null);
    (l.useEffect(() => {
        ((x.current = v), v && w.current?.());
    }, [v]),
        l.useEffect(() => {
            let e = d.current,
                t = a.current;
            if (null == e || null == t) return;
            let r = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                n = b.current;
            if (r && null == n) return;
            let l = e.getContext("2d", { alpha: !0 });
            if (null == l) return;
            let i =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                o = 0,
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
                        l = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-opacity").trim();
                            if ("" === e) return 0.1;
                            let r = parseFloat(e);
                            return Number.isFinite(r) ? r : 0.1;
                        })();
                    for (let t = 0; t < 8; t++) {
                        let i = ((t + 0.5) / 8) * l;
                        E[t] = `rgba(${e}, ${r}, ${n}, ${i})`;
                    }
                })(),
                    (P = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            C();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let q = new MutationObserver(C);
            q.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let S = -1;
            function D() {
                let e = Math.max(o, M),
                    t = Math.max(u, y);
                (e === M && t === y && S === F && v.length > 0) ||
                    ((M = e),
                    (y = t),
                    (S = F),
                    (v = (function (e, t, r) {
                        let n = [],
                            { cols: l, rows: i } = {
                                cols: Math.ceil(Math.max(0, e) / r) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / r) + 1,
                            };
                        for (let e = 0; e < i; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * m(t, e, 1),
                                    phase: m(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * m(t, e, 3),
                                });
                        return n;
                    })(e, t, F)));
            }
            function z() {
                let t = e.getBoundingClientRect(),
                    r = t.width,
                    n = t.height;
                (0.5 > Math.abs(r - o) && 0.5 > Math.abs(n - u)) ||
                    ((o = r),
                    (u = n),
                    (e.width = Math.max(1, Math.floor(o * i))),
                    (e.height = Math.max(1, Math.floor(u * i))),
                    null != l && (l.setTransform(i, 0, 0, i, 0, 0), (l.imageSmoothingEnabled = !1)),
                    D(),
                    O(0.001 * performance.now()));
            }
            z();
            let L = new ResizeObserver(z);
            (L.observe(t), window.addEventListener("resize", z));
            let V = performance.now(),
                B = 0,
                I = null != n ? V + n : null;
            function O(e) {
                var t, r, n;
                if (o <= 0 || u <= 0) return;
                (l.clearRect(0, 0, o, u), (l.globalAlpha = k));
                let i = F,
                    a = "right" === p.current,
                    s = a ? u : o,
                    h = s <= 1e3 ? 1.2 : (1e3 / s) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let r = 0; r < v.length; r++) {
                    let n,
                        l = v[r],
                        s = (l.i * i) / o,
                        c = (l.j * i) / u,
                        { u: f, v: m } = ((t = P), a ? { u: c, v: t ? 1 - s : s } : { u: s, v: c }),
                        d =
                            0.55 *
                            (function (e, t, r) {
                                let n = (e - 0.5) * r,
                                    l = 1 - t,
                                    i = 1 - Math.sqrt(n * n + l * l * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(f, m, h);
                    for (let e = 0; e < $.length; e++) {
                        let t = $[e],
                            r = f - t.x,
                            n = m - t.y,
                            l = (r * r + n * n) / (t.radius * t.radius);
                        d += t.strength * Math.exp(-l) * 0.7;
                    }
                    let g = 0.1 * Math.sin(e * l.freq * 1.85 * R + l.phase),
                        p = d - (l.threshold + g);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) n = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            n = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(n) && T[n].push(l);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((l.fillStyle = E[e]), l.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let a = t[e];
                            ((r = a.i * i),
                                (n = a.j * i),
                                "function" == typeof l.roundRect
                                    ? l.roundRect(r, n, 4, 4, 1)
                                    : (l.moveTo(r + 1, n),
                                      l.arcTo(r + 4, n, r + 4, n + 4, 1),
                                      l.arcTo(r + 4, n + 4, r, n + 4, 1),
                                      l.arcTo(r, n + 4, r, n, 1),
                                      l.arcTo(r, n, r + 4, n, 1)));
                        }
                        l.fill();
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
                    r = Math.min(64, t);
                ((V = e),
                    !(function (e, t) {
                        if (
                            ++N < 30 ||
                            e > 100 ||
                            (A.push(e), A.length > 60 && A.shift(), A.length < 60 || t - c < 3e3 || h >= s.length - 1)
                        )
                            return;
                        let r = 0;
                        for (let e = 0; e < A.length; e++) r += A[e];
                        let n = r / A.length;
                        n <= 22 ||
                            ((F = s[++h]),
                            (c = t),
                            (S = -1),
                            D(),
                            console.log(
                                "[Conjure/glow-dither] perf degrade \u2192 spacing",
                                F,
                                "avg",
                                n.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let n = f[g.current] ?? f.home,
                    l = 1 - Math.exp(-r / 80);
                ((j += (n.blob - j) * l), (R += (n.twink - R) * l), (k += (n.alpha - k) * l));
                let i = 1.5 * j;
                for (let e = 0; e < $.length; e++) {
                    let t = $[e];
                    ((t.x += t.vx * r * i),
                        (t.y += t.vy * r * i),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * r),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * r));
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
                r
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
        "right" === r && (M = `${M} ${u.L$}`),
        null != i && (M = `${M} ${u.f1}`),
        (0, n.jsx)("div", {
            ref: a,
            className: M,
            "aria-hidden": "true",
            children: (0, n.jsx)("canvas", { ref: d, className: "right" === r ? `${u.DX} ${u.l4}` : u.DX }),
        })
    );
});
var g = r(839806);
function p(e) {
    let { state: t, orientation: r, intro: l = !1 } = e,
        i = "right" === r ? `${g.ys} ${g.WR}` : g.ys;
    return (0, n.jsxs)("div", {
        className: l ? `${g.D1} ${g.BE}` : g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: i,
                "data-state": t,
                children: [(0, n.jsx)("div", { className: g.Fc }), (0, n.jsx)("div", { className: g.dW })],
            }),
            (0, n.jsx)(d, { state: t, orientation: r, introMs: l ? 1e3 : void 0 }),
        ],
    });
}
function b(e) {
    let { projectId: t, orientation: r = "bottom", state: l } = e,
        o = (0, i.bG)([a.A], () => (a.A.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, n.jsx)(p, { state: l ?? o, orientation: r });
}
function v() {
    return (0, n.jsx)(p, { state: "thinking", orientation: "bottom", intro: !0 });
}
