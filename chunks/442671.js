n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(615300),
    o = n(837381),
    c = n(158954),
    d = n(688810),
    u = n(657331),
    _ = n(331011);
let m = (e) => {
    let { userId: t, children: n, isLast: r, className: m } = e,
        [A, g] = s.useState(!1),
        { analyticsLocations: E } = (0, d.Ay)(),
        h = s.useCallback(() => {
            (0, u.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: E });
        }, [t, E]),
        p = () => {
            g(!0);
        },
        C = () => {
            g(!1);
        };
    return (0, i.jsx)(o.tG, {
        id: t,
        children: (e) =>
            (0, i.jsx)(c.vN3, {
                offset: { left: -8, right: -8 },
                children: (0, i.jsx)(l.A.div, {
                    style: { opacity: 1 },
                    className: a()(_.KG, m, { [_.HV]: r, [_.vu]: A }),
                    onMouseEnter: p,
                    onMouseLeave: C,
                    onClick: h,
                    ...e,
                    children: n(A),
                }),
            }),
    });
};
