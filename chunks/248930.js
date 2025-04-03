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
    y = t(382405),
    m = t(386019),
    g = t(228168),
    I = t(227832);
function j(e) {
    let { user: n, entry: t, profileGuildId: o, className: j, onClose: v, hideContextMenu: h = !1 } = e,
        { analyticsLocations: _ } = (0, s.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: x } = (0, p.z)(),
        { interactionSource: O, interactionSourceId: Z } = (0, d.Xo)(),
        P = (0, a.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: _
        });
    return null != x && (0, c.Rh)(t)
        ? (0, r.jsx)(s.Gt, {
              value: _,
              children: (0, r.jsx)(b.Z, {
                  sourceType: g.n_.ACTIVITY,
                  user: n,
                  children: (0, r.jsx)(u.Z, {
                      user: n,
                      guildId: o,
                      profileType: x,
                      sourceId: t.id,
                      entry: t,
                      onAction: P,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(f.Z, {
                              user: n,
                              className: I.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: P,
                              onShowToolbar: () => P({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: h
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(m.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: v,
                                            children: e
                                        }),
                              children: (0, r.jsx)(y.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: v,
                                  className: i()(j, { [I.hoisted]: O === g.n_.ACTIVITY && Z === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
