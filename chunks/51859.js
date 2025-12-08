n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    o = n(481060),
    a = n(158638),
    s = n(973772),
    u = n(838968),
    c = n(262212),
    d = n(795338),
    p = n(226278),
    f = n(279604),
    m = n(707541),
    g = n(535396),
    v = n(237522);
function x(e) {
    let { guildId: t, powerup: n } = e,
        [x, _] = i.useState(void 0);
    (0, f.KT)(x);
    let [b, h] = i.useState(!1),
        j = (0, s.ZP)(t, n).type !== g.A3.INACTIVE,
        { textColor: C } = (0, m.Z)(j),
        Z = (0, a.g1)(t, "GuildPowerupPerkCard"),
        w = n.skuId === l.A$;
    return (0, r.jsxs)(p.Z, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: n,
        badge: w && Z ? "beta" : void 0,
        children: [
            (0, r.jsx)(d.m, {
                className: v.image,
                powerup: n,
                isHovering: b,
            }),
            (0, r.jsx)(u.Q9, {
                title: n.title,
                textColor: C,
                footer: (0, r.jsx)(p.g, {
                    guildId: t,
                    powerup: n,
                }),
                children: (0, r.jsx)(o.Text, {
                    className: v.description,
                    color: C,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(u.N4, {
                children: (0, r.jsx)(c.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: _,
                }),
            }),
        ],
    });
}
