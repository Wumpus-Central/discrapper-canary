"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    u = n(294426),
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
    A = n(480270);
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
    let { active: t, visibleCategories: n, visibleContent: a, dismissibleBadges: s } = e,
        l = f.A.useField("currentCategoryKey") ?? n[0]?.key,
        [o, u] = i.useState(t);
    i.useLayoutEffect(() => {
        t && u(!0);
    }, [t]);
    let c = i.useMemo(
        () =>
            Math.max(
                n.findIndex((e) => e.key === l),
                0,
            ),
        [n, l],
    );
    i.useEffect(() => {
        if (!t) {
            let e = d.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    u(!1);
                }));
        }
    }, [t]);
    let d = i.useRef(null),
        [h, p] = i.useState(t ? "auto" : "0");
    return (
        (0, x.u)(n, t),
        (0, r.jsx)("div", {
            className: A.lK,
            style: { height: h, opacity: +!!t },
            ref: d,
            children:
                o &&
                (0, r.jsx)(C, {
                    index: c,
                    activeKey: l,
                    categories: n,
                    visibleContent: a,
                    dismissibleBadges: s,
                    onMount: function () {
                        let e = d.current;
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
    let { index: t, activeKey: n, categories: a, visibleContent: s, dismissibleBadges: l, onMount: o } = e,
        {
            thumbRef: c,
            trackRef: f,
            thumbAnchorRef: y,
            springs: S,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                [o, u] = (0, p.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let e = l.current !== t,
                        i = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [i, c] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                d = i.width / 2,
                                h = (c.y - i.y) / d,
                                p = c.height / d;
                            s.current || e || _.A.useReducedMotion
                                ? (o.y.set(h), o.height.set(p))
                                : u({ y: h, height: p }),
                                (s.current = !1),
                                (l.current = t);
                        },
                        c = null;
                    return (
                        e
                            ? (c = requestAnimationFrame(() => {
                                  (c = null), i();
                              }))
                            : i(),
                        () => {
                            null != c && cancelAnimationFrame(c);
                        }
                    );
                }, [e, u, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: o }
            );
        })(t);
    return (
        (0, d.Ay)(o),
        (0, r.jsxs)("div", {
            className: A.o8,
            role: "list",
            style: {
                "--custom-nav-count": a.length,
                "--custom-nav-index": t,
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${h.E[E.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: A.u4,
                    "aria-hidden": "true",
                    ref: f,
                    children: (0, r.jsx)(u.animated.div, { className: A.FF, style: S, ref: c }),
                }),
                (0, r.jsx)("div", { className: A.gu, "aria-hidden": "true", ref: y }),
                a.map((e) => {
                    let t = (0, v.H)(e.key, s, l);
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
