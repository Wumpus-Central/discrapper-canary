n.d(t, { A: () => g });
var r = n(477900),
    i = n(582128),
    a = n(17928),
    l = n(783791);
n(321073);
var o = n(145615);
let s = [6, 8, 10, 12],
    u = 0,
    h = -1 / 0,
    c = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function d(e, t, n) {
    let r = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return ((r = Math.imul(r ^ (r >>> 13), 0x4bf19f61)), (((r ^= r >>> 16) >>> 0) % 1e6) / 1e6);
}
let f = i.memo(function (e) {
    let { state: t, orientation: n = "bottom" } = e,
        a = i.useRef(null),
        l = i.useRef(null),
        f = i.useRef(t);
    i.useEffect(() => {
        f.current = t;
    }, [t]);
    let m = i.useRef(n);
    (i.useEffect(() => {
        m.current = n;
    }, [n]),
        i.useEffect(() => {
            let e = l.current,
                t = a.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let n = e.getContext("2d", { alpha: !0 });
            if (null == n) return;
            let r =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                i = 0,
                o = 0,
                g = [],
                v = 0,
                b = 0,
                p = (function () {
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
                y = c.home.twink,
                M = c.home.alpha,
                w = s[u],
                A = [],
                $ = 0,
                j = Array(8).fill(""),
                k = !1;
            function R() {
                (!(function () {
                    let {
                            r: e,
                            g: n,
                            b: r,
                        } = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-fill").trim();
                            if ("" === e) return { r: 225, g: 240, b: 255 };
                            let n = e.split(",").map((e) => parseInt(e.trim(), 10));
                            return 3 !== n.length || n.some((e) => !Number.isFinite(e))
                                ? { r: 225, g: 240, b: 255 }
                                : { r: n[0], g: n[1], b: n[2] };
                        })(),
                        i = (function () {
                            let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-opacity").trim();
                            if ("" === e) return 0.1;
                            let n = parseFloat(e);
                            return Number.isFinite(n) ? n : 0.1;
                        })();
                    for (let t = 0; t < 8; t++) {
                        let a = ((t + 0.5) / 8) * i;
                        j[t] = `rgba(${e}, ${n}, ${r}, ${a})`;
                    }
                })(),
                    (k = "1" === getComputedStyle(t).getPropertyValue("--custom-vibegrations-glow-mirror").trim()));
            }
            R();
            let T = [];
            for (let e = 0; e < 8; e++) T.push([]);
            let F = new MutationObserver(R);
            F.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "dir", "lang"] });
            let N = -1;
            function P() {
                let e = Math.max(i, v),
                    t = Math.max(o, b);
                (e === v && t === b && N === w && g.length > 0) ||
                    ((v = e),
                    (b = t),
                    (N = w),
                    (g = (function (e, t, n) {
                        let r = [],
                            { cols: i, rows: a } = {
                                cols: Math.ceil(Math.max(0, e) / n) + 1,
                                rows: Math.ceil(Math.min(600, Math.max(0, t)) / n) + 1,
                            };
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < i; t++)
                                r.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * d(t, e, 1),
                                    phase: d(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * d(t, e, 3),
                                });
                        return r;
                    })(e, t, w)));
            }
            function E() {
                let t = e.getBoundingClientRect(),
                    a = t.width,
                    l = t.height;
                (0.5 > Math.abs(a - i) && 0.5 > Math.abs(l - o)) ||
                    ((i = a),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(i * r))),
                    (e.height = Math.max(1, Math.floor(o * r))),
                    null != n && (n.setTransform(r, 0, 0, r, 0, 0), (n.imageSmoothingEnabled = !1)),
                    P(),
                    q(0.001 * performance.now()));
            }
            E();
            let C = new ResizeObserver(E);
            (C.observe(t), window.addEventListener("resize", E));
            let I = performance.now(),
                S = 0;
            function q(e) {
                var t, r, a;
                if (i <= 0 || o <= 0) return;
                (n.clearRect(0, 0, i, o), (n.globalAlpha = M));
                let l = w,
                    s = "right" === m.current,
                    u = s ? o : i,
                    h = u <= 1e3 ? 1.2 : (1e3 / u) * 1.2;
                for (let e = 0; e < 8; e++) T[e].length = 0;
                for (let n = 0; n < g.length; n++) {
                    let r,
                        a = g[n],
                        u = (a.i * l) / i,
                        c = (a.j * l) / o,
                        { u: d, v: f } = ((t = k), s ? { u: c, v: t ? 1 - u : u } : { u: u, v: c }),
                        m =
                            0.55 *
                            (function (e, t, n) {
                                let r = (e - 0.5) * n,
                                    i = 1 - t,
                                    a = 1 - Math.sqrt(r * r + i * i * 1.8);
                                return a < 0 ? 0 : a * a;
                            })(d, f, h);
                    for (let e = 0; e < p.length; e++) {
                        let t = p[e],
                            n = d - t.x,
                            r = f - t.y,
                            i = (n * n + r * r) / (t.radius * t.radius);
                        m += t.strength * Math.exp(-i) * 0.7;
                    }
                    let v = 0.1 * Math.sin(e * a.freq * 1.85 * y + a.phase),
                        b = m - (a.threshold + v);
                    1;
                    if (!(b <= -0.1)) {
                        if (b >= 0.1) r = 7;
                        else {
                            let e = (b + 0.1) / 0.2;
                            r = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        Number.isFinite(r) && T[r].push(a);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let t = T[e];
                    if (0 !== t.length) {
                        ((n.fillStyle = j[e]), n.beginPath());
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            ((r = i.i * l),
                                (a = i.j * l),
                                "function" == typeof n.roundRect
                                    ? n.roundRect(r, a, 4, 4, 1)
                                    : (n.moveTo(r + 1, a),
                                      n.arcTo(r + 4, a, r + 4, a + 4, 1),
                                      n.arcTo(r + 4, a + 4, r, a + 4, 1),
                                      n.arcTo(r, a + 4, r, a, 1),
                                      n.arcTo(r, a, r + 4, a, 1)));
                        }
                        n.fill();
                    }
                }
            }
            return (
                (S = requestAnimationFrame(function e(t) {
                    w = s[u];
                    let n = t - I,
                        r = Math.min(64, n);
                    ((I = t),
                        !(function (e, t) {
                            if (
                                ++$ < 30 ||
                                e > 100 ||
                                (A.push(e),
                                A.length > 60 && A.shift(),
                                A.length < 60 || t - h < 3e3 || u >= s.length - 1)
                            )
                                return;
                            let n = 0;
                            for (let e = 0; e < A.length; e++) n += A[e];
                            let r = n / A.length;
                            r <= 22 ||
                                ((w = s[++u]),
                                (h = t),
                                (N = -1),
                                P(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    w,
                                    "avg",
                                    r.toFixed(2),
                                    "ms",
                                ));
                        })(n, t));
                    let i = c[f.current] ?? c.home,
                        a = 1 - Math.exp(-r / 80);
                    ((x += (i.blob - x) * a), (y += (i.twink - y) * a), (M += (i.alpha - M) * a));
                    let l = 1.5 * x;
                    for (let e = 0; e < p.length; e++) {
                        let t = p[e];
                        ((t.x += t.vx * r * l),
                            (t.y += t.vy * r * l),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * r),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * r));
                    }
                    (q(0.001 * t), (S = requestAnimationFrame(e)));
                })),
                () => {
                    (cancelAnimationFrame(S), C.disconnect(), F.disconnect(), window.removeEventListener("resize", E));
                }
            );
        }, []));
    let g = o.P5;
    return (
        (g = "conversation" === t ? `${g} ${o.wY}` : "home" === t ? `${g} ${o.Qy}` : `${g} ${o.fR}`),
        "right" === n && (g = `${g} ${o.L$}`),
        (0, r.jsx)("div", {
            ref: a,
            className: g,
            "aria-hidden": "true",
            children: (0, r.jsx)("canvas", { ref: l, className: "right" === n ? `${o.DX} ${o.l4}` : o.DX }),
        })
    );
});
var m = n(408694);
function g(e) {
    let { projectId: t, orientation: n = "bottom", state: i } = e,
        o = (0, a.bG)([l.Ay], () => (l.Ay.isThinking(t) ? "thinking" : "conversation"), [t]),
        s = i ?? o,
        u = "right" === n ? `${m.ys} ${m.WR}` : m.ys;
    return (0, r.jsxs)("div", {
        className: m.D1,
        "data-vibegrations-glow": !0,
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: u,
                "data-state": s,
                children: [(0, r.jsx)("div", { className: m.Fc }), (0, r.jsx)("div", { className: m.dW })],
            }),
            (0, r.jsx)(f, { state: s, orientation: n }),
        ],
    });
}
