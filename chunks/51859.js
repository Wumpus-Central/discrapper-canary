(n.d(t, { Z: () => b }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(831209),
    l = n(494497),
    s = n(793030),
    a = n(481060),
    c = n(158638),
    u = n(973772),
    d = n(838968),
    p = n(262212),
    m = n(795338),
    f = n(279604),
    _ = n(279475),
    x = n(535396),
    g = n(388032),
    v = n(117172);
function b(e) {
    let { guildId: t, powerup: n } = e,
        [b, j] = o.useState(void 0);
    (0, f.KT)(b);
    let [E, h] = o.useState(!1),
        C = (0, u.Z)(t, n).type !== x.A3.INACTIVE,
        I = (0, _.d)(C),
        N = (0, c.g1)(t, 'GuildPowerupPerkCard'),
        O = n.skuId === l.A$;
    return (0, r.jsxs)(d.Z, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: n,
        children: [
            (0, r.jsx)(m.m, {
                className: v.image,
                powerup: n,
                isHovering: E
            }),
            (0, r.jsxs)('div', {
                className: v.contentContainer,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)('div', {
                                className: v.headerContainer,
                                children: (0, r.jsx)(s.X6, {
                                    color: I,
                                    variant: 'heading-md/bold',
                                    children: n.title
                                })
                            }),
                            (0, r.jsx)(s.xv, {
                                className: v.description,
                                color: I,
                                variant: 'text-sm/medium',
                                children: n.description
                            })
                        ]
                    }),
                    (0, r.jsx)(d.u, {
                        guildId: t,
                        powerup: n
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.buttonContainer,
                children: (0, r.jsx)(p.ZP, {
                    guildId: t,
                    powerup: n,
                    onError: j
                })
            }),
            !O &&
                !N &&
                (0, r.jsx)(a.IGR, {
                    className: v.new,
                    text: g.intl.string(g.t.y2b7CA)
                }),
            O &&
                N &&
                (0, r.jsx)(a.IGR, {
                    className: v.new,
                    text: g.intl.string(g.t.oW0eUV),
                    color: i.Z.BG_BRAND
                })
        ]
    });
}
