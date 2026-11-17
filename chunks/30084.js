var a = n(477900),
    r = n(192308),
    l = n(129230),
    s = n(652215);
n.d(
    t,
    {},
    {
        D: function (e) {
            let { analyticsLocations: t, displayProfile: i, location: o } = e;
            (null == o && (o = t[t.length - 1]),
                l.default.track(s.HAw.OPEN_MODAL, {
                    type: "Tiered Tenure Badge Details",
                    location_stack: t,
                    location: o,
                    source: o,
                }),
                (0, r.mM)(async () => {
                    let { default: e } = await Promise.all([
                        n.e(463143),
                        n.e(101801),
                        n.e(77333),
                        n.e(545587),
                        n.e(662355),
                        n.e(814742),
                        n.e(313052),
                        n.e(165836),
                        n.e(769501),
                        n.e(277641),
                    ]).then(n.bind(n, 384048));
                    return (t) => (0, a.jsx)(e, { ...t, displayProfile: i });
                }));
        },
    },
);
