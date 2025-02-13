n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(153867),
    a = n(921801),
    o = n(740492),
    c = n(569550),
    d = n(726985),
    u = n(388032),
    h = n(483938);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.e7)([o.ZP], () => o.ZP.disableVoiceChannelChangeAlert);
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, i.jsx)(l.j7V, {
            className: h.marginBottom20,
            note: u.intl.string(u.t.YCCMkJ),
            onChange: (e) => {
                (0, c.Z)('switch_channel_warning_enabled', e, !n), r.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
            },
            value: !n,
            hideBorder: t,
            children: (0, i.jsx)(l.X6q, {
                variant: 'text-md/medium',
                color: 'header-primary',
                className: h.marginBottom8,
                children: u.intl.string(u.t.e7LIiY)
            })
        })
    });
}
