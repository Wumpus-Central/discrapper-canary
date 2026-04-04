n.d(t, { H: () => d });
var i = n(793574),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(698723),
    o = n(985018);
let d = (0, s.zD)(a.X.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => o.intl.string(o.t.e3Zz3F),
    useSubtitle: () => o.intl.string(o.t.RztTjP),
    useValue: function () {
        return !l.uh.useSetting();
    },
    setValue: function (e) {
        (0, r.A)("stream_previews_disabled", !e, l.uh.getSetting(), [i.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            l.uh.updateSetting(!e);
    },
});
