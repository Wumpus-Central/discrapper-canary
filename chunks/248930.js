n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(100527),
    c = n(906732),
    s = n(26033),
    d = n(960870),
    u = n(510659),
    f = n(287954),
    p = n(660579),
    m = n(652853),
    g = n(64621),
    b = n(382405),
    j = n(386019),
    y = n(228168),
    O = n(704543);
function h(e) {
    let { user: t, entry: n, profileGuildId: l, className: h, onClose: x, hideContextMenu: v = !1 } = e,
        _ = i.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, m.z)(),
        { interactionSource: E, interactionSourceId: T } = (0, u.Xo)(),
        Z = (0, d.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: I,
        });
    return null != P && (0, s.Rh)(n)
        ? (0, r.jsx)(c.Gt, {
              value: I,
              children: (0, r.jsx)(g.Z, {
                  targetElementRef: _,
                  sourceType: y.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: l,
                      themeType: P,
                      sourceId: n.id,
                      entry: n,
                      onAction: Z,
                      sourceType: y.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(p.Z, {
                              ref: _,
                              user: t,
                              className: O.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: y.n_.ACTIVITY,
                              onAction: Z,
                              onShowToolbar: () => Z({ action: "HOVER_ACTIVITY_CARD" }),
                              renderMoreButtonPopout: v
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(j.Z, {
                                            display: "recent",
                                            entry: n,
                                            user: t,
                                            onClose: x,
                                            children: e,
                                        }),
                              children: (0, r.jsx)(b.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: x,
                                  className: o()(h, { [O.hoisted]: E === y.n_.ACTIVITY && T === n.id }),
                              }),
                          }),
                  }),
              }),
          })
        : null;
}
