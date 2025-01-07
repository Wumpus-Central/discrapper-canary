n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(489948),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    g = n(981631),
    m = n(197831);
t.Z = (e) => {
    let { userId: t, children: n, isLast: a, className: f } = e,
        [p, _] = r.useState(!1),
        { analyticsLocations: h } = (0, d.ZP)(),
        x = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: h,
                analyticsLocation: { section: g.jXE.FAMILY_CENTER }
            });
        }, [t, h]),
        E = () => {
            _(!0);
        },
        b = () => {
            _(!1);
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
                    className: s()(m.rowItem, f, {
                        [m.last]: a,
                        [m.active]: p
                    }),
                    onMouseEnter: E,
                    onMouseLeave: b,
                    onClick: x,
                    ...e,
                    children: n(p)
                })
            })
    });
};
