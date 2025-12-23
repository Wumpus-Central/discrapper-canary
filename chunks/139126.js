n.d(e, { B: () => T });
var i = n(442837),
    l = n(13245),
    s = n(509613),
    u = n(237997),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, s.Em)(r.n.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
    fieldLayout: "horizontal",
    useTitle: () => o.intl.string(o.t.dnvZSg),
    useValue: () => (0, i.e7)([u.default], () => u.default.getAvatarSizeMode()),
    setValue: (t) => {
        l.Z.setAvatarSizeMode(t);
    },
    useOptions: () => [
        {
            id: "large",
            label: o.intl.string(o.t.YcOxtr),
            value: a.ipw.LARGE,
        },
        {
            id: "small",
            label: o.intl.string(o.t.BKIKqx),
            value: a.ipw.SMALL,
        },
    ],
});
