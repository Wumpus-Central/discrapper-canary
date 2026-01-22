i.d(e, { Z: () => T });
var n = i(311907),
    l = i(684013),
    s = i(419954),
    r = i(256415),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, s.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
    fieldLayout: "horizontal",
    useTitle: () => o.intl.string(o.t.dnvZSg),
    useValue: () => (0, n.bG)([r.default], () => r.default.getAvatarSizeMode()),
    setValue: (t) => {
        l.A.setAvatarSizeMode(t);
    },
    useOptions: () => [
        {
            id: "large",
            label: o.intl.string(o.t.YcOxtr),
            value: a.OSZ.LARGE,
        },
        {
            id: "small",
            label: o.intl.string(o.t.BKIKqx),
            value: a.OSZ.SMALL,
        },
    ],
});
