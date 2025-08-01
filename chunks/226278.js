(n.d(t, {
    Z: () => x,
    g: () => _
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(434650),
    l = n(10765),
    s = n(639777),
    a = n(973772),
    c = n(838968),
    u = n(69323),
    d = n(279604),
    p = n(535396),
    m = n(93841),
    f = n(388032);
function _(e) {
    var t, n, o;
    let i,
        { guildId: s, powerup: u, className: d } = e,
        _ = (0, a.Z)(s, u),
        x = _.type !== p.A3.LEVEL_ACTIVATED,
        g = (0, l.Z)(s, u, 'GuildPowerupCardBodyFooter');
    return (
        (null == (t = _.sourceEntitlement) ? void 0 : t.ends_at) != null
            ? (i = {
                  type: 'expiring',
                  expiringAt: _.sourceEntitlement.ends_at
              })
            : g && null != u.storeRemovalDate
              ? (i = {
                    type: 'removing',
                    removingAt: u.storeRemovalDate
                })
              : _.type === p.A3.LEVEL_ACTIVATED
                ? (i = {
                      type: 'active',
                      statusText: f.intl.formatToPlainString(m.default.WRRYUV, { perkName: null != (o = null == (n = _.sourcePowerup) ? void 0 : n.title) ? o : f.intl.string(f.t.BfF6EB) })
                  })
                : _.type === p.A3.POWERUP_ACTIVATED &&
                  (i = {
                      type: 'active',
                      statusText: f.intl.string(m.default.FFLkm5)
                  }),
        (0, r.jsx)(c.uf, {
            status: i,
            cost: x ? u.cost : void 0,
            className: d
        })
    );
}
function x(e) {
    var t;
    let { guildId: n, powerup: m, badge: f, className: _, onHover: x, children: g } = e,
        v = (0, s.Z)(n),
        b = (0, a.Z)(n, m),
        j = b.type !== p.A3.INACTIVE,
        h = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        E = (0, l.Z)(n, m, 'GuildPowerupCard'),
        C = o.useRef(null),
        { onShowMore: I } = (0, d.ZP)(n, m),
        [N, O] = o.useState(!1),
        w = (0, i.O)(O, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: m.title,
                isActive: j,
                isWarning: h,
                badge: f,
                canRollback: E,
                onClick: I,
                onMouseOver: () => (null == x ? void 0 : x(!0)),
                onMouseLeave: () => (null == x ? void 0 : x(!1)),
                className: _,
                ref: (e) => {
                    ((C.current = e), (w.current = e));
                },
                children: g
            }),
            !E &&
                v &&
                (0, r.jsx)(u.Z, {
                    powerup: m,
                    targetRef: C,
                    isCardVisible: N
                })
        ]
    });
}
