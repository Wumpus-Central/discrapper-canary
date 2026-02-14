n.d(t, { A: () => h });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(284009),
    s = n.n(l),
    c = n(522160),
    _ = n(837381),
    u = n(397927),
    d = n(964486),
    g = n(775602),
    b = n(253932),
    m = n(894858),
    f = n(890690),
    p = n(637577);
function x(e) {
    let { category: t, onClick: n, active: a } = e,
        { useTitle: i, useSubnavLabel: l, key: c } = t,
        d = i?.(),
        g = l?.() ?? d;
    return (
        s()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(_.tG, {
            id: c,
            children: (e) =>
                (0, r.jsx)(u.DUT, { onClick: n, className: o()(p.AS, { [p.vu]: a }), ...e, children: g }, c),
        })
    );
}
function h(e) {
    let { categories: t } = e,
        n = m.A.useField("currentCategoryKey");
    (0, d.Ay)(() => {
        t.some((e) => e.key === n) || m.A.setState({ currentCategoryKey: t[0].key });
    });
    let i = a.useMemo(
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
            springs: _,
        } = (function (e) {
            let t = b.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                i = a.useRef(null),
                o = a.useRef(!0),
                l = a.useRef(t),
                [s, c] = (0, u.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                a.useLayoutEffect(() => {
                    let e = l.current !== t,
                        a = () => {
                            if (null == n.current || null == r.current || null == i.current) return;
                            let [a, _] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()],
                                u = a.width / 2,
                                d = (_.y - a.y) / u,
                                b = _.height / u;
                            o.current || e || g.A.useReducedMotion
                                ? (s.y.set(d), s.height.set(b))
                                : c({ y: d, height: b }),
                                (o.current = !1),
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
                { thumbRef: r, trackRef: n, thumbAnchorRef: i, springs: s }
            );
        })(i);
    return (
        (0, f.u)(t),
        (0, r.jsxs)("div", {
            className: p.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": i, "--custom-nav-width": "2px" },
            children: [
                (0, r.jsx)("div", {
                    className: p.u4,
                    "aria-hidden": "true",
                    ref: l,
                    children: (0, r.jsx)(c.animated.div, { className: p.FF, style: _, ref: o }),
                }),
                (0, r.jsx)("div", { className: p.gu, "aria-hidden": "true", ref: s }),
                t.map((e) =>
                    (0, r.jsx)(
                        x,
                        {
                            onClick: () => {
                                var t;
                                return (
                                    (t = e.key), void m.A.setState({ requestedTargetKey: t, showNavigationMobile: !1 })
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
