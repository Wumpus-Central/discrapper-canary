"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    c = n(419354),
    u = n(837381),
    d = n(935399),
    _ = n(319354),
    f = n(939249),
    h = n(717421),
    p = n(775602),
    m = n(253932),
    g = n(894858),
    b = n(272053),
    v = n(397274),
    E = n(189857),
    y = n(674085),
    A = n(188180),
    x = n(890690),
    S = n(429566);
function C(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: l, useSubnavLabel: c, key: d } = t,
        _ = l?.(),
        h = c?.() ?? _;
    return (
        o()(null != h, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.tG, {
            id: d,
            children: (e) =>
                (0, r.jsxs)(
                    f.D,
                    {
                        onClick: n,
                        className: s()(S.AS, { [S.vu]: i }),
                        ...e,
                        children: [h, null != a && !i && (0, r.jsx)(y.A, { badge: a })],
                    },
                    d,
                ),
        })
    );
}
function N(e) {
    let { active: t, isTopLevelPanelVisible: n, visibleCategories: a, visibleContent: s, dismissibleBadges: l } = e,
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
        [f, h] = i.useState(t ? "auto" : "0");
    return (
        (0, x.u)(a, n),
        (0, r.jsx)("div", {
            className: S.lK,
            style: { height: f, opacity: +!!t },
            ref: _,
            children:
                c &&
                (0, r.jsx)(I, {
                    index: d,
                    activeKey: o,
                    categories: a,
                    visibleContent: s,
                    dismissibleBadges: l,
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
    let { index: t, activeKey: n, categories: a, visibleContent: l, dismissibleBadges: o, onMount: u } = e,
        {
            thumbRef: f,
            trackRef: g,
            thumbAnchorRef: v,
            springs: y,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                o = i.useRef(e),
                [c, u] = (0, h.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let i = l.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [d, _] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                f = d.width / 2,
                                h = (_.y - d.y) / f,
                                m = _.height / f;
                            s.current || i || p.A.useReducedMotion || -1 === o.current
                                ? (c.y.set(h), c.height.set(m))
                                : u({ y: h, height: m }),
                                (s.current = !1),
                                (l.current = t),
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
            className: S.o8,
            role: "list",
            style: {
                "--custom-nav-count": a.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${_.E[A.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: S.u4,
                    "aria-hidden": "true",
                    ref: g,
                    children: (0, r.jsx)(c.animated.div, {
                        className: s()(S.FF, { [S.R]: null == n }),
                        style: y,
                        ref: f,
                    }),
                }),
                (0, r.jsx)("div", { className: S.gu, "aria-hidden": "true", ref: v }),
                a.map((e) => {
                    let t = (0, E.H)(e.key, l, o);
                    return (0, r.jsx)(
                        C,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void b.A.navigate(t, { showNavigationMobile: !1 });
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
