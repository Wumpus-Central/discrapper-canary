n.d(e, { Z: () => o });
var i = n(100527),
    r = n(509613),
    l = n(695346),
    u = n(313789),
    s = n(569550),
    a = n(388032);
let o = (0, r.qs)(u.n.STREAMING_SHOW_STREAM_PREVIEWS, {
    useTitle: () => a.intl.string(a.t.e3Zz3F),
    useSubtitle: () => a.intl.string(a.t.RztTjP),
    useValue: function () {
        var t;
        return !(null != (t = l.I0.useSetting()) && t);
    },
    setValue: function (t) {
        (0, s.Z)("stream_previews_disabled", !t, l.I0.getSetting(), [i.Z.USER_SETTINGS_VOICE_AND_VIDEO]),
            l.I0.updateSetting(!t);
    },
});
