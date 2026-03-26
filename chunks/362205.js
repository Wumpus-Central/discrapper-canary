"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(4208),
    u = n(942381),
    d = n(837381),
    _ = n(319354),
    h = n(397927),
    f = n(775602),
    p = n(253932),
    m = n(894858),
    b = n(272053),
    g = n(189857),
    y = n(674085),
    v = n(188180),
    x = n(890690),
    E = n(480270);
function S(e) {
    let { category: t, onClick: n, active: a, dismissibleBadge: i } = e,
        { useTitle: s, useSubnavLabel: c, key: u } = t,
        _ = s?.(),
        f = c?.() ?? _;
    return (
        o()(null != f, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(d.tG, {
            id: u,
            children: (e) =>
                (0, r.jsxs)(
                    h.DUT,
                    {
                        onClick: n,
                        className: l()(E.AS, { [E.vu]: a }),
                        ...e,
                        children: [f, null != i && !a && (0, r.jsx)(y.A, { badge: i })],
                    },
                    u,
                ),
        })
    );
}
function A(e) {
    let { categories: t, visibleContent: n, dismissibleBadges: i } = e,
        [l, s] = a.useState(() => {
            let e = m.A.getField("currentCategoryKey"),
                n = t.find((t) => t.key === e);
            return n?.key ?? t[0].key;
        });
    a.useEffect(
        () =>
            m.A.subscribe(
                (e) => {
                    let { currentCategoryKey: t } = e;
                    return t;
                },
                (e) => {
                    let n = t.find((t) => t.key === e);
                    null != n && s(n.key);
                },
                { equalityFn: u.x },
            ),
        [t],
    );
    let o = a.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === l),
                    0,
                ),
            [t, l],
        ),
        {
            thumbRef: d,
            trackRef: y,
            thumbAnchorRef: A,
            springs: N,
        } = (function (e) {
            let t = p.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                i = a.useRef(null),
                l = a.useRef(!0),
                s = a.useRef(t),
                [o, c] = (0, h.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                a.useLayoutEffect(() => {
                    let e = s.current !== t,
                        a = () => {
                            if (null == n.current || null == r.current || null == i.current) return;
                            let [a, u] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()],
                                d = a.width / 2,
                                _ = (u.y - a.y) / d,
                                h = u.height / d;
                            l.current || e || f.A.useReducedMotion
                                ? (o.y.set(_), o.height.set(h))
                                : c({ y: _, height: h }),
                                (l.current = !1),
                                (s.current = t);
                        },
                        u = null;
                    return (
                        e
                            ? (u = requestAnimationFrame(() => {
                                  (u = null), a();
                              }))
                            : a(),
                        () => {
                            null != u && cancelAnimationFrame(u);
                        }
                    );
                }, [e, c, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: i, springs: o }
            );
        })(o);
    return (
        (0, x.u)(t),
        (0, r.jsxs)("div", {
            className: E.o8,
            role: "list",
            style: {
                "--custom-nav-count": t.length,
                "--custom-nav-index": o,
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${_.E[v.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: E.u4,
                    "aria-hidden": "true",
                    ref: y,
                    children: (0, r.jsx)(c.animated.div, { className: E.FF, style: N, ref: d }),
                }),
                (0, r.jsx)("div", { className: E.gu, "aria-hidden": "true", ref: A }),
                t.map((e) => {
                    let t = (0, g.H)(e.key, n, i);
                    return (0, r.jsx)(
                        S,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void b.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === l,
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
