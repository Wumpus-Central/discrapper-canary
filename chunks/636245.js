n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(922482),
    o = n(979651),
    a = n(915863),
    s = n(388032),
    c = n(558803);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: p } = e,
        f = (0, l.e7)([o.Z], () => o.Z.isInChannel(n), [n]);
    return (0, r.jsx)(
        a.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: f,
            onClick: () => {
                null == p || p(), i.AC(t, n);
            },
            fullWidth: !0,
            children: s.NW.string(s.t.ZYO5OD)
        },
        'stage'
    );
};
