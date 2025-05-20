t.d(n, { Z: () => x });
var l = t(255367),
    r = t(73800),
    i = t(120356),
    o = t.n(i),
    s = t(100527),
    c = t(906732),
    u = t(26033),
    a = t(960870),
    d = t(510659),
    f = t(287954),
    p = t(660579),
    g = t(652853),
    v = t(64621),
    h = t(382405),
    j = t(386019),
    m = t(228168),
    b = t(227832);
function x(e) {
    let { user: n, entry: t, profileGuildId: i, className: x, onClose: Z, hideContextMenu: O = !1 } = e,
        y = r.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, g.z)(),
        { interactionSource: E, interactionSourceId: T } = (0, d.Xo)(),
        S = (0, a.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: I
        });
    return null != P && (0, u.Rh)(t)
        ? (0, l.jsx)(c.Gt, {
              value: I,
              children: (0, l.jsx)(v.Z, {
                  targetElementRef: y,
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
                              ref: y,
                              user: n,
                              className: b.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: S,
                              onShowToolbar: () => S({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: O
                                  ? void 0
                                  : (e) =>
                                        (0, l.jsx)(j.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: Z,
                                            children: e
                                        }),
                              children: (0, l.jsx)(h.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: Z,
                                  className: o()(x, { [b.hoisted]: E === m.n_.ACTIVITY && T === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
