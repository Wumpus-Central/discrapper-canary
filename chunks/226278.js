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
    u = n(973772),
    c = n(329134),
    d = n(838968),
    p = n(69323),
    f = n(535396);
function m(e) {
    let { guildId: t, powerup: n, className: i } = e,
        l = (0, u.ZP)(t, n),
        o = l.type !== f.A3.LEVEL_ACTIVATED,
        s = (0, a.Z)(t, n, "GuildPowerupCardBodyFooter"),
        p = (0, c.P)(n, l, s);
    return (0, r.jsx)(d.uf, {
        status: p,
        cost: o ? n.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: c, badge: m, className: g, onHover: v, children: x } = e,
        _ = (0, s.Z)(n),
        b = (0, u.ZP)(n, c),
        h = b.type !== f.A3.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, a.Z)(n, c, "GuildPowerupCard"),
        Z = i.useRef(null),
        { onShowMore: w } = (0, o.Z)(n, c),
        [I, E] = i.useState(!1),
        P = (0, l.O)(E, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.aB, {
                label: c.title,
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
                (0, r.jsx)(p.Z, {
                    powerup: c,
                    targetRef: Z,
                    isCardVisible: I,
                }),
        ],
    });
}
