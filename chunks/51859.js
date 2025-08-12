n.d(t, { Z: () => v }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(481060),
    s = n(158638),
    a = n(973772),
    u = n(838968),
    c = n(262212),
    d = n(795338),
    p = n(226278),
    f = n(279604),
    m = n(279475),
    g = n(535396),
    x = n(91900);
function v(e) {
    let { guildId: t, powerup: n } = e,
        [v, _] = o.useState(void 0);
    (0, f.KT)(v);
    let [b, j] = o.useState(!1),
        h = (0, a.ZP)(t, n).type !== g.A3.INACTIVE,
        E = (0, m.d)(h),
        C = (0, s.g1)(t, "GuildPowerupPerkCard"),
        I = n.skuId === i.A$;
    return (0, r.jsxs)(p.Z, {
        onHover: (e) => j(e),
        guildId: t,
        powerup: n,
        badge: I || C ? (I && C ? "beta" : void 0) : "new",
        children: [
            (0, r.jsx)(d.m, {
                className: x.image,
                powerup: n,
                isHovering: b,
            }),
            (0, r.jsx)(u.Q9, {
                title: n.title,
                textColor: E,
                footer: (0, r.jsx)(p.g, {
                    guildId: t,
                    powerup: n,
                }),
                children: (0, r.jsx)(l.Text, {
                    className: x.description,
                    color: E,
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
