n.d(t, { default: () => a });
var l = n(627968);
n(64700);
var r = n(158954),
    i = n(956793),
    u = n(496092),
    c = n(508654),
    s = n(985018);
function a(e) {
    let { channel: t, transitionState: n, onClose: a } = e,
        o = (0, c.Qs)(t.id);
    if (null == o) return null;
    let d = () => {
        i.default.selectVoiceChannel(null), a();
    };
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        title: s.intl.string(s.t["4Ao8LC"]),
        subtitle: s.intl.string(s.t["0I0B8f"]),
        onClose: a,
        actions: [
            {
                onClick: d,
                variant: "secondary",
                text: s.intl.string(s.t.P60OAX),
            },
            {
                onClick: () => {
                    u.A.endEvent(o.id, o.guild_id), d();
                },
                variant: "critical-primary",
                text: s.intl.string(s.t.mjB9pd),
            },
        ],
    });
}
