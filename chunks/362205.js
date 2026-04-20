"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    u = n(825638),
    c = n(837381),
    d = n(935399),
    h = n(319354),
    p = n(397927),
    _ = n(775602),
    m = n(253932),
    f = n(894858),
    g = n(272053),
    y = n(397274),
    v = n(189857),
    S = n(674085),
    E = n(188180),
    x = n(890690),
    A = n(429566);
function N(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: l, useSubnavLabel: u, key: d } = t,
        h = l?.(),
        _ = u?.() ?? h;
    return (
        o()(null != _, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(c.tG, {
            id: d,
            children: (e) =>
                (0, r.jsxs)(
                    p.DUT,
                    {
                        onClick: n,
                        className: s()(A.AS, { [A.vu]: i }),
                        ...e,
                        children: [_, null != a && !i && (0, r.jsx)(S.A, { badge: a })],
                    },
                    d,
                ),
        })
    );
}
function b(e) {
    let { active: t, isTopLevelPanelVisible: n, visibleCategories: a, visibleContent: s, dismissibleBadges: l } = e,
        o = f.A.useField("currentCategoryKey"),
        [u, c] = i.useState(t);
    i.useLayoutEffect(() => {
        t && c(!0);
    }, [t]);
    let d = i.useMemo(() => a.findIndex((e) => e.key === o), [a, o]);
    i.useEffect(() => {
        if (!t) {
            let e = h.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    c(!1);
                }));
        }
    }, [t]);
    let h = i.useRef(null),
        [p, _] = i.useState(t ? "auto" : "0");
    return (
        (0, x.u)(a, n),
        (0, r.jsx)("div", {
            className: A.lK,
            style: { height: p, opacity: +!!t },
            ref: h,
            children:
                u &&
                (0, r.jsx)(C, {
                    index: d,
                    activeKey: o,
                    categories: a,
                    visibleContent: s,
                    dismissibleBadges: l,
                    onMount: function () {
                        let e = h.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    (e.style.height = "auto"),
                                        y.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function C(e) {
    let { index: t, activeKey: n, categories: a, visibleContent: l, dismissibleBadges: o, onMount: c } = e,
        {
            thumbRef: f,
            trackRef: y,
            thumbAnchorRef: S,
            springs: x,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                o = i.useRef(e),
                [u, c] = (0, p.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let i = l.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [d, h] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                p = d.width / 2,
                                m = (h.y - d.y) / p,
                                f = h.height / p;
                            s.current || i || _.A.useReducedMotion || -1 === o.current
                                ? (u.y.set(m), u.height.set(f))
                                : c({ y: m, height: f }),
                                (s.current = !1),
                                (l.current = t),
                                (o.current = e);
                        },
                        h = null;
                    return (
                        i
                            ? (h = requestAnimationFrame(() => {
                                  (h = null), d();
                              }))
                            : d(),
                        () => {
                            null != h && cancelAnimationFrame(h);
                        }
                    );
                }, [e, c, u.y, u.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: u }
            );
        })(t);
    return (
        (0, d.Ay)(c),
        (0, r.jsxs)("div", {
            className: A.o8,
            role: "list",
            style: {
                "--custom-nav-count": a.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${h.E[E.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: A.u4,
                    "aria-hidden": "true",
                    ref: y,
                    children: (0, r.jsx)(u.animated.div, {
                        className: s()(A.FF, { [A.R]: null == n }),
                        style: x,
                        ref: f,
                    }),
                }),
                (0, r.jsx)("div", { className: A.gu, "aria-hidden": "true", ref: S }),
                a.map((e) => {
                    let t = (0, v.H)(e.key, l, o);
                    return (0, r.jsx)(
                        N,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void g.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === n,
                            category: e,
                            dismissibleBadge: t,
                        },
                        e.key,
                    );
                }),
            ],
        })
    );
}
