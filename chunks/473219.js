l.d(t, { W: () => b });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(688810),
    o = l(512213),
    s = l(637193),
    u = l(919395),
    d = l(287809),
    c = l(84540),
    p = l(930349),
    m = l(985018),
    h = l(432856);
function x(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        d = null != l,
        { guildNameplate: x, pendingNameplate: b } = (0, u.rv)(t, l ?? void 0),
        f = (0, u.lw)({ pendingValue: b, userValue: t.collectibles?.nameplate, guildValue: x, guildId: l ?? void 0 }),
        y = void 0 !== b,
        g = d ? x : t.collectibles?.nameplate,
        v = n.useCallback(() => {
            (0, s.p)({ analyticsLocations: r, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [r, l]);
    if (null == f)
        return (0, a.jsx)(p.k, {
            variant: "bar",
            onClick: v,
            accessibleLabel: m.intl.string(m.t.BwdeM1),
            children: (0, a.jsx)("div", {
                className: h.M,
                "aria-hidden": !0,
                children: (0, a.jsx)(o.A, { user: t, guildId: l ?? void 0, nameplate: f }),
            }),
        });
    let E = y ? null != b : null != g,
        _ = d && t.collectibles?.nameplate != null,
        C = E
            ? {
                  onClick: () => (0, c.p)({ guildId: l ?? void 0, nameplate: null }),
                  type: _ ? "reset" : "remove",
                  accessibleLabel: m.intl.string(_ ? m.t.GaEG4t : m.t["2A+piL"]),
              }
            : void 0;
    return (0, a.jsx)(p.N, {
        variant: "bar",
        onClick: v,
        accessibleLabel: m.intl.string(m.t.BwdeM1),
        deleteButtonConfig: C,
        children: (0, a.jsx)("div", {
            className: h.M,
            "aria-hidden": !0,
            children: (0, a.jsx)(o.A, { user: t, guildId: l ?? void 0, nameplate: f }),
        }),
    });
}
function b(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([d.default], () => d.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(x, { user: l, guildId: t });
}
