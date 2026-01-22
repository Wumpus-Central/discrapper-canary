l.d(t, {
    A: () => m,
    h: () => v,
}),
    l(896048);
var r = l(627968),
    n = l(64700),
    i = l(172218),
    s = l(294384),
    o = l(363487),
    a = l(998418),
    u = l(813847),
    d = l(890942),
    c = l(79275),
    f = l(224331),
    p = l(568065);
function m(e) {
    let { guildId: t, powerup: l, className: n } = e,
        i = (0, a.Ay)(t, l),
        o = i.type !== p.b_.LEVEL_ACTIVATED,
        c = (0, s.A)(t, l, "GuildPowerupCardBodyFooter"),
        f = (0, u.e)(l, i, c);
    return (0, r.jsx)(d.$L, {
        status: f,
        cost: o ? l.cost : void 0,
        className: n,
    });
}
function v(e) {
    var t;
    let { guildId: l, powerup: u, badge: m, className: v, onHover: A, children: g } = e,
        x = (0, o.A)(l),
        b = (0, a.Ay)(l, u),
        h = b.type !== p.b_.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        _ = (0, s.A)(l, u, "GuildPowerupCard"),
        E = n.useRef(null),
        y = (0, f.A)(l, u),
        [I, S] = n.useState(!1),
        w = (0, i.K)(S, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.NI, {
                label: u.title,
                isActive: h,
                isWarning: j,
                badge: m,
                canRollback: _,
                onClick: y,
                onMouseOver: () => (null == A ? void 0 : A(!0)),
                onMouseLeave: () => (null == A ? void 0 : A(!1)),
                className: v,
                ref: (e) => {
                    (E.current = e), (w.current = e);
                },
                children: g,
            }),
            !_ &&
                x &&
                (0, r.jsx)(c.A, {
                    powerup: u,
                    targetRef: E,
                    isCardVisible: I,
                }),
        ],
    });
}
