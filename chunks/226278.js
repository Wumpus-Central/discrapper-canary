n.d(t, {
    Z: () => x,
    g: () => g,
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
    p = n(535396),
    f = n(93841),
    m = n(388032);
function g(e) {
    var t, n, o;
    let i,
        { guildId: s, powerup: u, className: d } = e,
        g = (0, a.Z)(s, u),
        x = g.type !== p.A3.LEVEL_ACTIVATED,
        _ = (0, l.Z)(s, u, "GuildPowerupCardBodyFooter");
    return (
        (null == (t = g.sourceEntitlement) ? void 0 : t.ends_at) != null
            ? (i = {
                  type: "expiring",
                  expiringAt: g.sourceEntitlement.ends_at,
              })
            : _ && null != u.storeRemovalDate
              ? (i = {
                    type: "removing",
                    removingAt: u.storeRemovalDate,
                })
              : g.type === p.A3.LEVEL_ACTIVATED
                ? (i = {
                      type: "active",
                      statusText: m.intl.formatToPlainString(f.default.WRRYUV, {
                          perkName:
                              null != (o = null == (n = g.sourcePowerup) ? void 0 : n.title)
                                  ? o
                                  : m.intl.string(m.t.BfF6EB),
                      }),
                  })
                : g.type === p.A3.POWERUP_ACTIVATED &&
                  (i = {
                      type: "active",
                      statusText: m.intl.string(f.default.FFLkm5),
                  }),
        (0, r.jsx)(c.uf, {
            status: i,
            cost: x ? u.cost : void 0,
            className: d,
        })
    );
}
function x(e) {
    var t;
    let { guildId: n, powerup: f, badge: m, className: g, onHover: x, children: _ } = e,
        v = (0, s.Z)(n),
        b = (0, a.Z)(n, f),
        j = b.type !== p.A3.INACTIVE,
        h = (null == (t = b.sourceEntitlement) ? void 0 : t.ends_at) != null,
        E = (0, l.Z)(n, f, "GuildPowerupCard"),
        C = o.useRef(null),
        { onShowMore: I } = (0, d.ZP)(n, f),
        [O, y] = o.useState(!1),
        P = (0, i.O)(y, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.aB, {
                label: f.title,
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
                children: _,
            }),
            !E &&
                v &&
                (0, r.jsx)(u.Z, {
                    powerup: f,
                    targetRef: C,
                    isCardVisible: O,
                }),
        ],
    });
}
