n.d(e, { U: () => T });
var i = n(125900),
    l = n(509613),
    s = n(626135),
    u = n(695346),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, l.qs)(r.n.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["CtYr+U"]),
    useSubtitle: () => o.intl.string(o.t.hrSIhN),
    useValue: u.eR.useSetting,
    setValue: (t) => {
        s.default.track(a.rMx.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
            checked: t,
            location: { section: a.jXE.SETTINGS_TEXT_AND_IMAGES },
        }),
            u.eR.updateSetting(t);
    },
    usePredicate: () => (0, i.dX)({ location: "SoundmojiAutocomplete" }),
});
