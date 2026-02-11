n.d(t, { A: () => h });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(284009),
    s = n.n(l),
    c = n(563495),
    d = n(837381),
    u = n(397927),
    _ = n(964486),
    g = n(775602),
    m = n(253932),
    b = n(894858),
    f = n(890690),
    p = n(652099);
function x(e) {
    let { category: t, onClick: n, active: r } = e,
        { useTitle: i, useSubnavLabel: l, key: c } = t,
        _ = i?.(),
        g = l?.() ?? _;
    return (
        s()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, a.jsx)(d.tG, {
            id: c,
            children: (e) =>
                (0, a.jsx)(u.DUT, { onClick: n, className: o()(p.AS, { [p.vu]: r }), ...e, children: g }, c),
        })
    );
}
function h(e) {
    let { categories: t } = e,
        n = b.A.useField("currentCategoryKey");
    (0, _.Ay)(() => {
        t.some((e) => e.key === n) || b.A.setState({ currentCategoryKey: t[0].key });
    });
    let i = r.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: o,
            trackRef: l,
            thumbAnchorRef: s,
            springs: d,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = r.useRef(null),
                a = r.useRef(null),
                i = r.useRef(null),
                o = r.useRef(!0),
                l = r.useRef(t),
                [s, c] = (0, u.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                r.useLayoutEffect(() => {
                    let e = l.current !== t,
                        r = () => {
                            if (null == n.current || null == a.current || null == i.current) return;
                            let [r, d] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()],
                                u = r.width / 2,
                                _ = (d.y - r.y) / u,
                                m = d.height / u;
                            o.current || e || g.A.useReducedMotion
                                ? (s.y.set(_), s.height.set(m))
                                : c({ y: _, height: m }),
                                (o.current = !1),
                                (l.current = t);
                        },
                        d = null;
                    return (
                        e
                            ? (d = requestAnimationFrame(() => {
                                  (d = null), r();
                              }))
                            : r(),
                        () => {
                            null != d && cancelAnimationFrame(d);
                        }
                    );
                }, [e, c, s.y, s.height, t]),
                { thumbRef: a, trackRef: n, thumbAnchorRef: i, springs: s }
            );
        })(i);
    return (
        (0, f.u)(t),
        (0, a.jsxs)("div", {
            className: p.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": i, "--custom-nav-width": "2px" },
            children: [
                (0, a.jsx)("div", {
                    className: p.u4,
                    "aria-hidden": "true",
                    ref: l,
                    children: (0, a.jsx)(c.animated.div, { className: p.FF, style: d, ref: o }),
                }),
                (0, a.jsx)("div", { className: p.gu, "aria-hidden": "true", ref: s }),
                t.map((e) =>
                    (0, a.jsx)(
                        x,
                        {
                            onClick: () => {
                                var t;
                                return (
                                    (t = e.key), void b.A.setState({ requestedTargetKey: t, showNavigationMobile: !1 })
                                );
                            },
                            active: e.key === n,
                            category: e,
                        },
                        e.key,
                    ),
                ),
            ],
        })
    );
}
