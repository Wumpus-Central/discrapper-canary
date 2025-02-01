n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(489948),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    m = n(981631),
    h = n(197831);
let g = (e) => {
    let { userId: t, children: n, isLast: r, className: g } = e,
        [_, x] = s.useState(!1),
        { analyticsLocations: p } = (0, d.ZP)(),
        E = s.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: p,
                analyticsLocation: { section: m.jXE.FAMILY_CENTER }
            });
        }, [t, p]),
        C = () => {
            x(!0);
        },
        f = () => {
            x(!1);
        };
    return (0, i.jsx)(c.mh, {
        id: t,
        children: (e) =>
            (0, i.jsx)(a.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(o.Z.div, {
                    style: { opacity: 1 },
                    className: l()(h.rowItem, g, {
                        [h.last]: r,
                        [h.active]: _
                    }),
                    onMouseEnter: C,
                    onMouseLeave: f,
                    onClick: E,
                    ...e,
                    children: n(_)
                })
            })
    });
};
