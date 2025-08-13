n.d(t, { Z: () => g }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(481060),
    s = n(158638),
    a = n(973772),
    c = n(838968),
    u = n(262212),
    d = n(795338),
    p = n(226278),
    m = n(279604),
    f = n(279475),
    _ = n(535396),
    x = n(91900);
function g(e) {
    let { guildId: t, powerup: n } = e,
        [g, v] = o.useState(void 0);
    (0, m.KT)(g);
    let [b, h] = o.useState(!1),
        j = (0, a.ZP)(t, n).type !== _.A3.INACTIVE,
        C = (0, f.d)(j),
        E = (0, s.g1)(t, "GuildPowerupPerkCard"),
        I = n.skuId === i.A$;
    return (0, r.jsxs)(p.Z, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: n,
        badge: I || E ? (I && E ? "beta" : void 0) : "new",
        children: [
            (0, r.jsx)(d.m, {
                className: x.image,
                powerup: n,
                isHovering: b,
            }),
            (0, r.jsx)(c.Q9, {
                title: n.title,
                textColor: C,
                footer: (0, r.jsx)(p.g, {
                    guildId: t,
                    powerup: n,
                }),
                children: (0, r.jsx)(l.Text, {
                    className: x.description,
                    color: C,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children: (0, r.jsx)(u.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: v,
                }),
            }),
        ],
    });
}
