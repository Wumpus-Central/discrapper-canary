n.d(e, { Z: () => E });
var i = n(442837),
    l = n(846027),
    u = n(100527),
    r = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(65154),
    c = n(388032);
let E = (0, r.qs)(a.n.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => c.intl.string(c.t["/jwMtn"]),
    useSubtitle: () => c.intl.string(c.t.zlA23F),
    usePredicate: function () {
        return s.Z.supports(o.AN.SIDECHAIN_COMPRESSION);
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getSidechainCompression());
    },
    setValue: function (t) {
        let e = [u.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        l.Z.setSidechainCompression(t, { analyticsLocations: e });
    },
});
