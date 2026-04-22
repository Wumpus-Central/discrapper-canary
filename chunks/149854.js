n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(834730),
    s = n(998418),
    a = n(890942),
    o = n(722523),
    d = n(490557),
    u = n(634925),
    c = n(744201),
    _ = n(867060),
    m = n(568065),
    p = n(989177);
function A(e) {
    let { guildId: t, powerup: n, badge: A } = e,
        [x, g] = i.useState(void 0);
    (0, _.A)(x);
    let [f, h] = i.useState(!1),
        v = (0, s.Ay)(t, n).type !== m.b_.INACTIVE,
        { textColor: E } = (0, c.A)(v);
    return (0, r.jsxs)(u.h, {
        onHover: (e) => h(e),
        guildId: t,
        powerup: n,
        badge: A,
        children: [
            (0, r.jsx)(d.l, { className: p.Sl, powerup: n, isHovering: f }),
            (0, r.jsx)(a.Ft, {
                title: n.title,
                textColor: E,
                footer: (0, r.jsx)(u.A, { guildId: t, powerup: n }),
                children: (0, r.jsx)(l.E, {
                    className: p.h_,
                    color: E,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(a.kd, { children: (0, r.jsx)(o.Ay, { guildId: t, powerup: n, onError: g }) }),
        ],
    });
}
