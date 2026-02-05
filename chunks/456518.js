i.d(e, { T: () => d });
var n = i(704591),
    l = i(419954),
    s = i(954571),
    r = i(253932),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, l.zD)(a.X.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["CtYr+U"]),
    useSubtitle: () => o.intl.string(o.t.hrSIhN),
    useValue: r.eK.useSetting,
    setValue: (t) => {
        s.default.track(u.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
            checked: t,
            location: { section: u.JJy.SETTINGS_TEXT_AND_IMAGES },
        }),
            r.eK.updateSetting(t);
    },
    usePredicate: () => (0, n.AA)({ location: "SoundmojiAutocomplete" }),
});
