n.d(t, { default: () => o });
var l = n(54381);
n(473749);
var r = n(793030),
    i = n(287734),
    u = n(482241),
    c = n(554747),
    a = n(388032);
function o(e) {
    let { channel: t, transitionState: n, onClose: o } = e,
        s = (0, c.qY)(t.id);
    if (null == s) return null;
    let d = () => {
        i.default.selectVoiceChannel(null), o();
    };
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        title: a.intl.string(a.t["4Ao8LC"]),
        subtitle: a.intl.string(a.t["0I0B8f"]),
        onClose: o,
        actions: [
            {
                onClick: d,
                variant: "secondary",
                text: a.intl.string(a.t.P60OAX),
            },
            {
                onClick: () => {
                    u.Z.endEvent(s.id, s.guild_id), d();
                },
                variant: "critical-primary",
                text: a.intl.string(a.t.mjB9pd),
            },
        ],
    });
}
