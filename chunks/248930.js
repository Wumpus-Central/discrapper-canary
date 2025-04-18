t.d(n, { Z: () => j });
var r = t(200651),
    o = t(192379),
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
    h = t(382405),
    I = t(386019),
    g = t(228168),
    y = t(227832);
function j(e) {
    let { user: n, entry: t, profileGuildId: i, className: j, onClose: v, hideContextMenu: x = !1 } = e,
        _ = o.useRef(null),
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: O } = (0, b.z)(),
        { interactionSource: N, interactionSourceId: P } = (0, u.Xo)(),
        E = (0, d.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: Z
        });
    return null != O && (0, a.Rh)(t)
        ? (0, r.jsx)(c.Gt, {
              value: Z,
              children: (0, r.jsx)(m.Z, {
                  targetElementRef: _,
                  sourceType: g.n_.ACTIVITY,
                  user: n,
                  children: (0, r.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      profileType: O,
                      sourceId: t.id,
                      entry: t,
                      onAction: E,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(p.Z, {
                              ref: _,
                              user: n,
                              className: y.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: E,
                              onShowToolbar: () => E({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: x
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(I.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: v,
                                            children: e
                                        }),
                              children: (0, r.jsx)(h.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: v,
                                  className: l()(j, { [y.hoisted]: N === g.n_.ACTIVITY && P === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
