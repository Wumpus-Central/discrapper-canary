l.d(t, { A: () => P });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    o = l(320448),
    u = l(691885),
    d = l(834730),
    c = l(922016),
    m = l(866665),
    f = l(939249),
    h = l(783977),
    g = l(976713),
    x = l(313265);
l(321073), l(134528), l(947204);
var p = l(224341),
    v = l(947936);
let j = 1e3 / 30,
    b = [
        { hz: 0.19, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.083, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    y = 2 * Math.PI;
function k(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function N() {
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
                s = 0,
                o = 0,
                u = 8,
                d = 9,
                c = 0,
                m = 0,
                f = !1,
                h = 0,
                g = performance.now();
            function x() {
                if (null == l) return;
                (l.textAlign = "center"),
                    (l.textBaseline = "middle"),
                    (l.font = `${u}px 'AI Visual Identity Glyphs', monospace`);
                let e = 0;
                for (let t of p.QI + p.vd) {
                    let n = l.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (u * u) / e) : u;
                l.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function v() {
                if (null == t || null == l) return;
                let e = t.clientWidth,
                    n = t.clientHeight;
                if (e === s && n === o) return;
                (s = e), (d = (u = ((o = n) - 3) / 4) + 1);
                let r = a?.querySelectorAll("[data-stop]"),
                    c = r?.[r.length - 1];
                null != c && (i = c.offsetLeft + c.offsetWidth / 2);
                let m = window.devicePixelRatio,
                    f = Number.isFinite(m) && m > 0 ? m : 1;
                (t.width = Math.round(s * f)), (t.height = Math.round(o * f)), l.setTransform(f, 0, 0, f, 0, 0), x();
            }
            v(),
                (c = requestAnimationFrame(function e(a) {
                    if (((c = requestAnimationFrame(e)), a - m < j)) return;
                    let x = a - m;
                    if (((m = a), null == t || null == l || 0 === s || null == r)) return;
                    let v = Number(r.dataset.effortCentre),
                        N = r.hasAttribute("data-effort-live"),
                        A = Number.isFinite(v) && Math.abs(v - i) > 16;
                    if (!f && (!N || A)) return;
                    h = Math.min(1, Math.max(0, h + ((N ? 1 : -1) * x) / 260));
                    let w = t.getBoundingClientRect(),
                        S = w.width > 0 ? w.width / s : 1,
                        E = r.getBoundingClientRect(),
                        C = (E.left - w.left) / S,
                        I = (1 - Math.min(1, Math.abs(C + E.width / S / 2 - i) / 16)) * h;
                    if (I < 0.01) {
                        f && l.clearRect(0, 0, s, o), (f = !1);
                        return;
                    }
                    (f = !0), l.clearRect(0, 0, s, o);
                    let T = C - (1 - I) * 16,
                        M = (a - g) / 1e3,
                        P = Math.ceil(T / d);
                    l.fillStyle = n;
                    for (let e = 0; e < 4; e++) {
                        let t = 72 * (0.825 + 0.35 * k(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(M * y * 0.13 + k(e, 29) * y))),
                            a = 0;
                        for (let t of b) {
                            let l = (e * t.stagger + 0.07 * k(e, t.salt)) * y;
                            a += t.weight * Math.sin(M * y * t.hz + l);
                        }
                        let r = 0.30000000000000004 + 0.7 * (1 + a),
                            i = Math.floor((M * t) / d);
                        for (let t = 0; t < P; t++) {
                            let a,
                                s = T - (t * d + u / 2);
                            if (s < 0) break;
                            let o = (T - s) / n;
                            if (o >= 1) break;
                            let c = 1 - o ** r,
                                m = Math.min(p.QI.length, Math.floor(c * (p.QI.length + 1)));
                            (a =
                                0.07 > k(t - i, e + 613)
                                    ? p.QI.charAt(0)
                                    : m < p.QI.length
                                      ? p.QI.charAt(m)
                                      : p.vd.charAt(Math.floor(k(e, 977) * p.vd.length))),
                                (l.globalAlpha =
                                    0.5 *
                                    (function (e) {
                                        let t = Math.min(1, Math.max(0, e));
                                        return t * t * (3 - 2 * t);
                                    })((1 - o) / 0.34) *
                                    I),
                                l.fillText(a, s, e * d + u / 2);
                        }
                    }
                    l.globalAlpha = 1;
                }));
            let N = document.fonts;
            null != N && N.load(`${u}px 'AI Visual Identity Glyphs'`, p.QI + p.vd).then(x, () => void 0);
            let A = "u" < typeof ResizeObserver ? null : new ResizeObserver(v);
            return (
                A?.observe(t),
                () => {
                    cancelAnimationFrame(c), A?.disconnect();
                }
            );
        }, []),
        (0, n.jsx)("canvas", { ref: e, className: v.Z, "aria-hidden": "true" })
    );
}
var A = l(757713);
function w(e) {
    let { activeIndex: t, stops: l, ariaLabel: r, disabled: s, onSelect: o, className: u } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        m = a.useRef(null),
        [f, h] = a.useState(-1),
        g = a.useRef(!1),
        x = a.useRef(t),
        p = a.useRef({ activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
        v = a.useRef(!1),
        j = t >= 0 ? t : f,
        b = t < 0 && f >= 0,
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
    function w(e) {
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
            let e = j >= 0,
                n = e && g.current;
            (g.current = e),
                (x.current = j),
                (p.current = { activeIndex: t, disabled: s, onSelect: o, stopCount: l.length }),
                v.current || k(j, n ? "animate" : "arrive");
        }, [j, t, s, o, l.length, p, k]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => k(x.current, "snap"));
            return t.observe(e), () => t.disconnect();
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
                null != l.snapped && (l.releasedAt = l.at), (l.snapped = null);
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
                    (l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(r));
                }
            }
            function o(e) {
                let r = l;
                if (((l = null), (v.current = !1), null == r)) return;
                0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId);
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
                    null != l && 0 !== l.frame && cancelAnimationFrame(l.frame),
                        t.removeEventListener("pointerdown", i),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", u),
                        t.removeEventListener("pointercancel", u),
                        t.removeEventListener("lostpointercapture", m),
                        window.removeEventListener("pointerup", u),
                        window.removeEventListener("blur", m);
                }
            );
        }, [p, v, y]),
        (0, n.jsx)("div", {
            className: i()(A.u4, u),
            role: "group",
            "aria-label": r,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: A.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: A.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: m, className: i()(A.GS, { [A.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(A.p$, { [A.Jb]: j < 0, [A.jz]: b, [A.al]: t >= 0 && !s }),
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
                                className: A.ds,
                                onKeyDown: w,
                                onPointerEnter: () => h(l),
                                onPointerLeave: () => h((e) => (e === l ? -1 : e)),
                                onFocus: () => h(l),
                                onBlur: () => h((e) => (e === l ? -1 : e)),
                                onClick: () => o(l),
                                children: (0, n.jsx)("span", { className: A.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: A.jN, "aria-hidden": "true", children: (0, n.jsx)(N, {}) }),
                ],
            }),
        })
    );
}
var S = l(856795),
    E = l(50617),
    C = l(375708),
    I = l(752065);
function T(e) {
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
                cancelAnimationFrame(n), cancelAnimationFrame(l);
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function M(e) {
    let { settings: t, choices: l, disabled: r, onChange: c, placement: m, open: f, entered: h } = e,
        [p, v] = a.useState(!1),
        j = T(p),
        b = (0, g.EF)(t),
        y = p ? s.t : o._,
        k = a.useMemo(
            () => l.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: x.o[e.provider] })),
            [l.main],
        ),
        N = a.useMemo(() => l.thinking.map((e) => ({ id: e, label: x.h[e] ?? e, value: e })), [l.thinking]);
    function A(e) {
        c((0, g.ko)(e));
    }
    let M = g.Q0.map((e) => e.summary()),
        P = b >= 0 ? M[b] : (0, g.tg)(t, l.main),
        { text: _, phase: R } = (0, S.Q)(P);
    return (0, n.jsx)("div", {
        className: I.qd,
        "data-placement": m ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(I.t$, { [I.Zr]: f && h, [I.GF]: !f }),
            role: "dialog",
            "aria-label": C.intl.string(E.default["2NWMqY"]),
            children: [
                j.mounted
                    ? (0, n.jsxs)("div", {
                          className: i()(I.Nr, I.uO, { [I.Zr]: p && j.entered, [I.GF]: !p }),
                          children: [
                              (0, n.jsx)(u.l, {
                                  label: C.intl.string(E.default["9FRudW"]),
                                  options: k,
                                  value: t.main.model,
                                  onSelectionChange: (e) => A({ ...t.main, model: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
                              (0, n.jsx)(u.l, {
                                  label: C.intl.string(E.default["4AsQHS"]),
                                  options: N,
                                  value: t.main.thinking,
                                  onSelectionChange: (e) => A({ ...t.main, thinking: e }),
                                  selectionMode: "single",
                                  disabled: r,
                                  fullWidth: !0,
                              }),
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
                                    "aria-expanded": p,
                                    "aria-label": C.intl.string(E.default.IaLFoX),
                                    onClick: () => v((e) => !e),
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: C.intl.string(E.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(y, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: I.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(d.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(I.Z, { [I.xQ]: "exit" === R, [I.lm]: "enter" === R }),
                                    children: _,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: I.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: I.Nb,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(E.default.c11EuO),
                                        }),
                                        (0, n.jsx)(d.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(E.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(w, {
                                    activeIndex: b,
                                    stops: M,
                                    ariaLabel: C.intl.string(E.default.GDs9Vq),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let t = g.Q0[e];
                                        null != t && A({ model: t.model, thinking: t.thinking });
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
function P(e) {
    let { settings: t, choices: l, disabled: r, onChange: i, className: s, icon: o } = e,
        u = a.useRef(null),
        [d, g] = a.useState(null),
        [x, p] = a.useState(t);
    t !== x && (p(t), g(null));
    let v = d ?? t,
        j = a.useCallback(
            (e) => {
                g(e), i(e);
            },
            [i],
        ),
        [b, y] = a.useState(!1),
        { mounted: k, entered: N } = T(b);
    return (0, n.jsx)(c.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        shouldShow: k,
        onRequestClose: () => y(!1),
        animation: c.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(M, {
                settings: v,
                choices: l,
                disabled: r,
                onChange: j,
                placement: t,
                open: b,
                entered: N,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(m.m, {
                text: C.intl.string(E.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(f.D, {
                    innerRef: u,
                    className: s ?? I.hZ,
                    "aria-label": C.intl.string(E.default.GoSNDN),
                    ...e,
                    onClick: () => y((e) => !e),
                    "aria-expanded": b,
                    children: o ?? (0, n.jsx)(h.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
