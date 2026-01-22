i.d(e, {
    m: () => o,
});
var n = i(419954),
    l = i(954571),
    s = i(253932),
    r = i(780964),
    u = i(652215),
    a = i(985018);
let o = (0, n.zD)(r.X.CHAT_TEXT_BOX_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.AqGrEI),
    useValue: s.SI.useSetting,
    setValue: (t) => {
        l.default.track(u.HAw.PREVIEW_MARKDOWN_TOGGLED, {
            enabled: t,
            location: {
                section: u.JJy.SETTINGS_TEXT_AND_IMAGES,
            },
        }),
            s.SI.updateSetting(t);
    },
});
