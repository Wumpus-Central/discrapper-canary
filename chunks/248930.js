t.d(n, { Z: () => x });
var l = t(255367),
    r = t(73800),
    i = t(120356),
    o = t.n(i),
    s = t(100527),
    a = t(906732),
    c = t(26033),
    u = t(960870),
    d = t(510659),
    f = t(287954),
    p = t(660579),
    g = t(652853),
    v = t(64621),
    j = t(382405),
    h = t(386019),
    m = t(228168),
    b = t(227832);
function x(e) {
    let { user: n, entry: t, profileGuildId: i, className: x, onClose: O, hideContextMenu: y = !1 } = e,
        Z = r.useRef(null),
        { analyticsLocations: I } = (0, a.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, g.z)(),
        { interactionSource: E, interactionSourceId: S } = (0, d.Xo)(),
        T = (0, u.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: I
        });
    return null != P && (0, c.Rh)(t)
        ? (0, l.jsx)(a.Gt, {
              value: I,
              children: (0, l.jsx)(v.Z, {
                  targetElementRef: Z,
                  sourceType: m.n_.ACTIVITY,
                  user: n,
                  children: (0, l.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      themeType: P,
                      sourceId: t.id,
                      entry: t,
                      onAction: T,
                      sourceType: m.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(p.Z, {
                              ref: Z,
                              user: n,
                              className: b.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: T,
                              onShowToolbar: () => T({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: y
                                  ? void 0
                                  : (e) =>
                                        (0, l.jsx)(h.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: O,
                                            children: e
                                        }),
                              children: (0, l.jsx)(j.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: O,
                                  className: o()(x, { [b.hoisted]: E === m.n_.ACTIVITY && S === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
