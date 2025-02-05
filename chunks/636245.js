n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(922482),
    a = n(979651),
    s = n(915863),
    o = n(388032),
    c = n(614774);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: m } = e,
        p = (0, i.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
    return (0, l.jsx)(
        s.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: p,
            onClick: () => {
                null == m || m(), r.AC(t, n);
            },
            fullWidth: !0,
            children: o.intl.string(o.t.ZYO5OD)
        },
        'stage'
    );
};
