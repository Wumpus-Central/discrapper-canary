l.d(t, { A: () => F });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    u = l(320448),
    o = l(691885),
    d = l(193249),
    c = l(834730),
    m = l(922016),
    f = l(866665),
    h = l(939249),
    x = l(783977),
    g = l(673724),
    p = l(313265),
    v = l(759967),
    b = l(375708);
function j(e) {
    let t = (0, p.bF)(e);
    return null != t ? b.intl.string(t) : e;
}
let y = { simple: v.default.Mo0a1m, balanced: v.default.dkt78K, complex: v.default.Ly6zYL };
function k(e, t, l) {
    return e.models?.[l] ?? t?.[l]?.model ?? null;
}
function N(e, t, l) {
    let n = k(e, t, e.tier);
    return null != n && l.find((e) => e.id === n)?.supports_fast === !0;
}
(l(321073), l(134528), l(947204));
var w = l(947936);
let A = 1e3 / 30,
    E = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    S = 2 * Math.PI;
function C(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function I() {
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
                u = 0,
                o = 0,
                d = 8,
                c = 9,
                m = 0,
                f = 0,
                h = !1,
                x = 0,
                g = 0,
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
            function b() {
                if (null == t || null == l) return;
                let e = t.clientWidth,
                    n = t.clientHeight;
                if (e === u && n === o) return;
                ((u = e), (c = (d = ((o = n) - 2 - 2) / 3) + 1));
                let r = a?.querySelectorAll("[data-stop]"),
                    m = r?.[r.length - 1];
                (null != m && (i = m.offsetLeft + m.offsetWidth / 2),
                    (s = null == r ? [] : Array.from(r, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let f = window.devicePixelRatio,
                    h = Number.isFinite(f) && f > 0 ? f : 1;
                ((t.width = Math.round(u * h)), (t.height = Math.round(o * h)), l.setTransform(h, 0, 0, h, 0, 0), v());
            }
            (b(),
                (m = requestAnimationFrame(function e(a) {
                    if (((m = requestAnimationFrame(e)), a - f < A)) return;
                    let v = a - f;
                    if (((f = a), null == t || null == l || 0 === u || null == r)) return;
                    let b = Number(r.dataset.effortCentre),
                        j = r.hasAttribute("data-effort-live"),
                        y = Number.isFinite(b) && Math.abs(b - i) > 16;
                    if (!h && (!j || y)) return;
                    x = Math.min(1, Math.max(0, x + ((j ? 1 : -1) * v) / 260));
                    let k = t.getBoundingClientRect(),
                        N = k.width > 0 ? k.width / u : 1,
                        w = r.getBoundingClientRect(),
                        I = (w.left - k.left) / N,
                        M = (1 - Math.min(1, Math.abs(I + w.width / N / 2 - i) / 16)) * x;
                    if (M < 0.01) {
                        (h && l.clearRect(0, 0, u, o), (h = !1));
                        return;
                    }
                    (h || (g = a), (h = !0), l.clearRect(0, 0, u, o));
                    let T = I - 1 - (1 - M) * 16,
                        R = (a - p) / 1e3,
                        P = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (a - g) / 1500))) ** 3),
                        _ = Math.ceil(T / c);
                    l.fillStyle = n;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * C(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(R * S * 0.13 + C(e, 29) * S))) * P,
                            a = 0;
                        for (let t of E) {
                            let l = (e * t.stagger + 0.07 * C(e, t.salt)) * S;
                            a += t.weight * Math.sin(R * S * t.hz + l);
                        }
                        let r = 0.30000000000000004 + 0.7 * (1 + a),
                            i = Math.floor((R * t) / c),
                            u = 1 + e * c + d / 2,
                            m = d / 2 + 3,
                            f = Math.abs(u - o / 2) < m;
                        for (let t = 0; t < _; t++) {
                            let a,
                                o = T - (t * c + d / 2);
                            if (o < 0) break;
                            let h = (T - o) / n;
                            if (h >= 1) break;
                            let x = Math.min(6, Math.floor(7 * (1 - h ** r)));
                            ((a =
                                0.07 > C(t - i, e + 613)
                                    ? "123456".charAt(0)
                                    : x < 6
                                      ? "123456".charAt(x)
                                      : "789ABC".charAt(Math.floor(6 * C(e, 977)))),
                                (f && s.some((e) => Math.abs(o - e) < m)) ||
                                    ((l.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - h) / 0.34) *
                                        M),
                                    l.fillText(a, o, u)));
                        }
                    }
                    l.globalAlpha = 1;
                })));
            let j = document.fonts;
            null != j && j.load(`${d}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(v, () => void 0);
            let y = "u" < typeof ResizeObserver ? null : new ResizeObserver(b);
            return (
                y?.observe(t),
                () => {
                    (cancelAnimationFrame(m), y?.disconnect());
                }
            );
        }, []),
        (0, n.jsx)("canvas", { ref: e, className: w.Z, "aria-hidden": "true" })
    );
}
var M = l(757713);
function T(e) {
    let { activeIndex: t, stops: l, ariaLabel: r, disabled: s, onSelect: u, className: o } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        m = a.useRef(null),
        [f, h] = a.useState(-1),
        x = a.useRef(!1),
        g = a.useRef(t),
        p = a.useRef({ activeIndex: t, disabled: s, onSelect: u, stopCount: l.length }),
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
    function N(e) {
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
            let e = b >= 0,
                n = e && x.current;
            ((x.current = e),
                (g.current = b),
                (p.current = { activeIndex: t, disabled: s, onSelect: u, stopCount: l.length }),
                v.current || k(b, n ? "animate" : "arrive"));
        }, [b, t, s, u, l.length, p, k]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => k(g.current, "snap"));
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
                    if (0 === e.buttons) return void u(e.clientX);
                    ((l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(r)));
                }
            }
            function u(e) {
                let r = l;
                if (((l = null), (v.current = !1), null == r)) return;
                (0 !== r.frame && cancelAnimationFrame(r.frame),
                    null != t && t.hasPointerCapture(r.pointerId) && t.releasePointerCapture(r.pointerId));
                let i = a(r.metrics, n(r.metrics, e ?? r.x));
                null != i &&
                    (y(i.left, r.metrics.handleWidth, r.metrics.rowWidth, "animate"),
                    i.index !== p.current.activeIndex && p.current.onSelect(i.index));
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
        }, [p, v, y]),
        (0, n.jsx)("div", {
            className: i()(M.u4, o),
            role: "group",
            "aria-label": r,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: M.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: M.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: m, className: i()(M.GS, { [M.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-vibegrations-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: i()(M.p$, { [M.Jb]: b < 0, [M.jz]: j, [M.al]: t >= 0 && !s }),
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
                                className: M.ds,
                                onKeyDown: N,
                                onPointerEnter: () => h(l),
                                onPointerLeave: () => h((e) => (e === l ? -1 : e)),
                                onFocus: () => h(l),
                                onBlur: () => h((e) => (e === l ? -1 : e)),
                                onClick: () => u(l),
                                children: (0, n.jsx)("span", { className: M.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: M.jN, "aria-hidden": "true", children: (0, n.jsx)(I, {}) }),
                ],
            }),
        })
    );
}
var R = l(856795),
    P = l(752065);
function _(e) {
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
function L(e) {
    var t;
    let { settings: l, tiers: r, choices: m, disabled: f, onChange: h, placement: x, open: w, entered: A } = e,
        [E, S] = a.useState(!1),
        C = _(E),
        I = g.ks.indexOf(l.tier),
        M = E ? s.t : u._,
        L = a.useMemo(
            () => m.main.map((e) => ({ id: e.id, label: e.label, value: e.id, description: p.oU[e.provider] })),
            [m.main],
        ),
        F = a.useMemo(() => m.thinking.map((e) => ({ id: e, label: p.hW[e] ?? e, value: e })), [m.thinking]);
    function D(e) {
        h(
            (function (e, t, l) {
                let { fast: n, ...a } = e;
                return !0 === n && N(e, t, l) ? { ...a, fast: !0 } : a;
            })(e, r, m.main),
        );
    }
    let $ = k(l, r, l.tier),
        O = g.ks.map(j),
        q = ((t = l.tier), b.intl.string(y[t])),
        { text: z, phase: U } = (0, R.Q)(q);
    return (0, n.jsx)("div", {
        className: P.qd,
        "data-placement": x ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(P.t$, { [P.Zr]: w && A, [P.GF]: !w }),
            role: "dialog",
            "aria-label": b.intl.string(v.default["2NWMqY"]),
            children: [
                C.mounted
                    ? (0, n.jsxs)("div", {
                          className: i()(P.Nr, P.uO, { [P.Zr]: E && C.entered, [P.GF]: !E }),
                          children: [
                              null != $
                                  ? (0, n.jsx)(o.l, {
                                        label: b.intl.string(v.default["9FRudW"]),
                                        options: L,
                                        value: $,
                                        onSelectionChange: (e) => {
                                            var t;
                                            return D(((t = l.tier), { ...l, models: { ...l.models, [t]: e } }));
                                        },
                                        selectionMode: "single",
                                        disabled: f,
                                        fullWidth: !0,
                                    })
                                  : null,
                              (0, n.jsx)(o.l, {
                                  label: b.intl.string(v.default["4AsQHS"]),
                                  options: F,
                                  value: l.thinking ?? r?.[l.tier]?.thinking ?? "",
                                  onSelectionChange: (e) => D({ ...l, thinking: e }),
                                  selectionMode: "single",
                                  disabled: f,
                                  fullWidth: !0,
                              }),
                              N(l, r, m.main)
                                  ? (0, n.jsx)(d.d, {
                                        label: b.intl.string(v.default.SYLSgx),
                                        description: b.intl.string(v.default.HITWAI),
                                        checked: !0 === l.fast,
                                        disabled: f,
                                        onChange: (e) => D({ ...l, fast: e }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, n.jsxs)("div", {
                    className: `${P.Nr} ${P.rF}`,
                    children: [
                        (0, n.jsxs)("div", {
                            className: P.wx,
                            children: [
                                (0, n.jsxs)("button", {
                                    type: "button",
                                    className: P.y6,
                                    "aria-expanded": E,
                                    "aria-label": b.intl.string(v.default.IaLFoX),
                                    onClick: () => S((e) => !e),
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: b.intl.string(v.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(M, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: P.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(P.Z, { [P.xQ]: "exit" === U, [P.lm]: "enter" === U }),
                                    children: z,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: P.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: P.Nb,
                                    children: [
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(v.default["5DOL2g"]),
                                        }),
                                        (0, n.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(v.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(T, {
                                    activeIndex: I,
                                    stops: O,
                                    ariaLabel: b.intl.string(v.default.GDs9Vq),
                                    disabled: f,
                                    onSelect: function (e) {
                                        let t = g.ks[e];
                                        null != t &&
                                            t !== l.tier &&
                                            D(
                                                (function (e, t) {
                                                    if (t === e.tier) return e;
                                                    let { thinking: l, ...n } = e;
                                                    return { ...n, tier: t };
                                                })(l, t),
                                            );
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
function F(e) {
    let { settings: t, tiers: l, choices: r, disabled: i, onChange: s, className: u, icon: o } = e,
        d = a.useRef(null),
        [c, g] = a.useState(null),
        [p, j] = a.useState(t);
    t !== p && (j(t), g(null));
    let y = c ?? t,
        k = a.useCallback(
            (e) => {
                (g(e), s(e));
            },
            [s],
        ),
        [N, w] = a.useState(!1),
        { mounted: A, entered: E } = _(N);
    return (0, n.jsx)(m.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: A,
        onRequestClose: () => w(!1),
        animation: m.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(L, {
                settings: y,
                tiers: l ?? null,
                choices: r,
                disabled: i,
                onChange: k,
                placement: t,
                open: N,
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(f.m, {
                text: b.intl.string(v.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(h.D, {
                    innerRef: d,
                    className: u ?? P.hZ,
                    "aria-label": b.intl.string(v.default.GoSNDN),
                    ...e,
                    onClick: () => w((e) => !e),
                    "aria-expanded": N,
                    children: o ?? (0, n.jsx)(x.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
