n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    u = n(100527),
    c = n(906732),
    s = n(26033),
    a = n(960870),
    d = n(510659),
    f = n(287954),
    b = n(660579),
    p = n(652853),
    O = n(64621),
    g = n(382405),
    y = n(386019),
    v = n(228168),
    j = n(227832);
function h(e) {
    let { user: t, entry: n, profileGuildId: o, className: h, onClose: m, hideContextMenu: P = !1 } = e,
        Z = l.useRef(null),
        { analyticsLocations: w } = (0, c.ZP)(u.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: R } = (0, p.z)(),
        { interactionSource: x, interactionSourceId: E } = (0, d.Xo)(),
        C = (0, a.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: w
        });
    return null != R && (0, s.Rh)(n)
        ? (0, r.jsx)(c.Gt, {
              value: w,
              children: (0, r.jsx)(O.Z, {
                  targetElementRef: Z,
                  sourceType: v.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: o,
                      themeType: R,
                      sourceId: n.id,
                      entry: n,
                      onAction: C,
                      sourceType: v.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(b.Z, {
                              ref: Z,
                              user: t,
                              className: j.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: v.n_.ACTIVITY,
                              onAction: C,
                              onShowToolbar: () => C({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: P
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(y.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: m,
                                            children: e
                                        }),
                              children: (0, r.jsx)(g.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: m,
                                  className: i()(h, { [j.hoisted]: x === v.n_.ACTIVITY && E === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
