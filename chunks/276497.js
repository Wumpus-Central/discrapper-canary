n.d(t, { k: () => u });
var i = n(793574),
    s = n(419954),
    l = n(954571),
    a = n(253932),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, s.zD)(r.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => d.intl.string(d.t["d+It2U"]),
    useValue: a.ML.useSetting,
    setValue: (e) => {
        l.default.track(o.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: e,
            location: { section: o.JJy.SETTINGS_TEXT_AND_IMAGES },
            location_stack: [i.A.TEXT_AND_IMAGES],
        }),
            a.ML.updateSetting(e);
    },
});
