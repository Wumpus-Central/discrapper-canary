n.d(i, { default: () => c });
var e = n(255367);
n(73800);
var r = n(442837),
    l = n(82659),
    s = n(87051),
    a = n(9156),
    u = n(621600),
    d = n(388032);
let c = (t) => {
    let { onClose: i, channelId: n, transitionState: c } = t,
        o = (0, r.e7)([a.ZP], () => a.ZP.isChannelMuted(null, n));
    return (0, e.jsx)(l.Modal, {
        transitionState: c,
        onClose: i,
        title: o ? d.intl.string(d.t["4rg7cH"]) : d.intl.string(d.t.uAmAiI),
        subtitle: o ? d.intl.string(d.t["5vton5"]) : d.intl.string(d.t.mscFJS),
        actions: [
            {
                variant: o ? "primary" : "critical-primary",
                text: o ? d.intl.string(d.t.YqAjX1) : d.intl.string(d.t["w4m94+"]),
                onClick: () => {
                    s.Z.updateChannelOverrideSettings(null, n, { muted: !o }, o ? u.ZB.Unmuted : u.ZB.Muted), i();
                },
            },
        ],
    });
};
