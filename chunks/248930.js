t.d(n, { Z: () => x });
var l = t(255367),
    r = t(73800),
    i = t(120356),
    o = t.n(i),
    s = t(100527),
    c = t(906732),
    a = t(26033),
    u = t(960870),
    d = t(510659),
    f = t(287954),
    p = t(660579),
    g = t(652853),
    j = t(64621),
    v = t(382405),
    h = t(386019),
    m = t(228168),
    b = t(227832);
function x(e) {
    let { user: n, entry: t, profileGuildId: i, className: x, onClose: y, hideContextMenu: O = !1 } = e,
        Z = r.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, g.z)(),
        { interactionSource: E, interactionSourceId: T } = (0, d.Xo)(),
        S = (0, u.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: I
        });
    return null != P && (0, a.Rh)(t)
        ? (0, l.jsx)(c.Gt, {
              value: I,
              children: (0, l.jsx)(j.Z, {
                  targetElementRef: Z,
                  sourceType: m.n_.ACTIVITY,
                  user: n,
                  children: (0, l.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      themeType: P,
                      sourceId: t.id,
                      entry: t,
                      onAction: S,
                      sourceType: m.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(p.Z, {
                              ref: Z,
                              user: n,
                              className: b.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: S,
                              onShowToolbar: () => S({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: O
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
                                  className: o()(x, { [b.hoisted]: E === m.n_.ACTIVITY && T === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
