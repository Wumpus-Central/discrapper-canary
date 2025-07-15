n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(922482),
    a = n(979651),
    o = n(915863),
    s = n(388032),
    c = n(558803);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: f } = e,
        p = (0, i.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
    return (0, r.jsx)(
        o.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: p,
            onClick: () => {
                (null == f || f(), l.AC(t, n));
            },
            fullWidth: !0,
            children: s.intl.string(s.t.ZYO5OD)
        },
        'stage'
    );
};
