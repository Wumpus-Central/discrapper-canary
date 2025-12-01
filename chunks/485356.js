n.d(e, { Z: () => c });
var i = n(846027),
    r = n(100527),
    l = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, l.UO)(s.n.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    usePredicate: function () {
        return u.Z.supports(a.AN.SIDECHAIN_COMPRESSION);
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: u.Z.getSidechainCompressionStrength,
    setValue: function (t) {
        let e = [r.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        i.Z.setSidechainCompressionStrength(t, { analyticsLocations: e });
    },
});
