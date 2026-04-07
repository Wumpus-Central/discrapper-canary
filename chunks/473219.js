l.d(t, { W: () => b });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(688810),
    o = l(512213),
    s = l(637193),
    d = l(919395),
    c = l(287809),
    u = l(84540),
    p = l(930349),
    m = l(985018),
    h = l(432856);
function x(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        c = null != l,
        { guildNameplate: x, pendingNameplate: b } = (0, d.rv)(t, l ?? void 0),
        y = (0, d.lw)({ pendingValue: b, userValue: t.collectibles?.nameplate, guildValue: x, guildId: l ?? void 0 }),
        f = void 0 !== b,
        g = c ? x : t.collectibles?.nameplate,
        v = n.useCallback(() => {
            (0, s.p)({ analyticsLocations: r, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [r, l]);
    if (null == y)
        return (0, a.jsx)(p.kL, {
            variant: "bar",
            onClick: v,
            accessibleLabel: m.intl.string(m.t.BwdeM1),
            children: (0, a.jsx)("div", {
                className: h.M,
                "aria-hidden": !0,
                children: (0, a.jsx)(o.A, { user: t, guildId: l ?? void 0, nameplate: y }),
            }),
        });
    let _ = f ? null != b : null != g,
        E = c && t.collectibles?.nameplate != null,
        C = _
            ? {
                  onClick: () => (0, u.p)({ guildId: l ?? void 0, nameplate: null }),
                  type: E ? "reset" : "remove",
                  accessibleLabel: m.intl.string(E ? m.t.neYqhR : m.t["9zwziY"]),
              }
            : void 0;
    return (0, a.jsx)(p.NW, {
        variant: "bar",
        onClick: v,
        accessibleLabel: m.intl.string(m.t.BwdeM1),
        deleteButtonConfig: C,
        children: (0, a.jsx)("div", {
            className: h.M,
            "aria-hidden": !0,
            children: (0, a.jsx)(o.A, { user: t, guildId: l ?? void 0, nameplate: y }),
        }),
    });
}
function b(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([c.default], () => c.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(x, { user: l, guildId: t });
}
