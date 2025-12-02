n.d(t, {
    Z: () => g,
    g: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(907331),
    l = n(10765),
    a = n(639777),
    s = n(973772),
    c = n(329134),
    u = n(838968),
    d = n(69323),
    p = n(279604),
    f = n(535396);
function m(e) {
    let { guildId: t, powerup: n, className: i } = e,
        o = (0, s.ZP)(t, n),
        a = o.type !== f.A3.LEVEL_ACTIVATED,
        d = (0, l.Z)(t, n, "GuildPowerupCardBodyFooter"),
        p = (0, c.P)(n, o, d);
    return (0, r.jsx)(u.uf, {
        status: p,
        cost: a ? n.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: c, badge: m, className: g, onHover: v, children: x } = e,
        _ = (0, a.Z)(n),
        b = (0, s.ZP)(n, c),
        h = b.type !== f.A3.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, l.Z)(n, c, "GuildPowerupCard"),
        w = i.useRef(null),
        { onShowMore: Z } = (0, p.ZP)(n, c),
        [I, E] = i.useState(!1),
        P = (0, o.O)(E, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.aB, {
                label: c.title,
                isActive: h,
                isWarning: j,
                badge: m,
                canRollback: C,
                onClick: Z,
                onMouseOver: () => (null == v ? void 0 : v(!0)),
                onMouseLeave: () => (null == v ? void 0 : v(!1)),
                className: g,
                ref: (e) => {
                    (w.current = e), (P.current = e);
                },
                children: x,
            }),
            !C &&
                _ &&
                (0, r.jsx)(d.Z, {
                    powerup: c,
                    targetRef: w,
                    isCardVisible: I,
                }),
        ],
    });
}
