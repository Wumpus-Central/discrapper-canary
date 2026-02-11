i.d(t, { k: () => _ });
var n = i(793574),
    l = i(419954),
    s = i(954571),
    r = i(253932),
    a = i(780964),
    u = i(358776),
    o = i(652215),
    d = i(985018);
let _ = (0, l.zD)(a.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => ((0, u.bp)("StickersInAutocomplete") ? d.intl.string(d.t.NLGafo) : d.intl.string(d.t["29xPVZ"])),
    useSubtitle: () => ((0, u.bp)("StickersInAutocomplete") ? void 0 : d.intl.string(d.t["/eVrj8"])),
    useValue: r.ML.useSetting,
    setValue: (e) => {
        s.default.track(o.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: e,
            location: { section: o.JJy.SETTINGS_TEXT_AND_IMAGES },
            location_stack: [n.A.TEXT_AND_IMAGES],
        }),
            r.ML.updateSetting(e);
    },
});
