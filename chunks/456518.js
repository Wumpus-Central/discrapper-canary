i.d(e, {
    T: () => T,
});
var n = i(704591),
    l = i(419954),
    s = i(954571),
    r = i(253932),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, l.zD)(u.X.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["CtYr+U"]),
    useSubtitle: () => o.intl.string(o.t.hrSIhN),
    useValue: r.eK.useSetting,
    setValue: (t) => {
        s.default.track(a.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
            checked: t,
            location: {
                section: a.JJy.SETTINGS_TEXT_AND_IMAGES,
            },
        }),
            r.eK.updateSetting(t);
    },
    usePredicate: () =>
        (0, n.AA)({
            location: "SoundmojiAutocomplete",
        }),
});
