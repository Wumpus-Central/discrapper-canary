var l = n(855986),
    i = n(945810),
    r = n(340344),
    u = n(46653);
let a = (0, i.mj)({
    name: "2026-11-wishlist-countdown",
    kind: "user",
    defaultConfig: { labelsEnabled: !1, reorderEnabled: !1 },
    variations: { 1: { labelsEnabled: !0, reorderEnabled: !1 }, 2: { labelsEnabled: !0, reorderEnabled: !0 } },
});
n.d(
    t,
    {},
    {
        Zf: function (e) {
            return (0, l.bG)([u.default, r.A], () => a.getConfig({ location: e }, { autoTrackExposure: !1 }), [e]);
        },
        m4: function (e) {
            let { location: t } = e;
            return (a.useConfig({ location: t }), null);
        },
    },
);
