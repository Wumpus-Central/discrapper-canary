n.d(t, { m: () => d });
var i = n(419954),
    s = n(954571),
    l = n(253932),
    r = n(780964),
    a = n(652215),
    o = n(985018);
let d = (0, i.zD)(r.X.CHAT_TEXT_BOX_PREVIEWS, {
    useTitle: () => o.intl.string(o.t.AqGrEI),
    useValue: l.SI.useSetting,
    setValue: (e) => {
        s.default.track(a.HAw.PREVIEW_MARKDOWN_TOGGLED, {
            enabled: e,
            location: { section: a.JJy.SETTINGS_TEXT_AND_IMAGES },
        }),
            l.SI.updateSetting(e);
    },
});
