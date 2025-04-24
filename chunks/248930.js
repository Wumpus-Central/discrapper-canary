t.d(n, { Z: () => j });
var i = t(200651),
    o = t(192379),
    l = t(120356),
    r = t.n(l),
    s = t(100527),
    c = t(906732),
    a = t(26033),
    d = t(960870),
    u = t(510659),
    f = t(287954),
    p = t(660579),
    m = t(652853),
    h = t(64621),
    I = t(382405),
    x = t(386019),
    b = t(228168),
    _ = t(227832);
function j(e) {
    let { user: n, entry: t, profileGuildId: l, className: j, onClose: v, hideContextMenu: g = !1 } = e,
        Z = o.useRef(null),
        { analyticsLocations: y } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: A } = (0, m.z)(),
        { interactionSource: T, interactionSourceId: O } = (0, u.Xo)(),
        N = (0, d.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: y
        });
    return null != A && (0, a.Rh)(t)
        ? (0, i.jsx)(c.Gt, {
              value: y,
              children: (0, i.jsx)(h.Z, {
                  targetElementRef: Z,
                  sourceType: b.n_.ACTIVITY,
                  user: n,
                  children: (0, i.jsx)(f.Z, {
                      user: n,
                      guildId: l,
                      themeType: A,
                      sourceId: t.id,
                      entry: t,
                      onAction: N,
                      sourceType: b.n_.ACTIVITY,
                      children: () =>
                          (0, i.jsx)(p.Z, {
                              ref: Z,
                              user: n,
                              className: _.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: b.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: g
                                  ? void 0
                                  : (e) =>
                                        (0, i.jsx)(x.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: v,
                                            children: e
                                        }),
                              children: (0, i.jsx)(I.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: v,
                                  className: r()(j, { [_.hoisted]: T === b.n_.ACTIVITY && O === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
