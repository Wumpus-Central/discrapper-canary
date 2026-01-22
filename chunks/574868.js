n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(817281),
    o = n(195043),
    l = n(964404),
    c = n(698723),
    u = n(531525),
    d = n(985018);

function f() {
    let e = (0, i.bG)([l.Ay], () => l.Ay.disableVoiceChannelChangeAlert);
    return (0, r.jsx)(o.x, {
        setting: u.H.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, r.jsx)(a.dOG, {
            label: d.intl.string(d.t.e7LIiY),
            description: d.intl.string(d.t.YCCMkJ),
            checked: !e,
            onChange: (t) => {
                (0, c.A)("switch_channel_warning_enabled", t, !e),
                    s.Ay.updatedUnsyncedSettings({
                        disableVoiceChannelChangeAlert: !t,
                    });
            },
        }),
    });
}
