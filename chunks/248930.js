n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(100527),
    o = n(906732),
    l = n(26033),
    u = n(960870),
    c = n(510659),
    d = n(287954),
    f = n(660579),
    _ = n(652853),
    p = n(64621),
    h = n(382405),
    m = n(386019),
    g = n(228168),
    E = n(249942);
function v(e) {
    let { user: t, entry: n, profileGuildId: r, className: v, onClose: y, hideContextMenu: I = !1 } = e,
        { analyticsLocations: T } = (0, o.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: b } = (0, _.z)(),
        { interactionSource: S, interactionSourceId: A } = (0, c.Xo)(),
        N = (0, u.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: T
        });
    return null != b && (0, l.Rh)(n)
        ? (0, i.jsx)(o.Gt, {
              value: T,
              children: (0, i.jsx)(p.Z, {
                  sourceType: g.n_.ACTIVITY,
                  user: t,
                  children: (0, i.jsx)(d.Z, {
                      user: t,
                      guildId: r,
                      profileType: b,
                      sourceId: n.id,
                      entry: n,
                      onAction: N,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, i.jsx)(f.Z, {
                              user: t,
                              className: E.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: I
                                  ? void 0
                                  : (e) =>
                                        (0, i.jsx)(m.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: y,
                                            children: e
                                        }),
                              children: (0, i.jsx)(h.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: y,
                                  className: a()(v, { [E.hoisted]: S === g.n_.ACTIVITY && A === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
