"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(517738),
    u = n(837381),
    d = n(935399),
    _ = n(319354),
    h = n(939249),
    p = n(717421),
    f = n(775602),
    m = n(253932),
    g = n(894858),
    E = n(272053),
    v = n(397274),
    y = n(189857),
    A = n(674085),
    S = n(188180),
    b = n(890690),
    x = n(429566);
function N(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: s, useSubnavLabel: c, key: d } = t,
        _ = s?.(),
        p = c?.() ?? _;
    return (
        o()(null != p, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.tG, {
            id: d,
            children: (e) =>
                (0, r.jsxs)(
                    h.D,
                    {
                        onClick: n,
                        className: l()(x.AS, { [x.vu]: i }),
                        ...e,
                        children: [p, null != a && !i && (0, r.jsx)(A.A, { badge: a })],
                    },
                    d,
                ),
        })
    );
}
function C(e) {
    let { active: t, isTopLevelPanelVisible: n, visibleCategories: a, visibleContent: l, dismissibleBadges: s } = e,
        o = g.A.useField("currentCategoryKey"),
        [c, u] = i.useState(t);
    i.useLayoutEffect(() => {
        t && u(!0);
    }, [t]);
    let d = i.useMemo(() => a.findIndex((e) => e.key === o), [a, o]);
    i.useEffect(() => {
        if (!t) {
            let e = _.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    u(!1);
                }));
        }
    }, [t]);
    let _ = i.useRef(null),
        [h, p] = i.useState(t ? "auto" : "0");
    return (
        (0, b.u)(a, n),
        (0, r.jsx)("div", {
            className: x.lK,
            style: { height: h, opacity: +!!t },
            ref: _,
            children:
                c &&
                (0, r.jsx)(I, {
                    index: d,
                    activeKey: o,
                    categories: a,
                    visibleContent: l,
                    dismissibleBadges: s,
                    onMount: function () {
                        let e = _.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    (e.style.height = "auto"),
                                        v.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function I(e) {
    let { index: t, activeKey: n, categories: a, visibleContent: s, dismissibleBadges: o, onMount: u } = e,
        {
            thumbRef: h,
            trackRef: g,
            thumbAnchorRef: v,
            springs: A,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
                o = i.useRef(e),
                [c, u] = (0, p.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let i = s.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [d, _] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                h = d.width / 2,
                                p = (_.y - d.y) / h,
                                m = _.height / h;
                            l.current || i || f.A.useReducedMotion || -1 === o.current
                                ? (c.y.set(p), c.height.set(m))
                                : u({ y: p, height: m }),
                                (l.current = !1),
                                (s.current = t),
                                (o.current = e);
                        },
                        _ = null;
                    return (
                        i
                            ? (_ = requestAnimationFrame(() => {
                                  (_ = null), d();
                              }))
                            : d(),
                        () => {
                            null != _ && cancelAnimationFrame(_);
                        }
                    );
                }, [e, u, c.y, c.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: c }
            );
        })(t);
    return (
        (0, d.Ay)(u),
        (0, r.jsxs)("div", {
            className: x.o8,
            role: "list",
            style: {
                "--custom-nav-count": a.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${_.E[S.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: x.u4,
                    "aria-hidden": "true",
                    ref: g,
                    children: (0, r.jsx)(c.animated.div, {
                        className: l()(x.FF, { [x.R]: null == n }),
                        style: A,
                        ref: h,
                    }),
                }),
                (0, r.jsx)("div", { className: x.gu, "aria-hidden": "true", ref: v }),
                a.map((e) => {
                    let t = (0, y.H)(e.key, s, o);
                    return (0, r.jsx)(
                        N,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void E.A.navigate(t, { showNavigationMobile: !1 });
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
