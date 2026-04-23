n.d(t, { A: () => p, h: () => A });
var r = n(627968),
    i = n(64700),
    l = n(172218),
    s = n(294384),
    a = n(363487),
    o = n(998418),
    d = n(813847),
    u = n(890942),
    c = n(79275),
    _ = n(224331),
    m = n(568065);
function p(e) {
    let { guildId: t, powerup: n, className: i } = e,
        l = (0, o.Ay)(t, n),
        a = l.type !== m.b_.LEVEL_ACTIVATED,
        c = (0, s.A)(t, n, "GuildPowerupCardBodyFooter"),
        _ = (0, d.e)(n, l, c);
    return (0, r.jsx)(u.$L, { status: _, cost: a ? n.cost : void 0, className: i });
}
function A(e) {
    let { guildId: t, powerup: n, badge: d, className: p, onHover: A, children: x } = e,
        g = (0, a.A)(t),
        f = (0, o.Ay)(t, n),
        h = f.type !== m.b_.INACTIVE,
        v = f.sourceEntitlement?.ends_at != null,
        E = (0, s.A)(t, n, "GuildPowerupCard"),
        S = i.useRef(null),
        I = (0, _.A)(t, n),
        [b, j] = i.useState(!1),
        C = (0, l.K)(j, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.NI, {
                label: n.title,
                isActive: h,
                isWarning: v,
                badge: d,
                canRollback: E,
                onClick: I,
                onMouseOver: () => A?.(!0),
                onMouseLeave: () => A?.(!1),
                className: p,
                ref: (e) => {
                    (S.current = e), (C.current = e);
                },
                children: x,
            }),
            !E && g && (0, r.jsx)(c.A, { powerup: n, targetRef: S, isCardVisible: b }),
        ],
    });
}
