n.d(e, { n: () => T });
var i = n(442837),
    l = n(153867),
    s = n(509613),
    u = n(740492),
    r = n(313789),
    a = n(569550),
    o = n(388032);
let T = (0, s.qs)(r.n.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
    useTitle: () => o.intl.string(o.t.jrWHD3),
    useSubtitle: () => o.intl.string(o.t.YCCMkJ),
    useValue: function () {
        return (0, i.e7)([u.ZP], () => !u.ZP.disableVoiceChannelChangeAlert);
    },
    setValue: function (t) {
        (0, a.Z)("switch_channel_warning_enabled", t, !u.ZP.disableVoiceChannelChangeAlert),
            l.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !t });
    },
});
