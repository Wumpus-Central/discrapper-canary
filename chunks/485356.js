n.d(e, { Z: () => c });
var i = n(846027),
    l = n(100527),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, s.UO)(u.n.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    usePredicate: function () {
        return r.Z.supports(a.AN.SIDECHAIN_COMPRESSION);
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: r.Z.getSidechainCompressionStrength,
    setValue: function (t) {
        let e = [l.Z.USER_SETTINGS_VOICE_AND_VIDEO];
        i.Z.setSidechainCompressionStrength(t, { analyticsLocations: e });
    },
});
