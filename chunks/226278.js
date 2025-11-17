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
    c = n(838968),
    u = n(69323),
    d = n(279604),
    p = n(787188),
    f = n(535396);
function m(e) {
    var t;
    let { guildId: n, powerup: i, className: l } = e,
        a = (0, s.ZP)(n, i),
        u = a.type !== f.A3.LEVEL_ACTIVATED,
        d = (0, o.Z)(n, i, "GuildPowerupCardBodyFooter"),
        m = null != (t = (0, p._)(i, a, d)) ? t : void 0;
    return (0, r.jsx)(c.uf, {
        status: m,
        cost: u ? i.cost : void 0,
        className: l,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: p, badge: m, className: g, onHover: v, children: x } = e,
        _ = (0, a.Z)(n),
        b = (0, s.ZP)(n, p),
        h = b.type !== f.A3.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, o.Z)(n, p, "GuildPowerupCard"),
        w = i.useRef(null),
        { onShowMore: I } = (0, d.ZP)(n, p),
        [E, Z] = i.useState(!1),
        P = (0, l.O)(Z, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: p.title,
                isActive: h,
                isWarning: j,
                badge: m,
                canRollback: C,
                onClick: I,
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
                (0, r.jsx)(u.Z, {
                    powerup: p,
                    targetRef: w,
                    isCardVisible: E,
                }),
        ],
    });
}
