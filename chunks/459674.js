n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(153867),
    l = n(921801),
    o = n(740492),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    m = n(20493);
function g(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.e7)([o.ZP], () => o.ZP.disableVoiceChannelChangeAlert);
    return (0, r.jsx)(l.F, {
        setting: d.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, r.jsx)(s.j7V, {
            className: m.marginBottom20,
            note: u.NW.string(u.t.YCCMkJ),
            onChange: (e) => {
                (0, c.Z)('switch_channel_warning_enabled', e, !n), a.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
            },
            value: !n,
            hideBorder: t,
            children: (0, r.jsx)(s.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                className: m.marginBottom8,
                children: u.NW.string(u.t.e7LIiY)
            })
        })
    });
}
