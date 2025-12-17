n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    o = n(481060),
    a = n(158638),
    s = n(238343),
    c = n(973772),
    u = n(838968),
    d = n(262212),
    f = n(795338),
    p = n(226278),
    m = n(707541),
    g = n(535396),
    v = n(138545);
function x(e) {
    let { guildId: t, powerup: n } = e,
        [x, b] = i.useState(void 0);
    (0, s.KT)(x);
    let [h, j] = i.useState(!1),
        _ = (0, c.ZP)(t, n).type !== g.A3.INACTIVE,
        { textColor: C } = (0, m.Z)(_),
        Z = (0, a.g1)(t, "GuildPowerupPerkCard"),
        w = n.skuId === l.A$;
    return (0, r.jsxs)(p.Z, {
        onHover: (e) => j(e),
        guildId: t,
        powerup: n,
        badge: w && Z ? "beta" : void 0,
        children: [
            (0, r.jsx)(f.m, {
                className: v.image,
                powerup: n,
                isHovering: h,
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
                children: (0, r.jsx)(d.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: b,
                }),
            }),
        ],
    });
}
