var n = l(855986),
    i = l(945810),
    a = l(50258),
    r = l(46653);
let s = (0, i.mj)({
    name: "2026-11-wishlist-countdown",
    kind: "user",
    defaultConfig: { labelsEnabled: !1, reorderEnabled: !1 },
    variations: { 1: { labelsEnabled: !0, reorderEnabled: !1 }, 2: { labelsEnabled: !0, reorderEnabled: !0 } },
});
((0, i.mj)({
    name: "2026-11-wishlist-countdown-mobile",
    kind: "user",
    defaultConfig: { labelsEnabled: !1, reorderEnabled: !1 },
    variations: { 1: { labelsEnabled: !0, reorderEnabled: !1 }, 2: { labelsEnabled: !0, reorderEnabled: !0 } },
}),
    l.d(
        t,
        {},
        {
            Zf: function (e) {
                return (0, n.bG)([r.default, a.A], () => s.getConfig({ location: e }, { autoTrackExposure: !1 }), [e]);
            },
            m4: function (e) {
                let { location: t } = e;
                return (s.useConfig({ location: t }), null);
            },
        },
    ));
