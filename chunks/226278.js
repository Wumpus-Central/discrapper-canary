n.d(t, {
    Z: () => _,
    g: () => f,
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    i = n(434650),
    l = n(10765),
    s = n(639777),
    a = n(973772),
    c = n(838968),
    u = n(69323),
    d = n(279604),
    p = n(787188),
    m = n(535396);
function f(e) {
    var t;
    let { guildId: n, powerup: o, className: i } = e,
        s = (0, a.ZP)(n, o),
        u = s.type !== m.A3.LEVEL_ACTIVATED,
        d = (0, l.Z)(n, o, "GuildPowerupCardBodyFooter"),
        f = null != (t = (0, p._)(o, s, d)) ? t : void 0;
    return (0, r.jsx)(c.uf, {
        status: f,
        cost: u ? o.cost : void 0,
        className: i,
    });
}
function _(e) {
    var t;
    let { guildId: n, powerup: p, badge: f, className: _, onHover: x, children: g } = e,
        v = (0, s.Z)(n),
        b = (0, a.ZP)(n, p),
        h = b.type !== m.A3.INACTIVE,
        j = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, l.Z)(n, p, "GuildPowerupCard"),
        E = o.useRef(null),
        { onShowMore: I } = (0, d.ZP)(n, p),
        [N, w] = o.useState(!1),
        Z = (0, i.O)(w, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: p.title,
                isActive: h,
                isWarning: j,
                badge: f,
                canRollback: C,
                onClick: I,
                onMouseOver: () => (null == x ? void 0 : x(!0)),
                onMouseLeave: () => (null == x ? void 0 : x(!1)),
                className: _,
                ref: (e) => {
                    (E.current = e), (Z.current = e);
                },
                children: g,
            }),
            !C &&
                v &&
                (0, r.jsx)(u.Z, {
                    powerup: p,
                    targetRef: E,
                    isCardVisible: N,
                }),
        ],
    });
}
