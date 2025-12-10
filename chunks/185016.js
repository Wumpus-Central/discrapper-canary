n.d(e, { n: () => o });
var i = n(100527),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(569550),
    a = n(388032);
let o = (0, l.qs)(u.n.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.e3Zz3F),
    useSubtitle: () => a.intl.string(a.t.RztTjP),
    useValue: function () {
        var t;
        return !(null != (t = s.I0.useSetting()) && t);
    },
    setValue: function (t) {
        (0, r.Z)("stream_previews_disabled", !t, s.I0.getSetting(), [i.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
            s.I0.updateSetting(!t);
    },
});
