n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(922482),
    a = n(979651),
    s = n(915863),
    l = n(388032),
    c = n(558803);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: f } = e,
        _ = (0, i.e7)([a.Z], () => a.Z.isInChannel(n), [n]),
        p = () => {
            null == f || f(), o.AC(t, n);
        };
    return (0, r.jsx)(
        s.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: _,
            onClick: p,
            fullWidth: !0,
            children: l.intl.string(l.t.ZYO5OD),
        },
        "stage",
    );
};
