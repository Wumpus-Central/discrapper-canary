n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    r = n(509613),
    u = n(131951),
    s = n(998502),
    a = n(313789),
    o = n(388032);
let c = (0, r.qs)(a.n.STREAMING_OPENH264_CODEC, {
    useTitle: () => o.intl.string(o.t.AxnPm1),
    useSearchTerms: () => [o.intl.string(o.t.AxnPm1)],
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => "stable" !== s.ZP.releaseChannel && u.Z.isExperimentalEncodersSupported());
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    },
    setValue: l.Z.setExperimentalEncoders,
});
