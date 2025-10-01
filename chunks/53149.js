n.d(i, { default: () => c });
var e = n(951288);
n(647438);
var r = n(793030),
    l = n(442837),
    s = n(87051),
    a = n(9156),
    u = n(621600),
    d = n(388032);
let c = (t) => {
    let { onClose: i, channelId: n, transitionState: c } = t,
        o = (0, l.e7)([a.ZP], () => a.ZP.isChannelMuted(null, n));
    return (0, e.jsx)(r.Modal, {
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
