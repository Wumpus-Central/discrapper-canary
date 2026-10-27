n.d(t, { Al: () => v, Ay: () => x });
var r = n(477900),
    l = n(582128),
    i = n(17928),
    o = n(245179);
n(321073);
var a = n(218394),
    u = n(5538),
    s = n(725927);
let h = [6, 8, 10, 12],
    c = 0,
    f = -1 / 0,
    m = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function d(e, t, n) {
    let r = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return ((r = Math.imul(r ^ (r >>> 13), 0x4bf19f61)), (((r ^= r >>> 16) >>> 0) % 1e6) / 1e6);
}
let g = l.memo(function (e) {
    let { state: t, orientation: n = "bottom", introMs: i } = e,
        o = l.useRef(null),
        g = l.useRef(null),
        p = l.useRef(t);
    l.useEffect(() => {
        p.current = t;
    }, [t]);
    let b = l.useRef(n);
    l.useEffect(() => {
        b.current = n;
    }, [n]);
    let x = l.useRef(i),
        v = (0, a.j)(),
        w = l.useContext(u.A),
        M = v && !w,
        y = l.useRef(M),
        $ = l.useRef(null);
    (l.useEffect(() => {
        ((y.current = M), M && $.current?.());
    }, [M]),
        l.useEffect(() => {
            let e = g.current,
                t = o.current;
            if (null == e || null == t) return;
            let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                r = x.current;
            if (n && null == r) return;
            let l = e.getContext("2d", { alpha: !0 });
            if (null == l) return;
            let i =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                a = 0,
                u = 0,
                s = [],
                v = 0,
                w = 0,
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
                j = m.home.blob,
                R = m.home.twink,
                k = m.home.alpha,
                A = h[c],
                F = [],
                C = 0,
                N = Array(8).fill(""),
                E = !1;
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
                })(),
                    (E = "1" === getComputedStyle(t).getPropertyValue("--custom-conjure-glow-mirror").trim()));
            }
            P();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let q = new MutationObserver(P);
            q.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let S = -1;
            function D() {
                let e = Math.max(a, v),
                    t = Math.max(u, w);
                (e === v && t === w && S === A && s.length > 0) ||
                    ((v = e),
                    (w = t),
                    (S = A),
                    (s = (function (e, t, n) {
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
                    })(e, t, A)));
            }
            function z() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    r = t.height;
                (0.5 > Math.abs(n - a) && 0.5 > Math.abs(r - u)) ||
                    ((a = n),
                    (u = r),
                    (e.width = Math.max(1, Math.floor(a * i))),
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
                I = null != r ? V + r : null;
            function O(e) {
                var t, n, r;
                if (a <= 0 || u <= 0) return;
                (l.clearRect(0, 0, a, u), (l.globalAlpha = k));
                let i = A,
                    o = "right" === b.current,
                    h = o ? u : a,
                    c = h <= 1e3 ? 1.2 : (1e3 / h) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let n = 0; n < s.length; n++) {
                    let r,
                        l = s[n],
                        h = (l.i * i) / a,
                        f = (l.j * i) / u,
                        { u: m, v: d } = ((t = E), o ? { u: f, v: t ? 1 - h : h } : { u: h, v: f }),
                        g =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    l = 1 - t,
                                    i = 1 - Math.sqrt(r * r + l * l * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(m, d, c);
                    for (let e = 0; e < M.length; e++) {
                        let t = M[e],
                            n = m - t.x,
                            r = d - t.y,
                            l = (n * n + r * r) / (t.radius * t.radius);
                        g += t.strength * Math.exp(-l) * 0.7;
                    }
                    let p = 0.1 * Math.sin(e * l.freq * 1.85 * R + l.phase),
                        b = g - (l.threshold + p);
                    1;
                    if (!(b <= -0.1)) {
                        if (b >= 0.1) r = 7;
                        else {
                            let e = (b + 0.1) / 0.2;
                            r = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(r) && T[r].push(l);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((l.fillStyle = N[e]), l.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let o = t[e];
                            ((n = o.i * i),
                                (r = o.j * i),
                                "function" == typeof l.roundRect
                                    ? l.roundRect(n, r, 4, 4, 1)
                                    : (l.moveTo(n + 1, r),
                                      l.arcTo(n + 4, r, n + 4, r + 4, 1),
                                      l.arcTo(n + 4, r + 4, n, r + 4, 1),
                                      l.arcTo(n, r + 4, n, r, 1),
                                      l.arcTo(n, r, n + 4, r, 1)));
                        }
                        l.fill();
                    }
                }
            }
            function W(e) {
                if (!y.current) {
                    B = 0;
                    return;
                }
                A = h[c];
                let t = e - V,
                    n = Math.min(64, t);
                ((V = e),
                    !(function (e, t) {
                        if (
                            ++C < 30 ||
                            e > 100 ||
                            (F.push(e), F.length > 60 && F.shift(), F.length < 60 || t - f < 3e3 || c >= h.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < F.length; e++) n += F[e];
                        let r = n / F.length;
                        r <= 22 ||
                            ((A = h[++c]),
                            (f = t),
                            (S = -1),
                            D(),
                            console.log(
                                "[Conjure/glow-dither] perf degrade \u2192 spacing",
                                A,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = m[p.current] ?? m.home,
                    l = 1 - Math.exp(-n / 80);
                ((j += (r.blob - j) * l), (R += (r.twink - R) * l), (k += (r.alpha - k) * l));
                let i = 1.5 * j;
                for (let e = 0; e < M.length; e++) {
                    let t = M[e];
                    ((t.x += t.vx * n * i),
                        (t.y += t.vy * n * i),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
                }
                if ((O(0.001 * e), null != I && e >= I)) {
                    ((B = 0), ($.current = null));
                    return;
                }
                B = requestAnimationFrame(W);
            }
            return (
                ($.current = () => {
                    0 === B && ((V = performance.now()), (B = requestAnimationFrame(W)));
                }),
                n
                    ? ((j = m[p.current].blob),
                      (R = m[p.current].twink),
                      (k = m[p.current].alpha),
                      O(0.001 * performance.now()),
                      ($.current = null))
                    : (B = requestAnimationFrame(W)),
                () => {
                    (($.current = null),
                        cancelAnimationFrame(B),
                        L.disconnect(),
                        q.disconnect(),
                        window.removeEventListener("resize", z));
                }
            );
        }, []));
    let j = s.P5;
    return (
        (j = "conversation" === t ? `${j} ${s.wY}` : "home" === t ? `${j} ${s.Qy}` : `${j} ${s.fR}`),
        "right" === n && (j = `${j} ${s.L$}`),
        null != i && (j = `${j} ${s.f1}`),
        (0, r.jsx)("div", {
            ref: o,
            className: j,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: g, className: "right" === n ? `${s.DX} ${s.l4}` : s.DX }),
        })
    );
});
var p = n(839806);
function b(e) {
    let { state: t, orientation: n, intro: l = !1 } = e,
        i = "right" === n ? `${p.ys} ${p.WR}` : p.ys;
    return (0, r.jsxs)("div", {
        className: l ? `${p.D1} ${p.BE}` : p.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: i,
                "data-state": t,
                children: [(0, r.jsx)("div", { className: p.Fc }), (0, r.jsx)("div", { className: p.dW })],
            }),
            (0, r.jsx)(g, { state: t, orientation: n, introMs: l ? 1e3 : void 0 }),
        ],
    });
}
function x(e) {
    let { projectId: t, orientation: n = "bottom", state: l } = e,
        a = (0, i.bG)([o.A], () => (o.A.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, r.jsx)(b, { state: l ?? a, orientation: n });
}
function v() {
    return (0, r.jsx)(b, { state: "thinking", orientation: "bottom", intro: !0 });
}
