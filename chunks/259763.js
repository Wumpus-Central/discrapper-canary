n.d(i, { default: () => c });
var r = n(627968);
n(64700);
var e = n(189213),
    l = n(17928),
    s = n(832712),
    a = n(543465),
    d = n(477427),
    u = n(985018);
let c = (t) => {
    let { onClose: i, channelId: n, transitionState: c } = t,
        p = (0, l.bG)([a.Ay], () => a.Ay.isChannelMuted(null, n));
    return (0, r.jsx)(e.Modal, {
        transitionState: c,
        onClose: i,
        title: p ? u.intl.string(u.t["4rg7cA"]) : u.intl.string(u.t.uAmAiL),
        subtitle: p ? u.intl.string(u.t["5vton6"]) : u.intl.string(u.t.mscFJU),
        actions: [
            {
                variant: p ? "primary" : "critical-primary",
                text: p ? u.intl.string(u.t.YqAjXy) : u.intl.string(u.t.w4m945),
                onClick: () => {
                    s.A.updateChannelOverrideSettings(null, n, { muted: !p }, p ? d.fd.Unmuted : d.fd.Muted), i();
                },
            },
        ],
    });
};
