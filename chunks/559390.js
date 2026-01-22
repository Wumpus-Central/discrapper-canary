i.d(e, {
    H: () => o,
});
var n = i(793574),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(698723),
    a = i(985018);
let o = (0, l.zD)(r.X.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.e3Zz3F),
    useSubtitle: () => a.intl.string(a.t.RztTjP),
    useValue: function () {
        var t;
        return !(null != (t = s.uh.useSetting()) && t);
    },
    setValue: function (t) {
        (0, u.A)("stream_previews_disabled", !t, s.uh.getSetting(), [n.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            s.uh.updateSetting(!t);
    },
});
