"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(880013),
    u = n(942381),
    d = n(837381),
    h = n(319354),
    _ = n(397927),
    f = n(775602),
    m = n(253932),
    p = n(894858),
    y = n(272053),
    v = n(189857),
    b = n(674085),
    g = n(188180),
    x = n(890690),
    E = n(422419);
function A(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: s, useSubnavLabel: c, key: u } = t,
        h = s?.(),
        f = c?.() ?? h;
    return (
        o()(null != f, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(d.tG, {
            id: u,
            children: (e) =>
                (0, r.jsxs)(
                    _.DUT,
                    {
                        onClick: n,
                        className: l()(E.AS, { [E.vu]: i }),
                        ...e,
                        children: [f, null != a && !i && (0, r.jsx)(b.A, { badge: a })],
                    },
                    u,
                ),
        })
    );
}
function S(e) {
    let { categories: t, visibleContent: n, dismissibleBadges: a } = e,
        [l, s] = i.useState(() => {
            let e = p.A.getField("currentCategoryKey"),
                n = t.find((t) => t.key === e);
            return n?.key ?? t[0].key;
        });
    i.useEffect(
        () =>
            p.A.subscribe(
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
    let o = i.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === l),
                    0,
                ),
            [t, l],
        ),
        {
            thumbRef: d,
            trackRef: b,
            thumbAnchorRef: S,
            springs: N,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
                [o, c] = (0, _.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let e = s.current !== t,
                        i = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [i, u] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                d = i.width / 2,
                                h = (u.y - i.y) / d,
                                _ = u.height / d;
                            l.current || e || f.A.useReducedMotion
                                ? (o.y.set(h), o.height.set(_))
                                : c({ y: h, height: _ }),
                                (l.current = !1),
                                (s.current = t);
                        },
                        u = null;
                    return (
                        e
                            ? (u = requestAnimationFrame(() => {
                                  (u = null), i();
                              }))
                            : i(),
                        () => {
                            null != u && cancelAnimationFrame(u);
                        }
                    );
                }, [e, c, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: o }
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
                "--custom-icon-size": `${h.E[g.V]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: E.u4,
                    "aria-hidden": "true",
                    ref: b,
                    children: (0, r.jsx)(c.animated.div, { className: E.FF, style: N, ref: d }),
                }),
                (0, r.jsx)("div", { className: E.gu, "aria-hidden": "true", ref: S }),
                t.map((e) => {
                    let t = (0, v.H)(e.key, n, a);
                    return (0, r.jsx)(
                        A,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void y.A.navigate(t, { showNavigationMobile: !1 });
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
