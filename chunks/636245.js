var i = n(200651);
n(192379);
var l = n(442837),
    a = n(922482),
    r = n(979651),
    s = n(915863),
    o = n(388032),
    c = n(614774);
t.Z = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: m } = e,
        f = (0, l.e7)([r.Z], () => r.Z.isInChannel(n), [n]);
    return (0, i.jsx)(
        s.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: f,
            onClick: () => {
                null == m || m(), a.AC(t, n);
            },
            fullWidth: !0,
            children: o.intl.string(o.t.ZYO5OD)
        },
        'stage'
    );
};
