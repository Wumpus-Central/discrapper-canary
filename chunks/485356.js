n.d(e, { r: () => S });
var i = n(846027),
    l = n(100527),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(65154),
    o = n(388032);
let S = (0, s.UO)(r.n.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    setValue: function (t) {
        let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        i.Z.setSidechainCompressionStrength(t, { analyticsLocations: e });
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: u.Z.getSidechainCompressionStrength,
    usePredicate: function () {
        return u.Z.supports(a.AN.SIDECHAIN_COMPRESSION);
    },
});
