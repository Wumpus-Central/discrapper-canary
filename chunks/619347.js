n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    r = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, r.qs)(s.n.STREAMING_OPENH264_CODEC, {
    useTitle: () => o.intl.string(o.t["71Ve1y"]),
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.supports(a.AN.OPEN_H264));
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getOpenH264());
    },
    setValue: l.Z.setOpenH264,
});
