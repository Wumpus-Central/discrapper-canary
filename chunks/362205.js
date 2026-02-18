"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    c = n(522160),
    u = n(837381),
    d = n(397927),
    _ = n(964486),
    g = n(775602),
    m = n(253932),
    b = n(894858),
    f = n(890690),
    p = n(637577);
function h(e) {
    let { category: t, onClick: n, active: i } = e,
        { useTitle: a, useSubnavLabel: l, key: c } = t,
        _ = a?.(),
        g = l?.() ?? _;
    return (
        o()(null != g, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(u.tG, {
            id: c,
            children: (e) =>
                (0, r.jsx)(d.DUT, { onClick: n, className: s()(p.AS, { [p.vu]: i }), ...e, children: g }, c),
        })
    );
}
function y(e) {
    let { categories: t } = e,
        n = b.A.useField("currentCategoryKey");
    (0, _.Ay)(() => {
        t.some((e) => e.key === n) || b.A.setState({ currentCategoryKey: t[0].key });
    });
    let a = i.useMemo(
            () =>
                Math.max(
                    t.findIndex((e) => e.key === n),
                    0,
                ),
            [t, n],
        ),
        {
            thumbRef: s,
            trackRef: l,
            thumbAnchorRef: o,
            springs: u,
        } = (function (e) {
            let t = m.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                [o, c] = (0, d.zhh)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let e = l.current !== t,
                        i = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [i, u] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                d = i.width / 2,
                                _ = (u.y - i.y) / d,
                                m = u.height / d;
                            s.current || e || g.A.useReducedMotion
                                ? (o.y.set(_), o.height.set(m))
                                : c({ y: _, height: m }),
                                (s.current = !1),
                                (l.current = t);
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
        })(a);
    return (
        (0, f.u)(t),
        (0, r.jsxs)("div", {
            className: p.o8,
            role: "list",
            style: { "--custom-nav-count": t.length, "--custom-nav-index": a, "--custom-nav-width": "2px" },
            children: [
                (0, r.jsx)("div", {
                    className: p.u4,
                    "aria-hidden": "true",
                    ref: l,
                    children: (0, r.jsx)(c.animated.div, { className: p.FF, style: u, ref: s }),
                }),
                (0, r.jsx)("div", { className: p.gu, "aria-hidden": "true", ref: o }),
                t.map((e) =>
                    (0, r.jsx)(
                        h,
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
