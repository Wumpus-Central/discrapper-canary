n.d(e, { V: () => o });
var i = n(509613),
    l = n(626135),
    s = n(695346),
    u = n(313789),
    r = n(981631),
    a = n(388032);
let o = (0, i.qs)(u.n.CHAT_TEXT_BOX_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.AqGrEI),
    useValue: s.R$.useSetting,
    setValue: (t) => {
        l.default.track(r.rMx.PREVIEW_MARKDOWN_TOGGLED, {
            enabled: t,
            location: { section: r.jXE.SETTINGS_TEXT_AND_IMAGES },
        }),
            s.R$.updateSetting(t);
    },
});
