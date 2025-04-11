t.d(n, { Z: () => j });
var r = t(200651);
t(192379);
var o = t(120356),
    i = t.n(o),
    l = t(100527),
    s = t(906732),
    c = t(26033),
    a = t(960870),
    d = t(510659),
    u = t(287954),
    f = t(660579),
    p = t(652853),
    b = t(64621),
    m = t(382405),
    I = t(386019),
    g = t(228168),
    y = t(227832);
function j(e) {
    let { user: n, entry: t, profileGuildId: o, className: j, onClose: h, hideContextMenu: v = !1 } = e,
        { analyticsLocations: x } = (0, s.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: _ } = (0, p.z)(),
        { interactionSource: O, interactionSourceId: Z } = (0, d.Xo)(),
        N = (0, a.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: x
        });
    return null != _ && (0, c.Rh)(t)
        ? (0, r.jsx)(s.Gt, {
              value: x,
              children: (0, r.jsx)(b.Z, {
                  sourceType: g.n_.ACTIVITY,
                  user: n,
                  children: (0, r.jsx)(u.Z, {
                      user: n,
                      guildId: o,
                      profileType: _,
                      sourceId: t.id,
                      entry: t,
                      onAction: N,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(f.Z, {
                              user: n,
                              className: y.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: v
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(I.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: h,
                                            children: e
                                        }),
                              children: (0, r.jsx)(m.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: h,
                                  className: i()(j, { [y.hoisted]: O === g.n_.ACTIVITY && Z === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
