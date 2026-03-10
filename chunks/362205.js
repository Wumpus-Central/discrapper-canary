"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    u = n(490249),
    c = n(942381),
    d = n(837381),
    f = n(397927),
    m = n(775602),
    g = n(253932),
    h = n(894858),
    y = n(272053),
    p = n(189857),
    v = n(674085),
    x = n(890690),
    b = n(637577);
function A(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: l, useSubnavLabel: u, key: c } = t,
        m = l?.(),
        g = u?.() ?? m;
    return (
        o()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(d.tG, {
            id: c,
            children: (e) =>
                (0, r.jsxs)(
                    f.DUT,
                    {
                        onClick: n,
                        className: s()(b.AS, { [b.vu]: i }),
                        ...e,
                        children: [g, null != a && !i && (0, r.jsx)(v.A, { badge: a })],
                    },
                    c,
                ),
        })
    );
}
function _(e) {
    let { categories: t, visibleContent: n, dismissibleBadges: a } = e,
        [s, l] = i.useState(() => {
            let e = h.A.getField("currentCategoryKey"),
                n = t.find((t) => t.key === e);
            return n?.key ?? t[0].key;
        });
    i.useEffect(
        () =>
            h.A.subscribe(
                (e) => {
                    let { currentCategoryKey: t } = e;
                    return t;
                },
                (e) => {
                    let n = t.find((t) => t.key === e);
                    null != n && l(n.key);
                },
                { equalityFn: c.x },
            ),
        [t],
    );
    let o = i.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === s),
                    0,
                ),
            [t, s],
        ),
        {
            thumbRef: d,
            trackRef: v,
            thumbAnchorRef: _,
            springs: j,
        } = (function (e) {
            let t = g.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                [o, u] = (0, f.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let e = l.current !== t,
                        i = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [i, c] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                d = i.width / 2,
                                f = (c.y - i.y) / d,
                                g = c.height / d;
                            s.current || e || m.A.useReducedMotion
                                ? (o.y.set(f), o.height.set(g))
                                : u({ y: f, height: g }),
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
        })(o);
    return (
        (0, x.u)(t),
        (0, r.jsxs)("div", {
            className: b.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": o, "--custom-nav-width": "2px" },
            children: [
                (0, r.jsx)("div", {
                    className: b.u4,
                    "aria-hidden": "true",
                    ref: v,
                    children: (0, r.jsx)(u.animated.div, { className: b.FF, style: j, ref: d }),
                }),
                (0, r.jsx)("div", { className: b.gu, "aria-hidden": "true", ref: _ }),
                t.map((e) => {
                    let t = (0, p.H)(e.key, n, a);
                    return (0, r.jsx)(
                        A,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void y.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === s,
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
