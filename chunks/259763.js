n.d(i, { default: () => c });
var e = n(477900);
n(582128);
var l = n(189213),
    r = n(17928),
    s = n(832712),
    a = n(543465),
    d = n(477427),
    u = n(375708);
let c = function (t) {
    let { onClose: i, channelId: n, transitionState: c } = t,
        g = (0, r.bG)([a.Ay], () => a.Ay.isChannelMuted(null, n));
    return (0, e.jsx)(l.Modal, {
        transitionState: c,
        onClose: i,
        title: g ? u.intl.string(u.t["4rg7cA"]) : u.intl.string(u.t.uAmAiL),
        subtitle: g ? u.intl.string(u.t["5vton6"]) : u.intl.string(u.t.mscFJU),
        actions: [
            {
                variant: g ? "primary" : "critical-primary",
                text: g ? u.intl.string(u.t.YqAjXy) : u.intl.string(u.t.w4m945),
                onClick: () => {
                    (s.A.updateChannelOverrideSettings({
                        guildId: null,
                        channelId: n,
                        settings: { muted: !g },
                        label: g ? d.fd.Unmuted : d.fd.Muted,
                    }),
                        i());
                },
            },
        ],
    });
};
