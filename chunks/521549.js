n.d(t, { default: () => s });
var l = n(627968);
n(64700);
var i = n(158954),
    u = n(956793),
    r = n(496092),
    E = n(508654),
    d = n(985018);
function s(e) {
    let { channel: t, transitionState: n, onClose: s } = e,
        a = (0, E.Qs)(t.id);
    if (null == a) return null;
    let c = () => {
        u.default.selectVoiceChannel(null), s();
    };
    return (0, l.jsx)(i.Modal, {
        transitionState: n,
        title: d.intl.string(d.t["4Ao8LC"]),
        subtitle: d.intl.string(d.t["0I0B8f"]),
        onClose: s,
        actions: [
            { onClick: c, variant: "secondary", text: d.intl.string(d.t.P60OAX) },
            {
                onClick: () => {
                    r.A.endEvent(a.id, a.guild_id), c();
                },
                variant: "critical-primary",
                text: d.intl.string(d.t.mjB9pd),
            },
        ],
    });
}
