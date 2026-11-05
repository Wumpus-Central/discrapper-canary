(n.d(t, { A: () => x }), n(321073), n(134528), n(947204));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(218394),
    o = n(390870);
let u = 1e3 / 30,
    d = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    c = 2 * Math.PI;
function f(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function h() {
    let e = r.useRef(null),
        t = (0, s.j)();
    return (
        r.useEffect(() => {
            let n = e.current,
                l = n?.getContext("2d");
            if (null == n || null == l || !t || !document.documentElement.classList.contains("full-motion")) return;
            let r = getComputedStyle(n).getPropertyValue("color").trim(),
                i = n.closest('[role="group"]'),
                a = i?.querySelector("[data-conjure-effort-handle]") ?? null,
                s = 0,
                o = [],
                h = 0,
                p = 0,
                m = 8,
                x = 9,
                g = 0,
                v = 0,
                b = !1,
                y = 0,
                M = 0,
                A = performance.now();
            function w() {
                if (null == l) return;
                ((l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${m}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (m * m) / e) : m;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function j() {
                if (null == n || null == l) return;
                let e = n.clientWidth,
                    t = n.clientHeight;
                if (e === h && t === p) return;
                ((h = e), (x = (m = ((p = t) - 2 - 2) / 3) + 1));
                let r = i?.querySelectorAll("[data-stop]"),
                    a = r?.[r.length - 1];
                (null != a && (s = a.offsetLeft + a.offsetWidth / 2),
                    (o = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let u = window.devicePixelRatio,
                    d = Number.isFinite(u) && u > 0 ? u : 1;
                ((n.width = Math.round(h * d)), (n.height = Math.round(p * d)), l.setTransform(d, 0, 0, d, 0, 0), w());
            }
            (j(),
                (g = requestAnimationFrame(function e(t) {
                    if (((g = requestAnimationFrame(e)), t - v < u)) return;
                    let i = t - v;
                    if (((v = t), null == n || null == l || 0 === h || null == a)) return;
                    let w = Number(a.dataset.effortCentre),
                        j = a.hasAttribute("data-effort-live"),
                        C = Number.isFinite(w) && Math.abs(w - s) > 16;
                    if (!b && (!j || C)) return;
                    y = Math.min(1, Math.max(0, y + ((j ? 1 : -1) * i) / 260));
                    let E = n.getBoundingClientRect(),
                        L = E.width > 0 ? E.width / h : 1,
                        k = a.getBoundingClientRect(),
                        P = (k.left - E.left) / L,
                        R = (1 - Math.min(1, Math.abs(P + k.width / L / 2 - s) / 16)) * y;
                    if (R < 0.01) {
                        (b && l.clearRect(0, 0, h, p), (b = !1));
                        return;
                    }
                    (b || (M = t), (b = !0), l.clearRect(0, 0, h, p));
                    let S = P - 1 - (1 - R) * 16,
                        I = (t - A) / 1e3,
                        W = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (t - M) / 1500))) ** 3),
                        N = Math.ceil(S / x);
                    l.fillStyle = r;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * f(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(I * c * 0.13 + f(e, 29) * c))) * W,
                            r = 0;
                        for (let t of d) {
                            let n = (e * t.stagger + 0.07 * f(e, t.salt)) * c;
                            r += t.weight * Math.sin(I * c * t.hz + n);
                        }
                        let i = 1 - 0.7 + 0.7 * (1 + r),
                            a = Math.floor((I * t) / x),
                            s = 1 + e * x + m / 2,
                            u = m / 2 + 3,
                            h = Math.abs(s - p / 2) < u;
                        for (let t = 0; t < N; t++) {
                            let r,
                                d = S - (t * x + m / 2);
                            if (d < 0) break;
                            let c = (S - d) / n;
                            if (c >= 1) break;
                            let p = Math.min(6, Math.floor(7 * (1 - c ** i)));
                            ((r =
                                0.07 > f(t - a, e + 613)
                                    ? "123456".charAt(0)
                                    : p < 6
                                      ? "123456".charAt(p)
                                      : "789ABC".charAt(Math.floor(6 * f(e, 977)))),
                                (h && o.some((e) => Math.abs(d - e) < u)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - c) / 0.34) *
                                        R),
                                    l.fillText(r, d, s)));
                        }
                    }
                    l.globalAlpha = 1;
                })));
            let C = document.fonts;
            null != C && C.load(`${m}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(w, () => void 0);
            let E = "u" < typeof ResizeObserver ? null : new ResizeObserver(j);
            return (
                E?.observe(n),
                () => {
                    (cancelAnimationFrame(g), E?.disconnect());
                }
            );
        }, [t]),
        (0, l.jsx)("canvas", { ref: e, className: o.Z, "aria-hidden": "true" })
    );
}
var p = n(841479);
let m = [];
function x(e) {
    let { activeIndex: t, stops: n, lockedStops: i = m, ariaLabel: s, disabled: o, onSelect: u, className: d } = e,
        c = r.useRef(null),
        f = r.useRef(null),
        x = r.useRef(null),
        [g, v] = r.useState(-1),
        b = r.useRef(!1),
        y = r.useRef(t),
        M = r.useRef({ activeIndex: t, disabled: o, onSelect: u, stopCount: n.length, locked: i }),
        A = r.useRef(!1),
        w = t >= 0 ? t : g,
        j = t < 0 && g >= 0,
        C = r.useCallback((e, t, n, l) => {
            let r = f.current,
                i = x.current;
            null != r &&
                null != i &&
                ("arrive" === l
                    ? ((r.style.transitionProperty = "opacity, background-color"),
                      (i.style.transitionProperty = "opacity"))
                    : "snap" === l || "drag" === l
                      ? ((r.style.transitionProperty = "none"), (i.style.transitionProperty = "none"))
                      : ((r.style.transitionProperty = ""), (i.style.transitionProperty = "")),
                (r.style.transform = `translateX(${e}px)`),
                (r.style.width = `${t}px`),
                (r.dataset.effortCentre = String(e + t / 2)),
                (i.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === l || "snap" === l) &&
                    (r.getBoundingClientRect(), (r.style.transitionProperty = ""), (i.style.transitionProperty = "")));
        }, []),
        E = r.useCallback(
            (e, t) => {
                let n = c.current,
                    l = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != l && C(l.offsetLeft, l.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [C],
        );
    function L(e) {
        if (o) return;
        let l = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === l) return;
        e.preventDefault();
        let r = (t >= 0 ? t : l > 0 ? -1 : n.length) + l;
        for (; i.includes(r);) r += l;
        r < 0 || r >= n.length || r === t || (u(r), c.current?.querySelector(`[data-stop='${r}']`)?.focus());
    }
    return (
        r.useLayoutEffect(() => {
            let e = w >= 0,
                l = e && b.current;
            ((b.current = e),
                (y.current = w),
                (M.current = { activeIndex: t, disabled: o, onSelect: u, stopCount: n.length, locked: i }),
                A.current || E(w, l ? "animate" : "arrive"));
        }, [w, t, o, u, n.length, i, M, E]),
        r.useEffect(() => {
            let e = c.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => E(y.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [E]),
        r.useEffect(() => {
            let e = c.current,
                t = f.current;
            if (null == e || null == t) return;
            let n = null;
            function l(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function r(e, t) {
                let n = null;
                for (let l = 0; l < e.stops.length; l += 1) {
                    let r = e.stops[l];
                    if (null == r || (M.current.locked.includes(l) && l !== M.current.activeIndex)) continue;
                    let i = t - r;
                    (null == n || Math.abs(i) < Math.abs(n.offset)) && (n = { index: l, left: r, offset: i });
                }
                return n;
            }
            function i() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = l(e, n.x),
                    i = r(e, t);
                if (null == i) return;
                if (24 >= Math.abs(i.offset)) {
                    var a;
                    let t;
                    n.snapped !== i.index &&
                        ((n.snapped = i.index),
                        (n.snappedAt = n.at),
                        i.index !== M.current.activeIndex && M.current.onSelect(i.index));
                    let l = n.at - n.snappedAt < 300;
                    C(
                        i.left +
                            ((t = Math.min(Math.abs((a = i.offset)) / 24, 1)), 12 * Math.sign(a) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        l ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let s = n.at - n.releasedAt < 300;
                C(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function a(l) {
                if (M.current.disabled || M.current.activeIndex < 0 || null == t) return;
                let r = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        l = [];
                    for (let t = 0; t < M.current.stopCount; t += 1)
                        l.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: l };
                })();
                null != r &&
                    (l.preventDefault(),
                    t.setPointerCapture(l.pointerId),
                    (n = {
                        pointerId: l.pointerId,
                        metrics: r,
                        snapped: M.current.activeIndex,
                        snappedAt: l.timeStamp,
                        releasedAt: 0,
                        x: l.clientX,
                        at: l.timeStamp,
                        frame: 0,
                    }),
                    (A.current = !0));
            }
            function s(e) {
                if (null != n) {
                    if (0 === e.buttons) return void o(e.clientX);
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(i)));
                }
            }
            function o(e) {
                let i = n;
                if (((n = null), (A.current = !1), null == i)) return;
                (0 !== i.frame && cancelAnimationFrame(i.frame),
                    null != t && t.hasPointerCapture(i.pointerId) && t.releasePointerCapture(i.pointerId));
                let a = r(i.metrics, l(i.metrics, e ?? i.x));
                null != a &&
                    (C(a.left, i.metrics.handleWidth, i.metrics.rowWidth, "animate"),
                    a.index !== M.current.activeIndex && M.current.onSelect(a.index));
            }
            function u(e) {
                o(e.clientX);
            }
            function d() {
                o(null);
            }
            return (
                t.addEventListener("pointerdown", a),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", u),
                t.addEventListener("pointercancel", u),
                t.addEventListener("lostpointercapture", d),
                window.addEventListener("pointerup", u),
                window.addEventListener("blur", d),
                () => {
                    (null != n && 0 !== n.frame && cancelAnimationFrame(n.frame),
                        t.removeEventListener("pointerdown", a),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", u),
                        t.removeEventListener("pointercancel", u),
                        t.removeEventListener("lostpointercapture", d),
                        window.removeEventListener("pointerup", u),
                        window.removeEventListener("blur", d));
                }
            );
        }, [M, A, C]),
        (0, l.jsx)("div", {
            className: a()(p.u4, d),
            role: "group",
            "aria-label": s,
            children: (0, l.jsxs)("div", {
                ref: c,
                className: p.Gb,
                children: [
                    (0, l.jsx)("span", {
                        className: p.Ek,
                        "aria-hidden": "true",
                        children: (0, l.jsx)("span", { ref: x, className: a()(p.GS, { [p.eG]: t < 0 }) }),
                    }),
                    (0, l.jsx)("span", {
                        ref: f,
                        "data-conjure-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: a()(p.p$, { [p.Jb]: w < 0, [p.jz]: j, [p.al]: t >= 0 && !o }),
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
                                disabled: o || i.includes(n),
                                className: a()(p.ds, { [p.$2]: i.includes(n) }),
                                onKeyDown: L,
                                onPointerEnter: () => v(n),
                                onPointerLeave: () => v((e) => (e === n ? -1 : e)),
                                onFocus: () => v(n),
                                onBlur: () => v((e) => (e === n ? -1 : e)),
                                onClick: () => u(n),
                                children: (0, l.jsx)("span", { className: p.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, l.jsx)("span", { className: p.jN, "aria-hidden": "true", children: (0, l.jsx)(h, {}) }),
                ],
            }),
        })
    );
}
