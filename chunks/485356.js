n.d(e, { Z: () => E });
var i = n(442837),
    l = n(846027),
    r = n(100527),
    u = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(65154),
    c = n(388032);
let E = (0, u.UO)(a.n.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => c.intl.string(c.t.fhEzfj),
    usePredicate: function () {
        return s.Z.supports(o.AN.SIDECHAIN_COMPRESSION);
    },
    min: 1,
    max: 100,
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getSidechainCompressionStrength());
    },
    setValue: function (t) {
        let e = [r.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        l.Z.setSidechainCompressionStrength(t, { analyticsLocations: e });
    },
});
