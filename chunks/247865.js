i.d(e, { k: () => T });
var n = i(793574),
    l = i(419954),
    s = i(954571),
    r = i(253932),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, l.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["29xPVZ"]),
    useSubtitle: () => o.intl.string(o.t["/eVrj8"]),
    useValue: r.ML.useSetting,
    setValue: (t) => {
        s.default.track(a.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: t,
            location: { section: a.JJy.SETTINGS_TEXT_AND_IMAGES },
            location_stack: [n.A.TEXT_AND_IMAGES],
        }),
            r.ML.updateSetting(t);
    },
});
