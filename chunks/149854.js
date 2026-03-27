n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(998418),
    o = n(890942),
    a = n(722523),
    d = n(490557),
    u = n(634925),
    c = n(744201),
    p = n(867060),
    _ = n(568065),
    m = n(849289);
function f(e) {
    let { guildId: t, powerup: n, badge: f } = e,
        [A, g] = i.useState(void 0);
    (0, p.A)(A);
    let [x, v] = i.useState(!1),
        h = (0, s.Ay)(t, n).type !== _.b_.INACTIVE,
        { textColor: E } = (0, c.A)(h);
    return (0, r.jsxs)(u.h, {
        onHover: (e) => v(e),
        guildId: t,
        powerup: n,
        badge: f,
        children: [
            (0, r.jsx)(d.l, { className: m.Sl, powerup: n, isHovering: x }),
            (0, r.jsx)(o.Ft, {
                title: n.title,
                textColor: E,
                footer: (0, r.jsx)(u.A, { guildId: t, powerup: n }),
                children: (0, r.jsx)(l.Text, {
                    className: m.h_,
                    color: E,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(o.kd, { children: (0, r.jsx)(a.Ay, { guildId: t, powerup: n, onError: g }) }),
        ],
    });
}
