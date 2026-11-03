n.d(t, { Al: () => x, Ay: () => b });
var r = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(805942);
n(321073);
var o = n(218394),
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
let m = l.memo(function (e) {
    let { state: t, introMs: n } = e,
        i = l.useRef(null),
        a = l.useRef(null),
        m = l.useRef(t);
    l.useEffect(() => {
        m.current = t;
    }, [t]);
    let g = l.useRef(n),
        p = (0, o.j)(),
        b = l.useRef(p),
        x = l.useRef(null);
    (l.useEffect(() => {
        ((b.current = p), p && x.current?.());
    }, [p]),
        l.useEffect(() => {
            let e = a.current,
                t = i.current;
            if (null == e || null == t) return;
            let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                r = g.current;
            if (n && null == r) return;
            let l = e.getContext("2d", { alpha: !0 });
            if (null == l) return;
            let o =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                u = 0,
                p = 0,
                v = [],
                M = 0,
                w = 0,
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
                j = f.home.blob,
                R = f.home.twink,
                k = f.home.alpha,
                $ = s[h],
                F = [],
                A = 0,
                N = Array(8).fill("");
            function E() {
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
                    l = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-conjure-dither-opacity").trim();
                        if ("" === e) return 0.1;
                        let n = parseFloat(e);
                        return Number.isFinite(n) ? n : 0.1;
                    })();
                for (let t = 0; t < 8; t++) {
                    let i = ((t + 0.5) / 8) * l;
                    N[t] = `rgba(${e}, ${n}, ${r}, ${i})`;
                }
            }
            E();
            let P = [];
            for (let e = 0; e < 8; e++) P.push([]);
            let C = new MutationObserver(E);
            C.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let T = -1;
            function q() {
                let e = Math.max(u, M),
                    t = Math.max(p, w);
                (e === M && t === w && T === $ && v.length > 0) ||
                    ((M = e),
                    (w = t),
                    (T = $),
                    (v = (function (e, t, n) {
                        let r = [],
                            { cols: l, rows: i } = {
                                cols: Math.ceil(Math.max(0, e) / n) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / n) + 1,
                            };
                        for (let e = 0; e < i; e++)
                            for (let t = 0; t < l; t++)
                                r.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * d(t, e, 1),
                                    phase: d(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * d(t, e, 3),
                                });
                        return r;
                    })(e, t, $)));
            }
            function S() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    r = t.height;
                (0.5 > Math.abs(n - u) && 0.5 > Math.abs(r - p)) ||
                    ((u = n),
                    (p = r),
                    (e.width = Math.max(1, Math.floor(u * o))),
                    (e.height = Math.max(1, Math.floor(p * o))),
                    null != l && (l.setTransform(o, 0, 0, o, 0, 0), (l.imageSmoothingEnabled = !1)),
                    q(),
                    L(0.001 * performance.now()));
            }
            S();
            let z = new ResizeObserver(S);
            (z.observe(t), window.addEventListener("resize", S));
            let D = performance.now(),
                B = 0,
                I = null != r ? D + r : null;
            function L(e) {
                if (u <= 0 || p <= 0) return;
                (l.clearRect(0, 0, u, p), (l.globalAlpha = k));
                let t = $,
                    n = u <= 1e3 ? 1.2 : (1e3 / u) * 1.2;
                for (let e = 0; e < 8; e++) P[e].length = 0;
                for (let r = 0; r < v.length; r++) {
                    let l,
                        i = v[r],
                        a = (i.i * t) / u,
                        o = (i.j * t) / p,
                        s =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    l = 1 - t,
                                    i = 1 - Math.sqrt(r * r + l * l * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(a, o, n);
                    for (let e = 0; e < y.length; e++) {
                        let t = y[e],
                            n = a - t.x,
                            r = o - t.y,
                            l = (n * n + r * r) / (t.radius * t.radius);
                        s += t.strength * Math.exp(-l) * 0.7;
                    }
                    let h = 0.1 * Math.sin(e * i.freq * 1.85 * R + i.phase),
                        c = s - (i.threshold + h);
                    1;
                    if (!(c <= -0.1)) {
                        if (c >= 0.1) l = 7;
                        else {
                            let e = (c + 0.1) / 0.2;
                            l = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(l) && P[l].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = P[e];
                    if (0 !== n.length) {
                        ((l.fillStyle = N[e]), l.beginPath());
                        for (let e = 0; e < n.length; e++) {
                            var r, i;
                            let a = n[e];
                            ((r = a.i * t),
                                (i = a.j * t),
                                "function" == typeof l.roundRect
                                    ? l.roundRect(r, i, 4, 4, 1)
                                    : (l.moveTo(r + 1, i),
                                      l.arcTo(r + 4, i, r + 4, i + 4, 1),
                                      l.arcTo(r + 4, i + 4, r, i + 4, 1),
                                      l.arcTo(r, i + 4, r, i, 1),
                                      l.arcTo(r, i, r + 4, i, 1)));
                        }
                        l.fill();
                    }
                }
            }
            function O(e) {
                if (!b.current) {
                    B = 0;
                    return;
                }
                $ = s[h];
                let t = e - D,
                    n = Math.min(64, t);
                ((D = e),
                    !(function (e, t) {
                        if (
                            ++A < 30 ||
                            e > 100 ||
                            (F.push(e), F.length > 60 && F.shift(), F.length < 60 || t - c < 3e3 || h >= s.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < F.length; e++) n += F[e];
                        let r = n / F.length;
                        r <= 22 ||
                            (($ = s[++h]),
                            (c = t),
                            (T = -1),
                            q(),
                            console.log(
                                "[Conjure/glow-dither] perf degrade \u2192 spacing",
                                $,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = f[m.current] ?? f.home,
                    l = 1 - Math.exp(-n / 80);
                ((j += (r.blob - j) * l), (R += (r.twink - R) * l), (k += (r.alpha - k) * l));
                let i = 1.5 * j;
                for (let e = 0; e < y.length; e++) {
                    let t = y[e];
                    ((t.x += t.vx * n * i),
                        (t.y += t.vy * n * i),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
                }
                if ((L(0.001 * e), null != I && e >= I)) {
                    ((B = 0), (x.current = null));
                    return;
                }
                B = requestAnimationFrame(O);
            }
            return (
                (x.current = () => {
                    0 === B && ((D = performance.now()), (B = requestAnimationFrame(O)));
                }),
                n
                    ? ((j = f[m.current].blob),
                      (R = f[m.current].twink),
                      (k = f[m.current].alpha),
                      L(0.001 * performance.now()),
                      (x.current = null))
                    : (B = requestAnimationFrame(O)),
                () => {
                    ((x.current = null),
                        cancelAnimationFrame(B),
                        z.disconnect(),
                        C.disconnect(),
                        window.removeEventListener("resize", S));
                }
            );
        }, []));
    let v = u.P5;
    return (
        (v = "conversation" === t ? `${v} ${u.wY}` : "home" === t ? `${v} ${u.Qy}` : `${v} ${u.fR}`),
        null != n && (v = `${v} ${u.f1}`),
        (0, r.jsx)("div", {
            ref: i,
            className: v,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: a, className: u.DX }),
        })
    );
});
var g = n(839806);
function p(e) {
    let { state: t, intro: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: n ? `${g.D1} ${g.BE}` : g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: g.ys,
                "data-state": t,
                children: [(0, r.jsx)("div", { className: g.Fc }), (0, r.jsx)("div", { className: g.dW })],
            }),
            (0, r.jsx)(m, { state: t, introMs: n ? 1e3 : void 0 }),
        ],
    });
}
function b(e) {
    let { projectId: t } = e,
        n = (0, i.bG)([a.A], () => (a.A.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, r.jsx)(p, { state: n });
}
function x() {
    return (0, r.jsx)(p, { state: "thinking", intro: !0 });
}
