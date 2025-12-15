n.d(e, { n: () => c });
var i = n(100527),
    l = n(509613),
    s = n(626135),
    u = n(695346),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, l.qs)(r.n.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["29xPVZ"]),
    useSubtitle: () => o.intl.string(o.t["/eVrj8"]),
    useValue: u.fq.useSetting,
    setValue: (t) => {
        s.default.track(a.rMx.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: t,
            location: { section: a.jXE.SETTINGS_TEXT_AND_IMAGES },
            location_stack: [i.Z.TEXT_AND_IMAGES],
        }),
            u.fq.updateSetting(t);
    },
});
