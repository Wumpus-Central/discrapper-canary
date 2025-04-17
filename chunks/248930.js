t.d(n, { Z: () => j });
var o = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    s = t(100527),
    c = t(906732),
    a = t(26033),
    d = t(960870),
    u = t(510659),
    f = t(287954),
    p = t(660579),
    b = t(652853),
    m = t(64621),
    I = t(382405),
    h = t(386019),
    g = t(228168),
    y = t(227832);
function j(e) {
    let { user: n, entry: t, profileGuildId: i, className: j, onClose: v, hideContextMenu: x = !1 } = e,
        _ = r.useRef(null),
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: O } = (0, b.z)(),
        { interactionSource: N, interactionSourceId: E } = (0, u.Xo)(),
        P = (0, d.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: Z
        });
    return null != O && (0, a.Rh)(t)
        ? (0, o.jsx)(c.Gt, {
              value: Z,
              children: (0, o.jsx)(m.Z, {
                  targetElementRef: _,
                  sourceType: g.n_.ACTIVITY,
                  user: n,
                  children: (0, o.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      profileType: O,
                      sourceId: t.id,
                      entry: t,
                      onAction: P,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, o.jsx)(p.Z, {
                              ref: _,
                              user: n,
                              className: y.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: P,
                              onShowToolbar: () => P({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: x
                                  ? void 0
                                  : (e) =>
                                        (0, o.jsx)(h.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: v,
                                            children: e
                                        }),
                              children: (0, o.jsx)(I.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: v,
                                  className: l()(j, { [y.hoisted]: N === g.n_.ACTIVITY && E === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
