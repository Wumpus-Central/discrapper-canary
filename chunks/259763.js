n.d(i, { default: () => c });
var r = n(627968);
n(64700);
var e = n(189213),
    l = n(17928),
    s = n(832712),
    a = n(543465),
    u = n(477427),
    d = n(375708);
let c = function (t) {
    let { onClose: i, channelId: n, transitionState: c } = t,
        o = (0, l.bG)([a.Ay], () => a.Ay.isChannelMuted(null, n));
    return (0, r.jsx)(e.Modal, {
        transitionState: c,
        onClose: i,
        title: o ? d.intl.string(d.t["4rg7cA"]) : d.intl.string(d.t.uAmAiL),
        subtitle: o ? d.intl.string(d.t["5vton6"]) : d.intl.string(d.t.mscFJU),
        actions: [
            {
                variant: o ? "primary" : "critical-primary",
                text: o ? d.intl.string(d.t.YqAjXy) : d.intl.string(d.t.w4m945),
                onClick: () => {
                    s.A.updateChannelOverrideSettings(null, n, { muted: !o }, o ? u.fd.Unmuted : u.fd.Muted), i();
                },
            },
        ],
    });
};
