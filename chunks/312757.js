n.d(i, { default: () => u });
var l = n(255367);
n(73800);
var e = n(82659),
    a = n(287734),
    r = n(482241),
    s = n(554747),
    c = n(388032);
function u(t) {
    let { channel: i, transitionState: n, onClose: u } = t,
        d = (0, s.qY)(i.id);
    if (null == d) return null;
    let o = () => {
        a.default.selectVoiceChannel(null), u();
    };
    return (0, l.jsx)(e.Modal, {
        transitionState: n,
        title: c.intl.string(c.t["4Ao8LC"]),
        subtitle: c.intl.string(c.t["0I0B8f"]),
        onClose: u,
        actions: [
            {
                onClick: o,
                variant: "secondary",
                text: c.intl.string(c.t.P60OAQ),
            },
            {
                onClick: () => {
                    r.Z.endEvent(d.id, d.guild_id), o();
                },
                variant: "critical-primary",
                text: c.intl.string(c.t.mjB9pa),
            },
        ],
    });
}
