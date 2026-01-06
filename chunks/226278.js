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
    f = n(700092),
    p = n(535396);
function m(e) {
    let { guildId: t, powerup: n, className: i } = e,
        l = (0, s.ZP)(t, n),
        a = l.type !== p.A3.LEVEL_ACTIVATED,
        d = (0, o.Z)(t, n, "GuildPowerupCardBodyFooter"),
        f = (0, u.P)(n, l, d);
    return (0, r.jsx)(c.uf, {
        status: f,
        cost: a ? n.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: u, badge: m, className: g, onHover: v, children: x } = e,
        b = (0, a.Z)(n),
        h = (0, s.ZP)(n, u),
        j = h.type !== p.A3.INACTIVE,
        Z = (null == (t = h.sourceEntitlement) ? void 0 : t.ends_at) != null,
        _ = (0, o.Z)(n, u, "GuildPowerupCard"),
        C = i.useRef(null),
        w = (0, f.Z)(n, u),
        [E, I] = i.useState(!1),
        P = (0, l.O)(I, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: u.title,
                isActive: j,
                isWarning: Z,
                badge: m,
                canRollback: _,
                onClick: w,
                onMouseOver: () => (null == v ? void 0 : v(!0)),
                onMouseLeave: () => (null == v ? void 0 : v(!1)),
                className: g,
                ref: (e) => {
                    (C.current = e), (P.current = e);
                },
                children: x,
            }),
            !_ &&
                b &&
                (0, r.jsx)(d.Z, {
                    powerup: u,
                    targetRef: C,
                    isCardVisible: E,
                }),
        ],
    });
}
