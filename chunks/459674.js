n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(153867),
    a = n(921801),
    o = n(740492),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    m = n(20493);
function p(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, r.e7)([o.ZP], () => o.ZP.disableVoiceChannelChangeAlert);
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, i.jsx)(s.j7V, {
            className: m.marginBottom20,
            note: u.intl.string(u.t.YCCMkJ),
            onChange: (e) => {
                (0, c.Z)('switch_channel_warning_enabled', e, !n), l.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
            },
            value: !n,
            hideBorder: t,
            children: (0, i.jsx)(s.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                className: m.marginBottom8,
                children: u.intl.string(u.t.e7LIiY)
            })
        })
    });
}
