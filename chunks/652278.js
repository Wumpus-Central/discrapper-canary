n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(998502),
    a = n(313789),
    o = n(388032);
let c = (0, u.qs)(a.n.STREAMING_EXPERIMENTAL_ENCODERS, {
    useTitle: () => o.intl.string(o.t.AxnPm1),
    useSearchTerms: () => [o.intl.string(o.t.AxnPm1)],
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => "stable" !== s.ZP.releaseChannel && r.Z.isExperimentalEncodersSupported());
    },
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getExperimentalEncoders());
    },
    setValue: l.Z.setExperimentalEncoders,
});
