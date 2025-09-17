n.d(t, { Z: () => v }), n(388685), n(953529);
var r = n(951288),
    o = n(647438),
    i = n(494497),
    l = n(481060),
    a = n(158638),
    s = n(973772),
    c = n(838968),
    u = n(262212),
    d = n(795338),
    p = n(226278),
    m = n(279604),
    g = n(279475),
    f = n(535396),
    _ = n(237522);
function v(e) {
    let { guildId: t, powerup: n } = e,
        [v, x] = o.useState(void 0);
    (0, m.KT)(v);
    let [C, h] = o.useState(!1),
        b = (0, s.ZP)(t, n).type !== f.A3.INACTIVE,
        E = (0, g.d)(b),
        T = (0, a.g1)(t, "GuildPowerupPerkCard"),
        I = n.skuId === i.A$;
    return (0, r.jsxs)(p.Z, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: n,
        badge: I && T ? "beta" : void 0,
        children: [
            (0, r.jsx)(d.m, {
                className: _.image,
                powerup: n,
                isHovering: C,
            }),
            (0, r.jsx)(c.Q9, {
                title: n.title,
                textColor: E,
                footer: (0, r.jsx)(p.g, {
                    guildId: t,
                    powerup: n,
                }),
                children: (0, r.jsx)(l.Text, {
                    className: _.description,
                    color: E,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children: (0, r.jsx)(u.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: x,
                }),
            }),
        ],
    });
}
