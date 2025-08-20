n.d(t, { default: () => a });
var l = n(951288);
n(647438);
var r = n(82659),
    i = n(287734),
    u = n(482241),
    c = n(554747),
    o = n(388032);
function a(e) {
    let { channel: t, transitionState: n, onClose: a } = e,
        s = (0, c.qY)(t.id);
    if (null == s) return null;
    let E = () => {
        i.default.selectVoiceChannel(null), a();
    };
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["4Ao8LC"]),
        subtitle: o.intl.string(o.t["0I0B8f"]),
        onClose: a,
        actions: [
            {
                onClick: E,
                variant: "secondary",
                text: o.intl.string(o.t.P60OAQ),
            },
            {
                onClick: () => {
                    u.Z.endEvent(s.id, s.guild_id), E();
                },
                variant: "critical-primary",
                text: o.intl.string(o.t.mjB9pa),
            },
        ],
    });
}
