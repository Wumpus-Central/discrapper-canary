n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(922482),
    a = n(979651),
    o = n(915863),
    s = n(388032),
    c = n(735261);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: f } = e,
        p = (0, l.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
    return (0, r.jsx)(
        o.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: p,
            onClick: () => {
                null == f || f(), i.AC(t, n);
            },
            fullWidth: !0,
            children: s.NW.string(s.t.ZYO5OD)
        },
        'stage'
    );
};
