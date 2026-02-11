i.d(t, { Z: () => d });
var n = i(311907),
    l = i(684013),
    s = i(419954),
    r = i(256415),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.Hn)(a.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
    useTitle: () => o.intl.string(o.t.dnvZSg),
    useValue: () => (0, n.bG)([r.default], () => r.default.getAvatarSizeMode()),
    setValue: (e) => {
        l.A.setAvatarSizeMode(e);
    },
    useOptions: () => [
        { id: "large", label: o.intl.string(o.t.YcOxtr), value: u.OSZ.LARGE },
        { id: "small", label: o.intl.string(o.t.BKIKqx), value: u.OSZ.SMALL },
    ],
});
