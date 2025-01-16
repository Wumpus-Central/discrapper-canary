n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(489948),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    m = n(981631),
    g = n(197831);
t.Z = (e) => {
    let { userId: t, children: n, isLast: s, className: h } = e,
        [p, x] = r.useState(!1),
        { analyticsLocations: f } = (0, d.ZP)(),
        _ = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: f,
                analyticsLocation: { section: m.jXE.FAMILY_CENTER }
            });
        }, [t, f]),
        E = () => {
            x(!0);
        },
        C = () => {
            x(!1);
        };
    return (0, i.jsx)(c.mh, {
        id: t,
        children: (e) =>
            (0, i.jsx)(l.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(o.Z.div, {
                    style: { opacity: 1 },
                    className: a()(g.rowItem, h, {
                        [g.last]: s,
                        [g.active]: p
                    }),
                    onMouseEnter: E,
                    onMouseLeave: C,
                    onClick: _,
                    ...e,
                    children: n(p)
                })
            })
    });
};
