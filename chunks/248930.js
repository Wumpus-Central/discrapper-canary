n.d(t, { Z: () => j });
var r = n(951288),
    o = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(100527),
    c = n(906732),
    s = n(26033),
    d = n(960870),
    u = n(510659),
    f = n(287954),
    p = n(660579),
    m = n(652853),
    b = n(64621),
    g = n(382405),
    h = n(386019),
    x = n(228168),
    _ = n(704543);
function j(e) {
    let { user: t, entry: n, profileGuildId: i, className: j, onClose: v, hideContextMenu: y = !1 } = e,
        I = o.useRef(null),
        { analyticsLocations: O } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: Z } = (0, m.z)(),
        { interactionSource: P, interactionSourceId: T } = (0, u.Xo)(),
        C = (0, d.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: O,
        });
    return null != Z && (0, s.Rh)(n)
        ? (0, r.jsx)(c.Gt, {
              value: O,
              children: (0, r.jsx)(b.Z, {
                  targetElementRef: I,
                  sourceType: x.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: i,
                      themeType: Z,
                      sourceId: n.id,
                      entry: n,
                      onAction: C,
                      sourceType: x.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(p.Z, {
                              ref: I,
                              user: t,
                              className: _.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: x.n_.ACTIVITY,
                              onAction: C,
                              onShowToolbar: () => C({ action: "HOVER_ACTIVITY_CARD" }),
                              renderMoreButtonPopout: y
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(h.Z, {
                                            display: "recent",
                                            entry: n,
                                            user: t,
                                            onClose: v,
                                            children: e,
                                        }),
                              children: (0, r.jsx)(g.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: v,
                                  className: l()(j, { [_.hoisted]: P === x.n_.ACTIVITY && T === n.id }),
                              }),
                          }),
                  }),
              }),
          })
        : null;
}
