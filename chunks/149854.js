n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(998418),
    o = n(890942),
    a = n(722523),
    u = n(490557),
    d = n(634925),
    c = n(744201),
    p = n(867060),
    m = n(568065),
    _ = n(876380);
function f(e) {
    let { guildId: t, powerup: n } = e,
        [f, g] = i.useState(void 0);
    (0, p.A)(f);
    let [x, A] = i.useState(!1),
        v = (0, l.Ay)(t, n).type !== m.b_.INACTIVE,
        { textColor: h } = (0, c.A)(v);
    return (0, r.jsxs)(d.h, {
        onHover: (e) => A(e),
        guildId: t,
        powerup: n,
        children: [
            (0, r.jsx)(u.l, { className: _.Sl, powerup: n, isHovering: x }),
            (0, r.jsx)(o.Ft, {
                title: n.title,
                textColor: h,
                footer: (0, r.jsx)(d.A, { guildId: t, powerup: n }),
                children: (0, r.jsx)(s.Text, {
                    className: _.h_,
                    color: h,
                    variant: "text-sm/medium",
                    children: n.description,
                }),
            }),
            (0, r.jsx)(o.kd, { children: (0, r.jsx)(a.Ay, { guildId: t, powerup: n, onError: g }) }),
        ],
    });
}
