n.d(e, { b: () => S });
var i = n(442837),
    l = n(846027),
    s = n(100527),
    u = n(509613),
    r = n(131951),
    a = n(313789),
    o = n(65154),
    T = n(388032);
let S = (0, u.qs)(a.n.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => T.intl.string(T.t["/jwMtn"]),
    useSubtitle: () => T.intl.string(T.t.zlA23F),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getSidechainCompression());
    },
    setValue: function (t) {
        let e = [s.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        l.Z.setSidechainCompression(t, { analyticsLocations: e });
    },
    usePredicate: function () {
        return r.Z.supports(o.AN.SIDECHAIN_COMPRESSION);
    },
});
