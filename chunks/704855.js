(l.d(t, { A: () => h }), l(321073), l(134528), l(947204));
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(947936);
let u = 1e3 / 30,
    o = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    d = 2 * Math.PI;
function c(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function m() {
    let e = a.useRef(null);
    return (
        a.useEffect(() => {
            let t = e.current,
                l = t?.getContext("2d");
            if (null == t || null == l || !document.documentElement.classList.contains("full-motion")) return;
            let n = getComputedStyle(t).getPropertyValue("color").trim(),
                a = t.closest('[role="group"]'),
                r = a?.querySelector("[data-vibegrations-effort-handle]") ?? null,
                i = 0,
                s = [],
                m = 0,
                f = 0,
                h = 8,
                x = 9,
                g = 0,
                p = 0,
                v = !1,
                b = 0,
                j = 0,
                y = performance.now();
            function k() {
                if (null == l) return;
                ((l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${h}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (h * h) / e) : h;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function N() {
                if (null == t || null == l) return;
                let e = t.clientWidth,
                    n = t.clientHeight;
                if (e === m && n === f) return;
                ((m = e), (x = (h = ((f = n) - 2 - 2) / 3) + 1));
                let r = a?.querySelectorAll("[data-stop]"),
                    u = r?.[r.length - 1];
                (null != u && (i = u.offsetLeft + u.offsetWidth / 2),
                    (s = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((t.width = Math.round(m * d)), (t.height = Math.round(f * d)), l.setTransform(d, 0, 0, d, 0, 0), k());
            }
            (N(),
                (g = requestAnimationFrame(function e(a) {
                    if (((g = requestAnimationFrame(e)), a - p < u)) return;
                    let k = a - p;
                    if (((p = a), null == t || null == l || 0 === m || null == r)) return;
                    let N = Number(r.dataset.effortCentre),
                        w = r.hasAttribute("data-effort-live"),
                        A = Number.isFinite(N) && Math.abs(N - i) > 16;
                    if (!v && (!w || A)) return;
                    b = Math.min(1, Math.max(0, b + ((w ? 1 : -1) * k) / 260));
                    let E = t.getBoundingClientRect(),
                        S = E.width > 0 ? E.width / m : 1,
                        C = r.getBoundingClientRect(),
                        I = (C.left - E.left) / S,
                        M = (1 - Math.min(1, Math.abs(I + C.width / S / 2 - i) / 16)) * b;
                    if (M < 0.01) {
                        (v && l.clearRect(0, 0, m, f), (v = !1));
                        return;
                    }
                    (v || (j = a), (v = !0), l.clearRect(0, 0, m, f));
                    let T = I - 1 - (1 - M) * 16,
                        R = (a - y) / 1e3,
                        P = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (a - j) / 1500))) ** 3),
                        _ = Math.ceil(T / x);
                    l.fillStyle = n;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * c(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(R * d * 0.13 + c(e, 29) * d))) * P,
                            a = 0;
                        for (let t of o) {
                            let l = (e * t.stagger + 0.07 * c(e, t.salt)) * d;
                            a += t.weight * Math.sin(R * d * t.hz + l);
                        }
                        let r = 0.30000000000000004 + 0.7 * (1 + a),
                            i = Math.floor((R * t) / x),
                            u = 1 + e * x + h / 2,
                            m = h / 2 + 3,
                            g = Math.abs(u - f / 2) < m;
                        for (let t = 0; t < _; t++) {
                            let a,
                                o = T - (t * x + h / 2);
                            if (o < 0) break;
                            let d = (T - o) / n;
                            if (d >= 1) break;
                            let f = Math.min(6, Math.floor(7 * (1 - d ** r)));
                            ((a =
                                0.07 > c(t - i, e + 613)
                                    ? "123456".charAt(0)
                                    : f < 6
                                      ? "123456".charAt(f)
                                      : "789ABC".charAt(Math.floor(6 * c(e, 977)))),
                                (g && s.some((e) => Math.abs(o - e) < m)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - d) / 0.34) *
                                        M),
                                    l.fillText(a, o, u)));
                        }
                    }
                    l.globalAlpha = 1;
                })));
            let w = document.fonts;
            null != w && w.load(`${h}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(k, () => void 0);
            let A = "u" < typeof ResizeObserver ? null : new ResizeObserver(N);
            return (
                A?.observe(t),
                () => {
                    (cancelAnimationFrame(g), A?.disconnect());
                }
            );
        }, []),
        (0, n.jsx)("canvas", { ref: e, className: s.Z, "aria-hidden": "true" })
    );
}
var f = l(757713);
function h(e) {
    let { activeIndex: t, stops: l, ariaLabel: r, disabled: s, onSelect: u, className: o } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        h = a.useRef(null),
        [x, g] = a.useState(-1),
        p = a.useRef(!1),
        v = a.useRef(t),
        b = a.useRef({ activeIndex: t, disabled: s, onSelect: u, stopCount: l.length }),
        j = a.useRef(!1),
        y = t >= 0 ? t : x,
        k = t < 0 && x >= 0,
        N = a.useCallback((e, t, l, n) => {
            let a = c.current,
                r = h.current;
            null != a &&
                null != r &&
                ("arrive" === n
                    ? ((a.style.transitionProperty = "opacity, background-color"),
                      (r.style.transitionProperty = "opacity"))
                    : "snap" === n || "drag" === n
                      ? ((a.style.transitionProperty = "none"), (r.style.transitionProperty = "none"))
                      : ((a.style.transitionProperty = ""), (r.style.transitionProperty = "")),
                (a.style.transform = `translateX(${e}px)`),
                (a.style.width = `${t}px`),
                (a.dataset.effortCentre = String(e + t / 2)),
                (r.style.transform = `translateX(${e + t - l}px)`),
                ("arrive" === n || "snap" === n) &&
                    (a.getBoundingClientRect(), (a.style.transitionProperty = ""), (r.style.transitionProperty = "")));
        }, []),
        w = a.useCallback(
            (e, t) => {
                let l = d.current,
                    n = e >= 0 ? l?.querySelector(`[data-stop='${e}']`) : null;
                null != n && N(n.offsetLeft, n.offsetWidth, l?.offsetWidth ?? 0, t);
            },
            [N],
        );
    function A(e) {
        if (s) return;
        let n = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === n) return;
        e.preventDefault();
        let a = t >= 0 ? t : n > 0 ? -1 : l.length,
            r = Math.min(l.length - 1, Math.max(0, a + n));
        r !== t && (u(r), d.current?.querySelector(`[data-stop='${r}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = y >= 0,
                n = e && p.current;
            ((p.current = e),
                (v.current = y),
                (b.current = { activeIndex: t, disabled: s, onSelect: u, stopCount: l.length }),
                j.current || w(y, n ? "animate" : "arrive"));
        }, [y, t, s, u, l.length, b, w]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => w(v.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [w]),
        a.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let l = null;
            function n(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function a(e, t) {
                let l = null;
                for (let n = 0; n < e.stops.length; n += 1) {
                    let a = e.stops[n];
                    if (null == a) continue;
                    let r = t - a;
                    (null == l || Math.abs(r) < Math.abs(l.offset)) && (l = { index: n, left: a, offset: r });
                }
                return l;
            }
            function r() {
                if (null == l) return;
                l.frame = 0;
                let { metrics: e } = l,
                    t = n(e, l.x),
                    r = a(e, t);
                if (null == r) return;
                if (24 >= Math.abs(r.offset)) {
                    var i;
                    let t;
                    l.snapped !== r.index &&
                        ((l.snapped = r.index),
                        (l.snappedAt = l.at),
                        r.index !== b.current.activeIndex && b.current.onSelect(r.index));
                    let n = l.at - l.snappedAt < 300;
                    N(
                        r.left +
                            ((t = Math.min(Math.abs((i = r.offset)) / 24, 1)), 12 * Math.sign(i) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        n ? "animate" : "drag",
                    );
                    return;
                }
                (null != l.snapped && (l.releasedAt = l.at), (l.snapped = null));
                let s = l.at - l.releasedAt < 300;
                N(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function i(n) {
                if (b.current.disabled || b.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let l = e.getBoundingClientRect(),
                        n = [];
                    for (let t = 0; t < b.current.stopCount; t += 1)
                        n.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: l.left, rowWidth: l.width, handleWidth: t.offsetWidth, stops: n };
                })();
                null != a &&
                    (n.preventDefault(),
                    t.setPointerCapture(n.pointerId),
                    (l = {
                        pointerId: n.pointerId,
                        metrics: a,
                        snapped: b.current.activeIndex,
                        snappedAt: n.timeStamp,
                        releasedAt: 0,
                        x: n.clientX,
                        at: n.timeStamp,
                        frame: 0,
                    }),
                    (j.current = !0));
            }
            function s(e) {
                if (null != l) {
                    if (0 === e.buttons) return void u(e.clientX);
                    ((l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(r)));
                }
            }
            function u(e) {
                let r = l;
                if (((l = null), (j.current = !1), null == r)) return;
                (0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId));
                let i = a(r.metrics, n(r.metrics, e ?? r.x));
                null != i &&
                    (N(i.left, r.metrics.handleWidth, r.metrics.rowWidth, "animate"),
                    i.index !== b.current.activeIndex && b.current.onSelect(i.index));
            }
            function o(e) {
                u(e.clientX);
            }
            function m() {
                u(null);
            }
            return (
                t.addEventListener("pointerdown", i),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", o),
                t.addEventListener("pointercancel", o),
                t.addEventListener("lostpointercapture", m),
                window.addEventListener("pointerup", o),
                window.addEventListener("blur", m),
                () => {
                    (null != l && 0 !== l.frame && cancelAnimationFrame(l.frame),
                        t.removeEventListener("pointerdown", i),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", o),
                        t.removeEventListener("pointercancel", o),
                        t.removeEventListener("lostpointercapture", m),
                        window.removeEventListener("pointerup", o),
                        window.removeEventListener("blur", m));
                }
            );
        }, [b, j, N]),
        (0, n.jsx)("div", {
            className: i()(f.u4, o),
            role: "group",
            "aria-label": r,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: f.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: f.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: h, className: i()(f.GS, { [f.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(f.p$, { [f.Jb]: y < 0, [f.jz]: k, [f.al]: t >= 0 && !s }),
                        "aria-hidden": "true",
                    }),
                    l.map((e, l) =>
                        (0, n.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": l,
                                "aria-pressed": l === t,
                                "aria-label": e,
                                disabled: s,
                                className: f.ds,
                                onKeyDown: A,
                                onPointerEnter: () => g(l),
                                onPointerLeave: () => g((e) => (e === l ? -1 : e)),
                                onFocus: () => g(l),
                                onBlur: () => g((e) => (e === l ? -1 : e)),
                                onClick: () => u(l),
                                children: (0, n.jsx)("span", { className: f.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: f.jN, "aria-hidden": "true", children: (0, n.jsx)(m, {}) }),
                ],
            }),
        })
    );
}
