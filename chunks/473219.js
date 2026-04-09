l.d(t, { W: () => y });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(688810),
    o = l(512213),
    s = l(637193),
    d = l(713517),
    c = l(919395),
    u = l(287809),
    p = l(84540),
    m = l(930349),
    h = l(985018),
    x = l(432856);
function b(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        u = null != l,
        b = n.useRef(null),
        { isHoveringOrFocusing: y } = (0, d.A)(b),
        { guildNameplate: f, pendingNameplate: g } = (0, c.rv)(t, l ?? void 0),
        v = (0, c.lw)({ pendingValue: g, userValue: t.collectibles?.nameplate, guildValue: f, guildId: l ?? void 0 }),
        _ = void 0 !== g,
        E = u ? f : t.collectibles?.nameplate,
        C = n.useCallback(() => {
            (0, s.p)({ analyticsLocations: r, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [r, l]),
        j = u && t.collectibles?.nameplate != null,
        S =
            null != v && (_ ? null != g : null != E)
                ? {
                      onClick: () => (0, p.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: h.intl.string(j ? h.t.neYqhR : h.t["9zwziY"]),
                  }
                : void 0,
        T = (0, a.jsx)("div", {
            className: x.M,
            "aria-hidden": !0,
            children: (0, a.jsx)(o.A, {
                user: t,
                guildId: l ?? void 0,
                nameplate: v,
                showPlaceholderUser: null == v || !y,
            }),
        });
    return (0, a.jsx)("div", {
        ref: b,
        children:
            null == v
                ? (0, a.jsx)(m.kL, {
                      variant: "bar",
                      onClick: C,
                      accessibleLabel: h.intl.string(h.t.BwdeM1),
                      children: T,
                  })
                : (0, a.jsx)(m.NW, {
                      variant: "bar",
                      onClick: C,
                      accessibleLabel: h.intl.string(h.t.BwdeM1),
                      deleteButtonConfig: S,
                      children: T,
                  }),
    });
}
function y(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([u.default], () => u.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(b, { user: l, guildId: t });
}
