n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(100527),
    s = n(906732),
    l = n(26033),
    c = n(960870),
    u = n(510659),
    d = n(287954),
    f = n(660579),
    p = n(652853),
    _ = n(64621),
    h = n(382405),
    m = n(386019),
    g = n(228168),
    E = n(481736);
function v(e) {
    let { user: t, entry: n, profileGuildId: i, className: v, onClose: b, hideContextMenu: y = !1 } = e,
        { analyticsLocations: O } = (0, s.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: S } = (0, p.z)(),
        { interactionSource: I, interactionSourceId: T } = (0, u.Xo)(),
        N = (0, c.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: O
        });
    return null != S && (0, l.Rh)(n)
        ? (0, r.jsx)(s.Gt, {
              value: O,
              children: (0, r.jsx)(_.Z, {
                  sourceType: g.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(d.Z, {
                      user: t,
                      guildId: i,
                      profileType: S,
                      sourceId: n.id,
                      entry: n,
                      onAction: N,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(f.Z, {
                              user: t,
                              className: E.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: g.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: y
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(m.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: b,
                                            children: e
                                        }),
                              children: (0, r.jsx)(h.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: b,
                                  className: o()(v, { [E.hoisted]: I === g.n_.ACTIVITY && T === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
