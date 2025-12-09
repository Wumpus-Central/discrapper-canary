n.d(t, { default: () => a });
var l = n(54381);
n(473749);
var r = n(793030),
    i = n(287734),
    u = n(482241),
    c = n(554747),
    o = n(388032);
function a(e) {
    let { channel: t, transitionState: n, onClose: a } = e,
        s = (0, c.qY)(t.id);
    if (null == s) return null;
    let d = () => {
        i.default.selectVoiceChannel(null), a();
    };
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["4Ao8LC"]),
        subtitle: o.intl.string(o.t["0I0B8f"]),
        onClose: a,
        actions: [
            {
                onClick: d,
                variant: "secondary",
                text: o.intl.string(o.t.P60OAX),
            },
            {
                onClick: () => {
                    u.Z.endEvent(s.id, s.guild_id), d();
                },
                variant: "critical-primary",
                text: o.intl.string(o.t.mjB9pd),
            },
        ],
    });
}
