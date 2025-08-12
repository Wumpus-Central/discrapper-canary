n.d(t, {
    Z: () => g,
    g: () => m,
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    i = n(434650),
    l = n(10765),
    s = n(639777),
    a = n(973772),
    u = n(838968),
    c = n(69323),
    d = n(279604),
    p = n(787188),
    f = n(535396);
function m(e) {
    var t;
    let { guildId: n, powerup: o, className: i } = e,
        s = (0, a.ZP)(n, o),
        c = s.type !== f.A3.LEVEL_ACTIVATED,
        d = (0, l.Z)(n, o, "GuildPowerupCardBodyFooter"),
        m = null != (t = (0, p._)(o, s, d)) ? t : void 0;
    return (0, r.jsx)(u.uf, {
        status: m,
        cost: c ? o.cost : void 0,
        className: i,
    });
}
function g(e) {
    var t;
    let { guildId: n, powerup: p, badge: m, className: g, onHover: x, children: v } = e,
        _ = (0, s.Z)(n),
        b = (0, a.ZP)(n, p),
        j = b.type !== f.A3.INACTIVE,
        h = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        E = (0, l.Z)(n, p, "GuildPowerupCard"),
        C = o.useRef(null),
        { onShowMore: I } = (0, d.ZP)(n, p),
        [O, y] = o.useState(!1),
        P = (0, i.O)(y, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.aB, {
                label: p.title,
                isActive: j,
                isWarning: h,
                badge: m,
                canRollback: E,
                onClick: I,
                onMouseOver: () => (null == x ? void 0 : x(!0)),
                onMouseLeave: () => (null == x ? void 0 : x(!1)),
                className: g,
                ref: (e) => {
                    (C.current = e), (P.current = e);
                },
                children: v,
            }),
            !E &&
                _ &&
                (0, r.jsx)(c.Z, {
                    powerup: p,
                    targetRef: C,
                    isCardVisible: O,
                }),
        ],
    });
}
