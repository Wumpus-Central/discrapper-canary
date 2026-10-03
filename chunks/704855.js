(n.d(t, { A: () => m }), n(321073), n(134528), n(947204));
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(947936);
let u = 1e3 / 30,
    o = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    d = 2 * Math.PI;
function c(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function f() {
    let e = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = e.current,
                n = t?.getContext("2d");
            if (null == t || null == n || !document.documentElement.classList.contains("full-motion")) return;
            let l = getComputedStyle(t).getPropertyValue("color").trim(),
                r = t.closest('[role="group"]'),
                a = r?.querySelector("[data-vibegrations-effort-handle]") ?? null,
                i = 0,
                s = [],
                f = 0,
                h = 0,
                m = 8,
                p = 9,
                x = 0,
                g = 0,
                v = !1,
                b = 0,
                y = 0,
                k = performance.now();
            function j() {
                if (null == n) return;
                ((n.textAlign = "center"),
                    (n.textBaseline = "middle"),
                    (n.font = `${m}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let l = n.measureText(t);
                    e = Math.max(e, l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (m * m) / e) : m;
                n.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function M() {
                if (null == t || null == n) return;
                let e = t.clientWidth,
                    l = t.clientHeight;
                if (e === f && l === h) return;
                ((f = e), (p = (m = ((h = l) - 2 - 2) / 3) + 1));
                let a = r?.querySelectorAll("[data-stop]"),
                    u = a?.[a.length - 1];
                (null != u && (i = u.offsetLeft + u.offsetWidth / 2),
                    (s = null == a ? [] : Array.from(a, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((t.width = Math.round(f * d)), (t.height = Math.round(h * d)), n.setTransform(d, 0, 0, d, 0, 0), j());
            }
            (M(),
                (x = requestAnimationFrame(function e(r) {
                    if (((x = requestAnimationFrame(e)), r - g < u)) return;
                    let j = r - g;
                    if (((g = r), null == t || null == n || 0 === f || null == a)) return;
                    let M = Number(a.dataset.effortCentre),
                        A = a.hasAttribute("data-effort-live"),
                        C = Number.isFinite(M) && Math.abs(M - i) > 16;
                    if (!v && (!A || C)) return;
                    b = Math.min(1, Math.max(0, b + ((A ? 1 : -1) * j) / 260));
                    let E = t.getBoundingClientRect(),
                        w = E.width > 0 ? E.width / f : 1,
                        S = a.getBoundingClientRect(),
                        L = (S.left - E.left) / w,
                        W = (1 - Math.min(1, Math.abs(L + S.width / w / 2 - i) / 16)) * b;
                    if (W < 0.01) {
                        (v && n.clearRect(0, 0, f, h), (v = !1));
                        return;
                    }
                    (v || (y = r), (v = !0), n.clearRect(0, 0, f, h));
                    let N = L - 1 - (1 - W) * 16,
                        R = (r - k) / 1e3,
                        I = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (r - y) / 1500))) ** 3),
                        P = Math.ceil(N / p);
                    n.fillStyle = l;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * c(e, 11)),
                            l = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(R * d * 0.13 + c(e, 29) * d))) * I,
                            r = 0;
                        for (let t of o) {
                            let n = (e * t.stagger + 0.07 * c(e, t.salt)) * d;
                            r += t.weight * Math.sin(R * d * t.hz + n);
                        }
                        let a = 0.30000000000000004 + 0.7 * (1 + r),
                            i = Math.floor((R * t) / p),
                            u = 1 + e * p + m / 2,
                            f = m / 2 + 3,
                            x = Math.abs(u - h / 2) < f;
                        for (let t = 0; t < P; t++) {
                            let r,
                                o = N - (t * p + m / 2);
                            if (o < 0) break;
                            let d = (N - o) / l;
                            if (d >= 1) break;
                            let h = Math.min(6, Math.floor(7 * (1 - d ** a)));
                            ((r =
                                0.07 > c(t - i, e + 613)
                                    ? "123456".charAt(0)
                                    : h < 6
                                      ? "123456".charAt(h)
                                      : "789ABC".charAt(Math.floor(6 * c(e, 977)))),
                                (x && s.some((e) => Math.abs(o - e) < f)) ||
                                    ((n.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - d) / 0.34) *
                                        W),
                                    n.fillText(r, o, u)));
                        }
                    }
                    n.globalAlpha = 1;
                })));
            let A = document.fonts;
            null != A && A.load(`${m}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(j, () => void 0);
            let C = "u" < typeof ResizeObserver ? null : new ResizeObserver(M);
            return (
                C?.observe(t),
                () => {
                    (cancelAnimationFrame(x), C?.disconnect());
                }
            );
        }, []),
        (0, l.jsx)("canvas", { ref: e, className: s.Z, "aria-hidden": "true" })
    );
}
var h = n(757713);
function m(e) {
    let { activeIndex: t, stops: n, ariaLabel: a, disabled: s, onSelect: u, className: o } = e,
        d = r.useRef(null),
        c = r.useRef(null),
        m = r.useRef(null),
        [p, x] = r.useState(-1),
        g = r.useRef(!1),
        v = r.useRef(t),
        b = r.useRef({ activeIndex: t, disabled: s, onSelect: u, stopCount: n.length }),
        y = r.useRef(!1),
        k = t >= 0 ? t : p,
        j = t < 0 && p >= 0,
        M = r.useCallback((e, t, n, l) => {
            let r = c.current,
                a = m.current;
            null != r &&
                null != a &&
                ("arrive" === l
                    ? ((r.style.transitionProperty = "opacity, background-color"),
                      (a.style.transitionProperty = "opacity"))
                    : "snap" === l || "drag" === l
                      ? ((r.style.transitionProperty = "none"), (a.style.transitionProperty = "none"))
                      : ((r.style.transitionProperty = ""), (a.style.transitionProperty = "")),
                (r.style.transform = `translateX(${e}px)`),
                (r.style.width = `${t}px`),
                (r.dataset.effortCentre = String(e + t / 2)),
                (a.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === l || "snap" === l) &&
                    (r.getBoundingClientRect(), (r.style.transitionProperty = ""), (a.style.transitionProperty = "")));
        }, []),
        A = r.useCallback(
            (e, t) => {
                let n = d.current,
                    l = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != l && M(l.offsetLeft, l.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [M],
        );
    function C(e) {
        if (s) return;
        let l = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === l) return;
        e.preventDefault();
        let r = t >= 0 ? t : l > 0 ? -1 : n.length,
            a = Math.min(n.length - 1, Math.max(0, r + l));
        a !== t && (u(a), d.current?.querySelector(`[data-stop='${a}']`)?.focus());
    }
    return (
        r.useLayoutEffect(() => {
            let e = k >= 0,
                l = e && g.current;
            ((g.current = e),
                (v.current = k),
                (b.current = { activeIndex: t, disabled: s, onSelect: u, stopCount: n.length }),
                y.current || A(k, l ? "animate" : "arrive"));
        }, [k, t, s, u, n.length, b, A]),
        r.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => A(v.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [A]),
        r.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let n = null;
            function l(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function r(e, t) {
                let n = null;
                for (let l = 0; l < e.stops.length; l += 1) {
                    let r = e.stops[l];
                    if (null == r) continue;
                    let a = t - r;
                    (null == n || Math.abs(a) < Math.abs(n.offset)) && (n = { index: l, left: r, offset: a });
                }
                return n;
            }
            function a() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = l(e, n.x),
                    a = r(e, t);
                if (null == a) return;
                if (24 >= Math.abs(a.offset)) {
                    var i;
                    let t;
                    n.snapped !== a.index &&
                        ((n.snapped = a.index),
                        (n.snappedAt = n.at),
                        a.index !== b.current.activeIndex && b.current.onSelect(a.index));
                    let l = n.at - n.snappedAt < 300;
                    M(
                        a.left +
                            ((t = Math.min(Math.abs((i = a.offset)) / 24, 1)), 12 * Math.sign(i) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        l ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let s = n.at - n.releasedAt < 300;
                M(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function i(l) {
                if (b.current.disabled || b.current.activeIndex < 0 || null == t) return;
                let r = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        l = [];
                    for (let t = 0; t < b.current.stopCount; t += 1)
                        l.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: l };
                })();
                null != r &&
                    (l.preventDefault(),
                    t.setPointerCapture(l.pointerId),
                    (n = {
                        pointerId: l.pointerId,
                        metrics: r,
                        snapped: b.current.activeIndex,
                        snappedAt: l.timeStamp,
                        releasedAt: 0,
                        x: l.clientX,
                        at: l.timeStamp,
                        frame: 0,
                    }),
                    (y.current = !0));
            }
            function s(e) {
                if (null != n) {
                    if (0 === e.buttons) return void u(e.clientX);
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(a)));
                }
            }
            function u(e) {
                let a = n;
                if (((n = null), (y.current = !1), null == a)) return;
                (0 !== a.frame && cancelAnimationFrame(a.frame),
                    null != t && t.hasPointerCapture(a.pointerId) && t.releasePointerCapture(a.pointerId));
                let i = r(a.metrics, l(a.metrics, e ?? a.x));
                null != i &&
                    (M(i.left, a.metrics.handleWidth, a.metrics.rowWidth, "animate"),
                    i.index !== b.current.activeIndex && b.current.onSelect(i.index));
            }
            function o(e) {
                u(e.clientX);
            }
            function f() {
                u(null);
            }
            return (
                t.addEventListener("pointerdown", i),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", o),
                t.addEventListener("pointercancel", o),
                t.addEventListener("lostpointercapture", f),
                window.addEventListener("pointerup", o),
                window.addEventListener("blur", f),
                () => {
                    (null != n && 0 !== n.frame && cancelAnimationFrame(n.frame),
                        t.removeEventListener("pointerdown", i),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", o),
                        t.removeEventListener("pointercancel", o),
                        t.removeEventListener("lostpointercapture", f),
                        window.removeEventListener("pointerup", o),
                        window.removeEventListener("blur", f));
                }
            );
        }, [b, y, M]),
        (0, l.jsx)("div", {
            className: i()(h.u4, o),
            role: "group",
            "aria-label": a,
            children: (0, l.jsxs)("div", {
                ref: d,
                className: h.Gb,
                children: [
                    (0, l.jsx)("span", {
                        className: h.Ek,
                        "aria-hidden": "true",
                        children: (0, l.jsx)("span", { ref: m, className: i()(h.GS, { [h.eG]: t < 0 }) }),
                    }),
                    (0, l.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(h.p$, { [h.Jb]: k < 0, [h.jz]: j, [h.al]: t >= 0 && !s }),
                        "aria-hidden": "true",
                    }),
                    n.map((e, n) =>
                        (0, l.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": n,
                                "aria-pressed": n === t,
                                "aria-label": e,
                                disabled: s,
                                className: h.ds,
                                onKeyDown: C,
                                onPointerEnter: () => x(n),
                                onPointerLeave: () => x((e) => (e === n ? -1 : e)),
                                onFocus: () => x(n),
                                onBlur: () => x((e) => (e === n ? -1 : e)),
                                onClick: () => u(n),
                                children: (0, l.jsx)("span", { className: h.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, l.jsx)("span", { className: h.jN, "aria-hidden": "true", children: (0, l.jsx)(f, {}) }),
                ],
            }),
        })
    );
}
