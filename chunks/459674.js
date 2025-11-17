n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(153867),
    s = n(921801),
    l = n(740492),
    c = n(569550),
    u = n(726985),
    d = n(388032);
function f() {
    let e = (0, i.e7)([l.ZP], () => l.ZP.disableVoiceChannelChangeAlert);
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, r.jsx)(a.rsf, {
            label: d.intl.string(d.t.e7LIiY),
            description: d.intl.string(d.t.YCCMkJ),
            checked: !e,
            onChange: (t) => {
                (0, c.Z)("switch_channel_warning_enabled", t, !e),
                    o.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !t });
            },
        }),
    });
}
