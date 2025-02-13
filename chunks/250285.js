n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(489948),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    m = n(981631),
    g = n(129932);
let _ = (e) => {
    let { userId: t, children: n, isLast: a, className: _ } = e,
        [p, f] = r.useState(!1),
        { analyticsLocations: h } = (0, d.ZP)(),
        x = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: h,
                analyticsLocation: { section: m.jXE.FAMILY_CENTER }
            });
        }, [t, h]),
        E = () => {
            f(!0);
        },
        C = () => {
            f(!1);
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
                    className: s()(g.rowItem, _, {
                        [g.last]: a,
                        [g.active]: p
                    }),
                    onMouseEnter: E,
                    onMouseLeave: C,
                    onClick: x,
                    ...e,
                    children: n(p)
                })
            })
    });
};
