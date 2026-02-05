n.d(t, { A: () => A, h: () => _ });
var r = n(627968),
    l = n(64700),
    i = n(172218),
    s = n(294384),
    o = n(363487),
    a = n(998418),
    u = n(813847),
    d = n(890942),
    c = n(79275),
    p = n(224331),
    m = n(568065);
function A(e) {
    let { guildId: t, powerup: n, className: l } = e,
        i = (0, a.Ay)(t, n),
        o = i.type !== m.b_.LEVEL_ACTIVATED,
        c = (0, s.A)(t, n, "GuildPowerupCardBodyFooter"),
        p = (0, u.e)(n, i, c);
    return (0, r.jsx)(d.$L, { status: p, cost: o ? n.cost : void 0, className: l });
}
function _(e) {
    let { guildId: t, powerup: n, badge: u, className: A, onHover: _, children: g } = e,
        f = (0, o.A)(t),
        x = (0, a.Ay)(t, n),
        h = x.type !== m.b_.INACTIVE,
        v = x.sourceEntitlement?.ends_at != null,
        j = (0, s.A)(t, n, "GuildPowerupCard"),
        b = l.useRef(null),
        E = (0, p.A)(t, n),
        [I, S] = l.useState(!1),
        w = (0, i.K)(S, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.NI, {
                label: n.title,
                isActive: h,
                isWarning: v,
                badge: u,
                canRollback: j,
                onClick: E,
                onMouseOver: () => _?.(!0),
                onMouseLeave: () => _?.(!1),
                className: A,
                ref: (e) => {
                    (b.current = e), (w.current = e);
                },
                children: g,
            }),
            !j && f && (0, r.jsx)(c.A, { powerup: n, targetRef: b, isCardVisible: I }),
        ],
    });
}
