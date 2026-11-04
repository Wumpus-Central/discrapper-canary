var e = n(477900);
n(582128);
var r = n(855986),
    s = n(189213),
    l = n(832712),
    a = n(543465),
    u = n(477427),
    d = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, channelId: n, transitionState: c } = t,
                g = (0, r.bG)([a.Ay], () => a.Ay.isChannelMuted(null, n));
            return (0, e.jsx)(s.a, {
                transitionState: c,
                onClose: i,
                title: g ? d.intl.string(d.t["4rg7cA"]) : d.intl.string(d.t.uAmAiL),
                subtitle: g ? d.intl.string(d.t["5vton6"]) : d.intl.string(d.t.mscFJU),
                actions: [
                    {
                        variant: g ? "primary" : "critical-primary",
                        text: g ? d.intl.string(d.t.YqAjXy) : d.intl.string(d.t.w4m945),
                        onClick: () => {
                            (l.A.updateChannelOverrideSettings({
                                guildId: null,
                                channelId: n,
                                settings: { muted: !g },
                                label: g ? u.fd.Unmuted : u.fd.Muted,
                            }),
                                i());
                        },
                    },
                ],
            });
        },
    },
);
