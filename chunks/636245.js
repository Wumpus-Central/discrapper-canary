n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(922482),
    o = n(979651),
    s = n(915863),
    l = n(388032),
    c = n(156859);
let u = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: f } = e,
        _ = (0, i.e7)([o.Z], () => o.Z.isInChannel(n), [n]),
        p = () => {
            null == f || f(), a.AC(t, n);
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
