n.d(t, {
    Z: () => g,
    g: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(907331),
    o = n(10765),
    a = n(639777),
    s = n(973772),
    u = n(329134),
    c = n(838968),
    d = n(69323),
    p = n(279604),
    f = n(535396);
function m(e) {
    let { guildId: t, powerup: n, className: i } = e,
        l = (0, s.ZP)(t, n),
        a = l.type !== f.A3.LEVEL_ACTIVATED,
        d = (0, o.Z)(t, n, "GuildPowerupCardBodyFooter"),
        p = (0, u.P)(n, l, d);
    return (0, r.jsx)(c.uf, {
        status: p,
        cost: a ? n.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: u, badge: m, className: g, onHover: v, children: x } = e,
        _ = (0, a.Z)(n),
        b = (0, s.ZP)(n, u),
        h = b.type !== f.A3.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, o.Z)(n, u, "GuildPowerupCard"),
        Z = i.useRef(null),
        { onShowMore: w } = (0, p.ZP)(n, u),
        [I, E] = i.useState(!1),
        P = (0, l.O)(E, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: u.title,
                isActive: h,
                isWarning: j,
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
                _ &&
                (0, r.jsx)(d.Z, {
                    powerup: u,
                    targetRef: Z,
                    isCardVisible: I,
                }),
        ],
    });
}
