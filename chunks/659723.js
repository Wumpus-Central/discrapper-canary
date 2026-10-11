n.d(t, { A: () => p });
var r = n(477900),
    i = n(582128),
    l = n(17928),
    a = n(245179);
n(321073);
var o = n(148087),
    s = n(725927);
let u = [6, 8, 10, 12],
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
                y = d.home.twink,
                A = d.home.alpha,
                j = u[c],
                R = [],
                N = 0,
                $ = Array(8).fill(""),
                k = !1;
            function F() {
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
                        $[t] = `rgba(${e}, ${n}, ${r}, ${l})`;
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
                    (s = (function (e, t, n) {
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
                    })(e, t, j)));
            }
            function O() {
                let t = e.getBoundingClientRect(),
                    l = t.width,
                    a = t.height;
                (0.5 > Math.abs(l - i) && 0.5 > Math.abs(a - o)) ||
                    ((i = l),
                    (o = a),
                    (e.width = Math.max(1, Math.floor(i * r))),
                    (e.height = Math.max(1, Math.floor(o * r))),
                    null != n && (n.setTransform(r, 0, 0, r, 0, 0), (n.imageSmoothingEnabled = !1)),
                    P(),
                    q(0.001 * performance.now()));
            }
            O();
            let I = new ResizeObserver(O);
            (I.observe(t), window.addEventListener("resize", O));
            let S = performance.now(),
                D = 0;
            function q(e) {
                var t, r, l;
                if (i <= 0 || o <= 0) return;
                (n.clearRect(0, 0, i, o), (n.globalAlpha = A));
                let a = j,
                    u = "right" === g.current,
                    c = u ? o : i,
                    h = c <= 1e3 ? 1.2 : (1e3 / c) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let n = 0; n < s.length; n++) {
                    let r,
                        l = s[n],
                        c = (l.i * a) / i,
                        d = (l.j * a) / o,
                        { u: f, v: m } = ((t = k), u ? { u: d, v: t ? 1 - c : c } : { u: c, v: d }),
                        g =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    i = 1 - t,
                                    l = 1 - Math.sqrt(r * r + i * i * 1.8);
                                return l < 0 ? 0 : l * l;
                            })(f, m, h);
                    for (let e = 0; e < M.length; e++) {
                        let t = M[e],
                            n = f - t.x,
                            r = m - t.y,
                            i = (n * n + r * r) / (t.radius * t.radius);
                        g += t.strength * Math.exp(-i) * 0.7;
                    }
                    let p = 0.1 * Math.sin(e * l.freq * 1.85 * y + l.phase),
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
                        ((n.fillStyle = $[e]), n.beginPath());
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
            function G(e) {
                if (!v.current) {
                    D = 0;
                    return;
                }
                j = u[c];
                let t = e - S,
                    n = Math.min(64, t);
                ((S = e),
                    !(function (e, t) {
                        if (
                            ++N < 30 ||
                            e > 100 ||
                            (R.push(e), R.length > 60 && R.shift(), R.length < 60 || t - h < 3e3 || c >= u.length - 1)
                        )
                            return;
                        let n = 0;
                        for (let e = 0; e < R.length; e++) n += R[e];
                        let r = n / R.length;
                        r <= 22 ||
                            ((j = u[++c]),
                            (h = t),
                            (E = -1),
                            P(),
                            console.log(
                                "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                j,
                                "avg",
                                r.toFixed(2),
                                "ms",
                            ));
                    })(t, e));
                let r = d[m.current] ?? d.home,
                    i = 1 - Math.exp(-n / 80);
                ((w += (r.blob - w) * i), (y += (r.twink - y) * i), (A += (r.alpha - A) * i));
                let l = 1.5 * w;
                for (let e = 0; e < M.length; e++) {
                    let t = M[e];
                    ((t.x += t.vx * n * l),
                        (t.y += t.vy * n * l),
                        (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                        (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                        (t.vx += (Math.random() - 0.5) * 2e-7 * n),
                        (t.vy += (Math.random() - 0.5) * 2e-7 * n));
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
        "right" === n && (x = `${x} ${s.L$}`),
        (0, r.jsx)("div", {
            ref: l,
            className: x,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: a, className: "right" === n ? `${s.DX} ${s.l4}` : s.DX }),
        })
    );
});
var g = n(839806);
function p(e) {
    let { projectId: t, orientation: n = "bottom", state: i, intensity: o = "row" } = e,
        s = (0, l.bG)([a.A], () => (a.A.isThinking(t) ? "thinking" : "conversation"), [t]),
        u = i ?? s,
        c = "right" === n ? `${g.ys} ${g.WR}` : g.ys;
    return (0, r.jsxs)("div", {
        className: g.D1,
        "data-conjure-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: c,
                "data-state": u,
                "data-intensity": o,
                children: [(0, r.jsx)("div", { className: g.Fc }), (0, r.jsx)("div", { className: g.dW })],
            }),
            (0, r.jsx)(m, { state: u, orientation: n }),
        ],
    });
}
