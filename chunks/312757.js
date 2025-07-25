i.d(n, { default: () => s });
var e = i(255367);
i(73800);
var d = i(82659),
    l = i(287734),
    a = i(482241),
    r = i(554747),
    _ = i(388032);
function s(t) {
    let { channel: n, transitionState: i, onClose: s } = t,
        p = (0, r.qY)(n.id);
    if (null == p) return null;
    let I = () => {
        (l.default.selectVoiceChannel(null), s());
    };
    return (0, e.jsx)(d.Modal, {
        transitionState: i,
        title: _.intl.string(_.t['4Ao8LC']),
        subtitle: _.intl.string(_.t['0I0B8f']),
        onClose: s,
        actions: [
            {
                onClick: I,
                variant: 'secondary',
                text: _.intl.string(_.t.P60OAQ)
            },
            {
                onClick: () => {
                    (a.Z.endEvent(p.id, p.guild_id), I());
                },
                variant: 'critical-primary',
                text: _.intl.string(_.t.mjB9pa)
            }
        ]
    });
}
