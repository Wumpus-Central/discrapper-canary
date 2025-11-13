n.d(e, { Z: () => o });
var i = n(100527),
    l = n(509613),
    u = n(695346),
    r = n(313789),
    s = n(569550),
    a = n(388032);
let o = (0, l.qs)(r.n.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.e3Zz3F),
    useSubtitle: () => a.intl.string(a.t.RztTjP),
    useValue: function () {
        var t;
        return null != (t = u.I0.useSetting()) && t;
    },
    setValue: function (t) {
        (0, s.Z)("stream_previews_disabled", t, u.I0.getSetting(), [i.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
            u.I0.updateSetting(t);
    },
});
