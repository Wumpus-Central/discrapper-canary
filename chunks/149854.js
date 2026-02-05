n.d(t, { A: () => f });
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(397927),
    o = n(840120),
    a = n(998418),
    u = n(890942),
    d = n(722523),
    c = n(490557),
    p = n(634925),
    m = n(744201),
    A = n(867060),
    _ = n(568065),
    g = n(876380);
function f(e) {
    let { guildId: t, powerup: n } = e,
        [f, x] = l.useState(void 0);
    (0, A.A)(f);
    let [h, v] = l.useState(!1),
        j = (0, a.Ay)(t, n).type !== _.b_.INACTIVE,
        { textColor: b } = (0, m.A)(j),
        E = (0, o.M5)(t, "GuildPowerupPerkCard"),
        I = n.skuId === i.FB;
    return (0, r.jsxs)(p.h, {
        onHover: (e) => v(e),
        guildId: t,
        powerup: n,
        badge: I && E ? "beta" : void 0,
        children: [
            (0, r.jsx)(c.l, { className: g.Sl, powerup: n, isHovering: h }),
            (0, r.jsx)(u.Ft, {
                title: n.title,
                textColor: b,
                footer: (0, r.jsx)(p.A, { guildId: t, powerup: n }),
                children: (0, r.jsx)(s.Text, {
                    className: g.h_,
                    color: b,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(u.kd, { children: (0, r.jsx)(d.Ay, { guildId: t, powerup: n, onError: x }) }),
        ],
    });
}
