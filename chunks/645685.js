n.d(t, { k: () => u });
var i = n(793574),
    s = n(419954),
    l = n(954571),
    a = n(253932),
    r = n(780964),
    o = n(358776),
    d = n(652215),
    c = n(985018);
let u = (0, s.zD)(r.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => ((0, o.bp)("StickersInAutocomplete") ? c.intl.string(c.t["d+It2U"]) : c.intl.string(c.t["29xPVZ"])),
    useSubtitle: () => ((0, o.bp)("StickersInAutocomplete") ? void 0 : c.intl.string(c.t["/eVrj8"])),
    useValue: a.ML.useSetting,
    setValue: (e) => {
        l.default.track(d.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: e,
            location: { section: d.JJy.SETTINGS_TEXT_AND_IMAGES },
            location_stack: [i.A.TEXT_AND_IMAGES],
        }),
            a.ML.updateSetting(e);
    },
});
