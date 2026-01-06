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
    f = n(226278),
    p = n(707541),
    m = n(192958),
    g = n(535396),
    v = n(138545);
function x(e) {
    let { guildId: t, powerup: n } = e,
        [x, b] = i.useState(void 0);
    (0, m.Z)(x);
    let [h, j] = i.useState(!1),
        Z = (0, s.ZP)(t, n).type !== g.A3.INACTIVE,
        { textColor: _ } = (0, p.Z)(Z),
        C = (0, a.g1)(t, "GuildPowerupPerkCard"),
        w = n.skuId === l.A$;
    return (0, r.jsxs)(f.Z, {
        onHover: (e) => j(e),
        guildId: t,
        powerup: n,
        badge: w && C ? "beta" : void 0,
        children: [
            (0, r.jsx)(d.m, {
                className: v.image,
                powerup: n,
                isHovering: h,
            }),
            (0, r.jsx)(u.Q9, {
                title: n.title,
                textColor: _,
                footer: (0, r.jsx)(f.g, {
                    guildId: t,
                    powerup: n,
                }),
                children: (0, r.jsx)(o.Text, {
                    className: v.description,
                    color: _,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(u.N4, {
                children: (0, r.jsx)(c.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: b,
                }),
            }),
        ],
    });
}
