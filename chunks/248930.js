t.d(n, { Z: () => O });
var l = t(200651),
    r = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(100527),
    u = t(906732),
    a = t(26033),
    c = t(960870),
    d = t(510659),
    f = t(287954),
    p = t(660579),
    g = t(652853),
    b = t(64621),
    v = t(382405),
    h = t(386019),
    j = t(228168),
    m = t(227832);
function O(e) {
    let { user: n, entry: t, profileGuildId: i, className: O, onClose: y, hideContextMenu: Z = !1 } = e,
        I = r.useRef(null),
        { analyticsLocations: x } = (0, u.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, g.z)(),
        { interactionSource: E, interactionSourceId: T } = (0, d.Xo)(),
        N = (0, c.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: x
        });
    return null != P && (0, a.Rh)(t)
        ? (0, l.jsx)(u.Gt, {
              value: x,
              children: (0, l.jsx)(b.Z, {
                  targetElementRef: I,
                  sourceType: j.n_.ACTIVITY,
                  user: n,
                  children: (0, l.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      themeType: P,
                      sourceId: t.id,
                      entry: t,
                      onAction: N,
                      sourceType: j.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(p.Z, {
                              ref: I,
                              user: n,
                              className: m.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: j.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: Z
                                  ? void 0
                                  : (e) =>
                                        (0, l.jsx)(h.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: y,
                                            children: e
                                        }),
                              children: (0, l.jsx)(v.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: y,
                                  className: o()(O, { [m.hoisted]: E === j.n_.ACTIVITY && T === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
