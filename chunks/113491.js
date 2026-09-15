n.d(t, { A: () => R });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(900797),
    o = n(320448),
    u = n(691885),
    d = n(243721),
    c = n(834730),
    m = n(922016),
    f = n(866665),
    h = n(939249),
    g = n(783977),
    x = n(976713),
    p = n(313265);
(n(321073), n(134528), n(947204));
var v = n(947936);
let b = 1e3 / 30,
    j = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    y = 2 * Math.PI;
function k(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function w() {
    let e = a.useRef(null);
    return (
        a.useEffect(() => {
            let t = e.current,
                n = t?.getContext("2d");
            if (null == t || null == n || !document.documentElement.classList.contains("full-motion")) return;
            let l = getComputedStyle(t).getPropertyValue("color").trim(),
                a = t.closest('[role="group"]'),
                r = a?.querySelector("[data-vibegrations-effort-handle]") ?? null,
                i = 0,
                s = [],
                o = 0,
                u = 0,
                d = 8,
                c = 9,
                m = 0,
                f = 0,
                h = !1,
                g = 0,
                x = 0,
                p = performance.now();
            function v() {
                if (null == n) return;
                ((n.textAlign = "center"),
                    (n.textBaseline = "middle"),
                    (n.font = `${d}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let l = n.measureText(t);
                    e = Math.max(e, l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (d * d) / e) : d;
                n.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function w() {
                if (null == t || null == n) return;
                let e = t.clientWidth,
                    l = t.clientHeight;
                if (e === o && l === u) return;
                ((o = e), (c = (d = ((u = l) - 2 - 2) / 3) + 1));
                let r = a?.querySelectorAll("[data-stop]"),
                    m = r?.[r.length - 1];
                (null != m && (i = m.offsetLeft + m.offsetWidth / 2),
                    (s = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let f = window.devicePixelRatio,
                    h = Number.isFinite(f) && f > 0 ? f : 1;
                ((t.width = Math.round(o * h)), (t.height = Math.round(u * h)), n.setTransform(h, 0, 0, h, 0, 0), v());
            }
            (w(),
                (m = requestAnimationFrame(function e(a) {
                    if (((m = requestAnimationFrame(e)), a - f < b)) return;
                    let v = a - f;
                    if (((f = a), null == t || null == n || 0 === o || null == r)) return;
                    let w = Number(r.dataset.effortCentre),
                        N = r.hasAttribute("data-effort-live"),
                        A = Number.isFinite(w) && Math.abs(w - i) > 16;
                    if (!h && (!N || A)) return;
                    g = Math.min(1, Math.max(0, g + ((N ? 1 : -1) * v) / 260));
                    let E = t.getBoundingClientRect(),
                        S = E.width > 0 ? E.width / o : 1,
                        C = r.getBoundingClientRect(),
                        I = (C.left - E.left) / S,
                        M = (1 - Math.min(1, Math.abs(I + C.width / S / 2 - i) / 16)) * g;
                    if (M < 0.01) {
                        (h && n.clearRect(0, 0, o, u), (h = !1));
                        return;
                    }
                    (h || (x = a), (h = !0), n.clearRect(0, 0, o, u));
                    let T = I - 1 - (1 - M) * 16,
                        R = (a - p) / 1e3,
                        P = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (a - x) / 1500))) ** 3),
                        _ = Math.ceil(T / c);
                    n.fillStyle = l;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * k(e, 11)),
                            l = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(R * y * 0.13 + k(e, 29) * y))) * P,
                            a = 0;
                        for (let t of j) {
                            let n = (e * t.stagger + 0.07 * k(e, t.salt)) * y;
                            a += t.weight * Math.sin(R * y * t.hz + n);
                        }
                        let r = 0.30000000000000004 + 0.7 * (1 + a),
                            i = Math.floor((R * t) / c),
                            o = 1 + e * c + d / 2,
                            m = d / 2 + 3,
                            f = Math.abs(o - u / 2) < m;
                        for (let t = 0; t < _; t++) {
                            let a,
                                u = T - (t * c + d / 2);
                            if (u < 0) break;
                            let h = (T - u) / l;
                            if (h >= 1) break;
                            let g = Math.min(6, Math.floor(7 * (1 - h ** r)));
                            ((a =
                                0.07 > k(t - i, e + 613)
                                    ? "123456".charAt(0)
                                    : g < 6
                                      ? "123456".charAt(g)
                                      : "789ABC".charAt(Math.floor(6 * k(e, 977)))),
                                (f && s.some((e) => Math.abs(u - e) < m)) ||
                                    ((n.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - h) / 0.34) *
                                        M),
                                    n.fillText(a, u, o)));
                        }
                    }
                    n.globalAlpha = 1;
                })));
            let N = document.fonts;
            null != N && N.load(`${d}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(v, () => void 0);
            let A = "u" < typeof ResizeObserver ? null : new ResizeObserver(w);
            return (
                A?.observe(t),
                () => {
                    (cancelAnimationFrame(m), A?.disconnect());
                }
            );
        }, []),
        (0, l.jsx)("canvas", { ref: e, className: v.Z, "aria-hidden": "true" })
    );
}
var N = n(757713);
function A(e) {
    let { activeIndex: t, stops: n, ariaLabel: r, disabled: s, onSelect: o, className: u } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        m = a.useRef(null),
        [f, h] = a.useState(-1),
        g = a.useRef(!1),
        x = a.useRef(t),
        p = a.useRef({ activeIndex: t, disabled: s, onSelect: o, stopCount: n.length }),
        v = a.useRef(!1),
        b = t >= 0 ? t : f,
        j = t < 0 && f >= 0,
        y = a.useCallback((e, t, n, l) => {
            let a = c.current,
                r = m.current;
            null != a &&
                null != r &&
                ("arrive" === l
                    ? ((a.style.transitionProperty = "opacity, background-color"),
                      (r.style.transitionProperty = "opacity"))
                    : "snap" === l || "drag" === l
                      ? ((a.style.transitionProperty = "none"), (r.style.transitionProperty = "none"))
                      : ((a.style.transitionProperty = ""), (r.style.transitionProperty = "")),
                (a.style.transform = `translateX(${e}px)`),
                (a.style.width = `${t}px`),
                (a.dataset.effortCentre = String(e + t / 2)),
                (r.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === l || "snap" === l) &&
                    (a.getBoundingClientRect(), (a.style.transitionProperty = ""), (r.style.transitionProperty = "")));
        }, []),
        k = a.useCallback(
            (e, t) => {
                let n = d.current,
                    l = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != l && y(l.offsetLeft, l.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [y],
        );
    function A(e) {
        if (s) return;
        let l = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === l) return;
        e.preventDefault();
        let a = t >= 0 ? t : l > 0 ? -1 : n.length,
            r = Math.min(n.length - 1, Math.max(0, a + l));
        r !== t && (o(r), d.current?.querySelector(`[data-stop='${r}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = b >= 0,
                l = e && g.current;
            ((g.current = e),
                (x.current = b),
                (p.current = { activeIndex: t, disabled: s, onSelect: o, stopCount: n.length }),
                v.current || k(b, l ? "animate" : "arrive"));
        }, [b, t, s, o, n.length, p, k]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => k(x.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [k]),
        a.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let n = null;
            function l(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function a(e, t) {
                let n = null;
                for (let l = 0; l < e.stops.length; l += 1) {
                    let a = e.stops[l];
                    if (null == a) continue;
                    let r = t - a;
                    (null == n || Math.abs(r) < Math.abs(n.offset)) && (n = { index: l, left: a, offset: r });
                }
                return n;
            }
            function r() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = l(e, n.x),
                    r = a(e, t);
                if (null == r) return;
                if (24 >= Math.abs(r.offset)) {
                    var i;
                    let t;
                    n.snapped !== r.index &&
                        ((n.snapped = r.index),
                        (n.snappedAt = n.at),
                        r.index !== p.current.activeIndex && p.current.onSelect(r.index));
                    let l = n.at - n.snappedAt < 300;
                    y(
                        r.left +
                            ((t = Math.min(Math.abs((i = r.offset)) / 24, 1)), 12 * Math.sign(i) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        l ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let s = n.at - n.releasedAt < 300;
                y(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function i(l) {
                if (p.current.disabled || p.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        l = [];
                    for (let t = 0; t < p.current.stopCount; t += 1)
                        l.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: l };
                })();
                null != a &&
                    (l.preventDefault(),
                    t.setPointerCapture(l.pointerId),
                    (n = {
                        pointerId: l.pointerId,
                        metrics: a,
                        snapped: p.current.activeIndex,
                        snappedAt: l.timeStamp,
                        releasedAt: 0,
                        x: l.clientX,
                        at: l.timeStamp,
                        frame: 0,
                    }),
                    (v.current = !0));
            }
            function s(e) {
                if (null != n) {
                    if (0 === e.buttons) return void o(e.clientX);
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(r)));
                }
            }
            function o(e) {
                let r = n;
                if (((n = null), (v.current = !1), null == r)) return;
                (0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId));
                let i = a(r.metrics, l(r.metrics, e ?? r.x));
                null != i &&
                    (y(i.left, r.metrics.handleWidth, r.metrics.rowWidth, "animate"),
                    i.index !== p.current.activeIndex && p.current.onSelect(i.index));
            }
            function u(e) {
                o(e.clientX);
            }
            function m() {
                o(null);
            }
            return (
                t.addEventListener("pointerdown", i),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", u),
                t.addEventListener("pointercancel", u),
                t.addEventListener("lostpointercapture", m),
                window.addEventListener("pointerup", u),
                window.addEventListener("blur", m),
                () => {
                    (null != n && 0 !== n.frame && cancelAnimationFrame(n.frame),
                        t.removeEventListener("pointerdown", i),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", u),
                        t.removeEventListener("pointercancel", u),
                        t.removeEventListener("lostpointercapture", m),
                        window.removeEventListener("pointerup", u),
                        window.removeEventListener("blur", m));
                }
            );
        }, [p, v, y]),
        (0, l.jsx)("div", {
            className: i()(N.u4, u),
            role: "group",
            "aria-label": r,
            children: (0, l.jsxs)("div", {
                ref: d,
                className: N.Gb,
                children: [
                    (0, l.jsx)("span", {
                        className: N.Ek,
                        "aria-hidden": "true",
                        children: (0, l.jsx)("span", { ref: m, className: i()(N.GS, { [N.eG]: t < 0 }) }),
                    }),
                    (0, l.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(N.p$, { [N.Jb]: b < 0, [N.jz]: j, [N.al]: t >= 0 && !s }),
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
                                className: N.ds,
                                onKeyDown: A,
                                onPointerEnter: () => h(n),
                                onPointerLeave: () => h((e) => (e === n ? -1 : e)),
                                onFocus: () => h(n),
                                onBlur: () => h((e) => (e === n ? -1 : e)),
                                onClick: () => o(n),
                                children: (0, l.jsx)("span", { className: N.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, l.jsx)("span", { className: N.jN, "aria-hidden": "true", children: (0, l.jsx)(w, {}) }),
                ],
            }),
        })
    );
}
var E = n(856795),
    S = n(759967),
    C = n(375708),
    I = n(752065);
function M(e) {
    let [t, n] = a.useState(e),
        [l, r] = a.useState(!1),
        [i, s] = a.useState(e);
    return (
        i !== e && (s(e), e ? n(!0) : r(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function T(e) {
    let { settings: t, choices: n, disabled: r, onChange: m, placement: f, open: h, entered: g } = e,
        [v, b] = a.useState(!1),
        j = M(v),
        y = (0, x.EF)(t, n.main),
        k = v ? s.t : o._,
        w = a.useMemo(
            () => n.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p.o[e.provider] })),
            [n.main],
        ),
        N = a.useMemo(() => n.thinking.map((e) => ({ id: e, label: p.h[e] ?? e, value: e })), [n.thinking]);
    function T(e) {
        return n.main.find((t) => t.id === e)?.supports_fast === !0;
    }
    function R(e) {
        let { fast: t, ...n } = e;
        m((0, x.ko)(!0 === t && T(e.model) ? { ...n, fast: !0 } : n));
    }
    let P = x.Q0.map((e) => e.summary()),
        _ = y >= 0 ? P[y] : (0, x.tg)(t, n.main),
        { text: L, phase: F } = (0, E.Q)(_);
    return (0, l.jsx)("div", {
        className: I.qd,
        "data-placement": f ?? void 0,
        children: (0, l.jsxs)("div", {
            className: i()(I.t$, { [I.Zr]: h && g, [I.GF]: !h }),
            role: "dialog",
            "aria-label": C.intl.string(S.default["2NWMqY"]),
            children: [
                j.mounted
                    ? (0, l.jsxs)("div", {
                          className: i()(I.Nr, I.uO, { [I.Zr]: v && j.entered, [I.GF]: !v }),
                          children: [
                              (0, l.jsx)(u.l, {
                                  label: C.intl.string(S.default["9FRudW"]),
                                  options: w,
                                  value: t.main.model,
                                  onSelectionChange: (e) => R({ ...t.main, model: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              (0, l.jsx)(u.l, {
                                  label: C.intl.string(S.default["4AsQHS"]),
                                  options: N,
                                  value: t.main.thinking,
                                  onSelectionChange: (e) => R({ ...t.main, thinking: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              T(t.main.model)
                                  ? (0, l.jsx)(d.d, {
                                        label: C.intl.string(S.default.SYLSgx),
                                        description: C.intl.string(S.default.HITWAI),
                                        checked: !0 === t.main.fast,
                                        disabled: r,
                                        onChange: (e) => R({ ...t.main, fast: e }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: `${I.Nr} ${I.rF}`,
                    children: [
                        (0, l.jsxs)("div", {
                            className: I.wx,
                            children: [
                                (0, l.jsxs)("button", {
                                    type: "button",
                                    className: I.y6,
                                    "aria-expanded": v,
                                    "aria-label": C.intl.string(S.default.IaLFoX),
                                    onClick: () => b((e) => !e),
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: C.intl.string(S.default.GDs9Vq),
                                        }),
                                        (0, l.jsx)(k, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: I.vg,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(I.Z, { [I.xQ]: "exit" === F, [I.lm]: "enter" === F }),
                                    children: L,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: I.hs,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: I.Nb,
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(S.default.c11EuO),
                                        }),
                                        (0, l.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(S.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(A, {
                                    activeIndex: y,
                                    stops: P,
                                    ariaLabel: C.intl.string(S.default.GDs9Vq),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let t = x.Q0[e];
                                        null != t && R((0, x.lA)(t));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function R(e) {
    let { settings: t, choices: n, disabled: r, onChange: i, className: s, icon: o } = e,
        u = a.useRef(null),
        [d, c] = a.useState(null),
        [x, p] = a.useState(t);
    t !== x && (p(t), c(null));
    let v = d ?? t,
        b = a.useCallback(
            (e) => {
                (c(e), i(e));
            },
            [i],
        ),
        [j, y] = a.useState(!1),
        { mounted: k, entered: w } = M(j);
    return (0, l.jsx)(m.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        shouldShow: k,
        onRequestClose: () => y(!1),
        animation: m.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, l.jsx)(T, {
                settings: v,
                choices: n,
                disabled: r,
                onChange: b,
                placement: t,
                open: j,
                entered: w,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(f.m, {
                text: C.intl.string(S.default.GoSNDN),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, l.jsx)(h.D, {
                    innerRef: u,
                    className: s ?? I.hZ,
                    "aria-label": C.intl.string(S.default.GoSNDN),
                    ...e,
                    onClick: () => y((e) => !e),
                    "aria-expanded": j,
                    children: o ?? (0, l.jsx)(g.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
