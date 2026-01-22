l.d(t, { A: () => g }), l(896048), l(228524);
var r = l(627968),
    n = l(64700),
    i = l(512750),
    s = l(397927),
    o = l(840120),
    a = l(998418),
    u = l(890942),
    d = l(722523),
    c = l(490557),
    f = l(634925),
    p = l(744201),
    m = l(867060),
    v = l(568065),
    A = l(876380);
function g(e) {
    let { guildId: t, powerup: l } = e,
        [g, x] = n.useState(void 0);
    (0, m.A)(g);
    let [b, h] = n.useState(!1),
        j = (0, a.Ay)(t, l).type !== v.b_.INACTIVE,
        { textColor: _ } = (0, p.A)(j),
        E = (0, o.M5)(t, "GuildPowerupPerkCard"),
        y = l.skuId === i.FB;
    return (0, r.jsxs)(f.h, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: l,
        badge: y && E ? "beta" : void 0,
        children: [
            (0, r.jsx)(c.l, {
                className: A.Sl,
                powerup: l,
                isHovering: b,
            }),
            (0, r.jsx)(u.Ft, {
                title: l.title,
                textColor: _,
                footer: (0, r.jsx)(f.A, {
                    guildId: t,
                    powerup: l,
                }),
                children: (0, r.jsx)(s.Text, {
                    className: A.h_,
                    color: _,
                    variant: "text-sm/medium",
                    children: l.description,
                }),
            }),
            (0, r.jsx)(u.kd, {
                children: (0, r.jsx)(d.Ay, {
                    guildId: t,
                    powerup: l,
                    onError: x,
                }),
            }),
        ],
    });
}
