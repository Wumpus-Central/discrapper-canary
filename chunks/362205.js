n.d(t, { A: () => h });
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(284009),
    s = n.n(l),
    c = n(92674),
    _ = n(837381),
    u = n(397927),
    d = n(964486),
    b = n(775602),
    m = n(253932),
    g = n(894858),
    p = n(890690),
    f = n(637577);
function x(e) {
    let { category: t, onClick: n, active: a } = e,
        { useTitle: o, useSubnavLabel: l, key: c } = t,
        d = o?.(),
        b = l?.() ?? d;
    return (
        s()(null != b, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(_.tG, {
            id: c,
            children: (e) =>
                (0, r.jsx)(u.DUT, { onClick: n, className: i()(f.AS, { [f.vu]: a }), ...e, children: b }, c),
        })
    );
}
function h(e) {
    let { categories: t } = e,
        n = g.A.useField("currentCategoryKey");
    (0, d.Ay)(() => {
        t.some((e) => e.key === n) || g.A.setState({ currentCategoryKey: t[0].key });
    });
    let o = a.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: i,
            trackRef: l,
            thumbAnchorRef: s,
            springs: _,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                o = a.useRef(null),
                i = a.useRef(!0),
                l = a.useRef(t),
                [s, c] = (0, u.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                a.useLayoutEffect(() => {
                    let e = l.current !== t,
                        a = () => {
                            if (null == n.current || null == r.current || null == o.current) return;
                            let [a, _] = [n.current.getBoundingClientRect(), o.current.getBoundingClientRect()],
                                u = a.width / 2,
                                d = (_.y - a.y) / u,
                                m = _.height / u;
                            i.current || e || b.A.useReducedMotion
                                ? (s.y.set(d), s.height.set(m))
                                : c({ y: d, height: m }),
                                (i.current = !1),
                                (l.current = t);
                        },
                        _ = null;
                    return (
                        e
                            ? (_ = requestAnimationFrame(() => {
                                  (_ = null), a();
                              }))
                            : a(),
                        () => {
                            null != _ && cancelAnimationFrame(_);
                        }
                    );
                }, [e, c, s.y, s.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: o, springs: s }
            );
        })(o);
    return (
        (0, p.u)(t),
        (0, r.jsxs)("div", {
            className: f.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": o, "--custom-nav-width": "2px" },
            children: [
                (0, r.jsx)("div", {
                    className: f.u4,
                    "aria-hidden": "true",
                    ref: l,
                    children: (0, r.jsx)(c.animated.div, { className: f.FF, style: _, ref: i }),
                }),
                (0, r.jsx)("div", { className: f.gu, "aria-hidden": "true", ref: s }),
                t.map((e) =>
                    (0, r.jsx)(
                        x,
                        {
                            onClick: () => {
                                var t;
                                return (
                                    (t = e.key), void g.A.setState({ requestedTargetKey: t, showNavigationMobile: !1 })
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
