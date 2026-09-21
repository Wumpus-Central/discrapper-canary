l.d(t, { A: () => R });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    o = l(320448),
    u = l(691885),
    d = l(193249),
    c = l(834730),
    m = l(922016),
    f = l(866665),
    h = l(939249),
    g = l(783977),
    x = l(976713),
    p = l(313265);
(l(321073), l(134528), l(947204));
var v = l(947936);
let b = 1e3 / 30,
    j = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    y = 2 * Math.PI;
function k(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function w() {
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
                if (null == l) return;
                ((l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${d}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (d * d) / e) : d;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function w() {
                if (null == t || null == l) return;
                let e = t.clientWidth,
                    n = t.clientHeight;
                if (e === o && n === u) return;
                ((o = e), (c = (d = ((u = n) - 2 - 2) / 3) + 1));
                let r = a?.querySelectorAll("[data-stop]"),
                    m = r?.[r.length - 1];
                (null != m && (i = m.offsetLeft + m.offsetWidth / 2),
                    (s = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let f = window.devicePixelRatio,
                    h = Number.isFinite(f) && f > 0 ? f : 1;
                ((t.width = Math.round(o * h)), (t.height = Math.round(u * h)), l.setTransform(h, 0, 0, h, 0, 0), v());
            }
            (w(),
                (m = requestAnimationFrame(function e(a) {
                    if (((m = requestAnimationFrame(e)), a - f < b)) return;
                    let v = a - f;
                    if (((f = a), null == t || null == l || 0 === o || null == r)) return;
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
                        (h && l.clearRect(0, 0, o, u), (h = !1));
                        return;
                    }
                    (h || (x = a), (h = !0), l.clearRect(0, 0, o, u));
                    let T = I - 1 - (1 - M) * 16,
                        R = (a - p) / 1e3,
                        P = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (a - x) / 1500))) ** 3),
                        _ = Math.ceil(T / c);
                    l.fillStyle = n;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * k(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(R * y * 0.13 + k(e, 29) * y))) * P,
                            a = 0;
                        for (let t of j) {
                            let l = (e * t.stagger + 0.07 * k(e, t.salt)) * y;
                            a += t.weight * Math.sin(R * y * t.hz + l);
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
                            let h = (T - u) / n;
                            if (h >= 1) break;
                            let g = Math.min(6, Math.floor(7 * (1 - h ** r)));
                            ((a =
                                0.07 > k(t - i, e + 613)
                                    ? "123456".charAt(0)
                                    : g < 6
                                      ? "123456".charAt(g)
                                      : "789ABC".charAt(Math.floor(6 * k(e, 977)))),
                                (f && s.some((e) => Math.abs(u - e) < m)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - h) / 0.34) *
                                        M),
                                    l.fillText(a, u, o)));
                        }
                    }
                    l.globalAlpha = 1;
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
        (0, n.jsx)("canvas", { ref: e, className: v.Z, "aria-hidden": "true" })
    );
}
var N = l(757713);
function A(e) {
    let { activeIndex: t, stops: l, ariaLabel: r, disabled: s, onSelect: o, className: u } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        m = a.useRef(null),
        [f, h] = a.useState(-1),
        g = a.useRef(!1),
        x = a.useRef(t),
        p = a.useRef({ activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
        v = a.useRef(!1),
        b = t >= 0 ? t : f,
        j = t < 0 && f >= 0,
        y = a.useCallback((e, t, l, n) => {
            let a = c.current,
                r = m.current;
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
        k = a.useCallback(
            (e, t) => {
                let l = d.current,
                    n = e >= 0 ? l?.querySelector(`[data-stop='${e}']`) : null;
                null != n && y(n.offsetLeft, n.offsetWidth, l?.offsetWidth ?? 0, t);
            },
            [y],
        );
    function A(e) {
        if (s) return;
        let n = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === n) return;
        e.preventDefault();
        let a = t >= 0 ? t : n > 0 ? -1 : l.length,
            r = Math.min(l.length - 1, Math.max(0, a + n));
        r !== t && (o(r), d.current?.querySelector(`[data-stop='${r}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = b >= 0,
                n = e && g.current;
            ((g.current = e),
                (x.current = b),
                (p.current = { activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
                v.current || k(b, n ? "animate" : "arrive"));
        }, [b, t, s, o, l.length, p, k]),
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
                        r.index !== p.current.activeIndex && p.current.onSelect(r.index));
                    let n = l.at - l.snappedAt < 300;
                    y(
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
                y(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function i(n) {
                if (p.current.disabled || p.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let l = e.getBoundingClientRect(),
                        n = [];
                    for (let t = 0; t < p.current.stopCount; t += 1)
                        n.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: l.left, rowWidth: l.width, handleWidth: t.offsetWidth, stops: n };
                })();
                null != a &&
                    (n.preventDefault(),
                    t.setPointerCapture(n.pointerId),
                    (l = {
                        pointerId: n.pointerId,
                        metrics: a,
                        snapped: p.current.activeIndex,
                        snappedAt: n.timeStamp,
                        releasedAt: 0,
                        x: n.clientX,
                        at: n.timeStamp,
                        frame: 0,
                    }),
                    (v.current = !0));
            }
            function s(e) {
                if (null != l) {
                    if (0 === e.buttons) return void o(e.clientX);
                    ((l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(r)));
                }
            }
            function o(e) {
                let r = l;
                if (((l = null), (v.current = !1), null == r)) return;
                (0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId));
                let i = a(r.metrics, n(r.metrics, e ?? r.x));
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
                    (null != l && 0 !== l.frame && cancelAnimationFrame(l.frame),
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
        (0, n.jsx)("div", {
            className: i()(N.u4, u),
            role: "group",
            "aria-label": r,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: N.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: N.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: m, className: i()(N.GS, { [N.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(N.p$, { [N.Jb]: b < 0, [N.jz]: j, [N.al]: t >= 0 && !s }),
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
                                className: N.ds,
                                onKeyDown: A,
                                onPointerEnter: () => h(l),
                                onPointerLeave: () => h((e) => (e === l ? -1 : e)),
                                onFocus: () => h(l),
                                onBlur: () => h((e) => (e === l ? -1 : e)),
                                onClick: () => o(l),
                                children: (0, n.jsx)("span", { className: N.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: N.jN, "aria-hidden": "true", children: (0, n.jsx)(w, {}) }),
                ],
            }),
        })
    );
}
var E = l(856795),
    S = l(50617),
    C = l(375708),
    I = l(752065);
function M(e) {
    let [t, l] = a.useState(e),
        [n, r] = a.useState(!1),
        [i, s] = a.useState(e);
    return (
        i !== e && (s(e), e ? l(!0) : r(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function T(e) {
    let { settings: t, choices: l, disabled: r, onChange: m, placement: f, open: h, entered: g } = e,
        [v, b] = a.useState(!1),
        j = M(v),
        y = (0, x.EF)(t, l.main),
        k = v ? s.t : o._,
        w = a.useMemo(
            () => l.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p.oU[e.provider] })),
            [l.main],
        ),
        N = a.useMemo(() => l.thinking.map((e) => ({ id: e, label: p.hW[e] ?? e, value: e })), [l.thinking]);
    function T(e) {
        return l.main.find((t) => t.id === e)?.supports_fast === !0;
    }
    function R(e) {
        let { fast: t, ...l } = e;
        m((0, x.ko)(!0 === t && T(e.model) ? { ...l, fast: !0 } : l));
    }
    let P = x.Q0.map((e) => e.summary()),
        _ = y >= 0 ? P[y] : (0, x.tg)(t, l.main),
        { text: L, phase: F } = (0, E.Q)(_);
    return (0, n.jsx)("div", {
        className: I.qd,
        "data-placement": f ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(I.t$, { [I.Zr]: h && g, [I.GF]: !h }),
            role: "dialog",
            "aria-label": C.intl.string(S.default["2NWMqY"]),
            children: [
                j.mounted
                    ? (0, n.jsxs)("div", {
                          className: i()(I.Nr, I.uO, { [I.Zr]: v && j.entered, [I.GF]: !v }),
                          children: [
                              (0, n.jsx)(u.l, {
                                  label: C.intl.string(S.default["9FRudW"]),
                                  options: w,
                                  value: t.main.model,
                                  onSelectionChange: (e) => R({ ...t.main, model: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              (0, n.jsx)(u.l, {
                                  label: C.intl.string(S.default["4AsQHS"]),
                                  options: N,
                                  value: t.main.thinking,
                                  onSelectionChange: (e) => R({ ...t.main, thinking: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              T(t.main.model)
                                  ? (0, n.jsx)(d.d, {
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
                (0, n.jsxs)("div", {
                    className: `${I.Nr} ${I.rF}`,
                    children: [
                        (0, n.jsxs)("div", {
                            className: I.wx,
                            children: [
                                (0, n.jsxs)("button", {
                                    type: "button",
                                    className: I.y6,
                                    "aria-expanded": v,
                                    "aria-label": C.intl.string(S.default.IaLFoX),
                                    onClick: () => b((e) => !e),
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: C.intl.string(S.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(k, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: I.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(I.Z, { [I.xQ]: "exit" === F, [I.lm]: "enter" === F }),
                                    children: L,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: I.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: I.Nb,
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(S.default["5DOL2g"]),
                                        }),
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(S.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(A, {
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
    let { settings: t, choices: l, disabled: r, onChange: i, className: s, icon: o } = e,
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
    return (0, n.jsx)(m.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        shouldShow: k,
        onRequestClose: () => y(!1),
        animation: m.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(T, {
                settings: v,
                choices: l,
                disabled: r,
                onChange: b,
                placement: t,
                open: j,
                entered: w,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(f.m, {
                text: C.intl.string(S.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(h.D, {
                    innerRef: u,
                    className: s ?? I.hZ,
                    "aria-label": C.intl.string(S.default.GoSNDN),
                    ...e,
                    onClick: () => y((e) => !e),
                    "aria-expanded": j,
                    children: o ?? (0, n.jsx)(g.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
