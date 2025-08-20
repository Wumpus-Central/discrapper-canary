n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(153867),
    s = n(921801),
    l = n(740492),
    c = n(569550),
    u = n(726985),
    d = n(388032),
    f = n(197571);
function _(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.e7)([l.ZP], () => l.ZP.disableVoiceChannelChangeAlert);
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, r.jsx)(a.j7V, {
            className: f.marginBottom20,
            note: d.intl.string(d.t.YCCMkJ),
            onChange: (e) => {
                (0, c.Z)("switch_channel_warning_enabled", e, !n),
                    o.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
            },
            value: !n,
            hideBorder: t,
            children: (0, r.jsx)(a.X6q, {
                variant: "text-md/medium",
                color: "header-primary",
                className: f.marginBottom8,
                children: d.intl.string(d.t.e7LIiY),
            }),
        }),
    });
}
