n.d(e, { Z: () => c });
var i = n(442837),
    r = n(153867),
    l = n(509613),
    s = n(740492),
    u = n(313789),
    a = n(569550),
    o = n(388032);
let c = (0, l.qs)(u.n.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
    useTitle: () => o.intl.string(o.t.jrWHD3),
    useSubtitle: () => o.intl.string(o.t.YCCMkJ),
    useValue: function () {
        return (0, i.e7)([s.ZP], () => !s.ZP.disableVoiceChannelChangeAlert);
    },
    setValue: function (t) {
        (0, a.Z)("switch_channel_warning_enabled", t, !s.ZP.disableVoiceChannelChangeAlert),
            r.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !t });
    },
});
