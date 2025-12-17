n.d(t, {
    Z: () => g,
    g: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(907331),
    o = n(448222),
    a = n(10765),
    s = n(639777),
    c = n(973772),
    u = n(329134),
    d = n(838968),
    f = n(69323),
    p = n(535396);
function m(e) {
    let { guildId: t, powerup: n, className: i } = e,
        l = (0, c.ZP)(t, n),
        o = l.type !== p.A3.LEVEL_ACTIVATED,
        s = (0, a.Z)(t, n, "GuildPowerupCardBodyFooter"),
        f = (0, u.P)(n, l, s);
    return (0, r.jsx)(d.uf, {
        status: f,
        cost: o ? n.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: u, badge: m, className: g, onHover: v, children: x } = e,
        b = (0, s.Z)(n),
        h = (0, c.ZP)(n, u),
        j = h.type !== p.A3.INACTIVE,
        _ = (null == (t = h.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, a.Z)(n, u, "GuildPowerupCard"),
        Z = i.useRef(null),
        { onShowMore: w } = (0, o.Z)(n, u),
        [I, E] = i.useState(!1),
        P = (0, l.O)(E, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.aB, {
                label: u.title,
                isActive: j,
                isWarning: _,
                badge: m,
                canRollback: C,
                onClick: w,
                onMouseOver: () => (null == v ? void 0 : v(!0)),
                onMouseLeave: () => (null == v ? void 0 : v(!1)),
                className: g,
                ref: (e) => {
                    (Z.current = e), (P.current = e);
                },
                children: x,
            }),
            !C &&
                b &&
                (0, r.jsx)(f.Z, {
                    powerup: u,
                    targetRef: Z,
                    isCardVisible: I,
                }),
        ],
    });
}
