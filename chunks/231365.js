n.d(e, { b: () => d });
var i = n(442837),
    l = n(846027),
    s = n(100527),
    r = n(509613),
    u = n(131951),
    a = n(313789),
    o = n(65154),
    c = n(388032);
let d = (0, r.qs)(a.n.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => c.intl.string(c.t["/jwMtn"]),
    useSubtitle: () => c.intl.string(c.t.zlA23F),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getSidechainCompression());
    },
    setValue: function (t) {
        let e = [s.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        l.Z.setSidechainCompression(t, { analyticsLocations: e });
    },
    usePredicate: function () {
        return u.Z.supports(o.AN.SIDECHAIN_COMPRESSION);
    },
});
