l.d(t, { A: () => h });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(615300),
    d = l(837381),
    c = l(187322),
    u = l(688810),
    o = l(657331),
    x = l(789392);
let h = (e) => {
    let { userId: t, children: l, isLast: s, className: h } = e,
        [m, g] = i.useState(!1),
        { analyticsLocations: j } = (0, u.Ay)(),
        A = i.useCallback(() => {
            (0, o.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: j });
        }, [t, j]),
        v = () => {
            g(!0);
        },
        f = () => {
            g(!1);
        };
    return (0, n.jsx)(d.tG, {
        id: t,
        children: (e) =>
            (0, n.jsx)(c.vN, {
                offset: { left: -8, right: -8 },
                children: (0, n.jsx)(r.A.div, {
                    style: { opacity: 1 },
                    className: a()(x.KG, h, { [x.HV]: s, [x.vu]: m }),
                    onMouseEnter: v,
                    onMouseLeave: f,
                    onClick: A,
                    ...e,
                    children: l(m),
                }),
            }),
    });
};
