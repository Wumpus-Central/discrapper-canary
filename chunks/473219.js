l.d(t, { A: () => h });
var a = l(627968),
    n = l(64700),
    r = l(688810),
    i = l(512213),
    o = l(637193),
    s = l(713517),
    d = l(919395),
    c = l(84540),
    u = l(930349),
    p = l(985018),
    m = l(432856);
function h(e) {
    let { user: t, guildId: l, disabled: h } = e,
        { analyticsLocations: x } = (0, r.Ay)(),
        b = null != l,
        y = n.useRef(null),
        { isHoveringOrFocusing: f } = (0, s.A)(y),
        { guildNameplate: g, pendingNameplate: v } = (0, d.rv)(t, l ?? void 0),
        _ = (0, d.lw)({ pendingValue: v, userValue: t.collectibles?.nameplate, guildValue: g, guildId: l ?? void 0 }),
        E = void 0 !== v,
        C = b ? g : t.collectibles?.nameplate,
        j = n.useCallback(() => {
            (0, o.p)({ analyticsLocations: x, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [x, l]),
        S = b && t.collectibles?.nameplate != null,
        T =
            null != _ && (E ? null != v : null != C)
                ? {
                      onClick: () => (0, c.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: S ? "reset" : "remove",
                      accessibleLabel: p.intl.string(S ? p.t.neYqhR : p.t["9zwziY"]),
                  }
                : void 0,
        A = (0, a.jsx)("div", {
            className: m.M,
            "aria-hidden": !0,
            children: (0, a.jsx)(i.A, {
                user: t,
                guildId: l ?? void 0,
                nameplate: _,
                showPlaceholderUser: null == _ || !f || h,
            }),
        });
    return (0, a.jsx)("div", {
        ref: y,
        children:
            null == _
                ? (0, a.jsx)(u.kL, {
                      variant: "bar",
                      onClick: j,
                      accessibleLabel: p.intl.string(p.t.BwdeM1),
                      disabled: h,
                      children: A,
                  })
                : (0, a.jsx)(u.NW, {
                      variant: "bar",
                      onClick: j,
                      accessibleLabel: p.intl.string(p.t.BwdeM1),
                      deleteButtonConfig: T,
                      disabled: h,
                      children: A,
                  }),
    });
}
