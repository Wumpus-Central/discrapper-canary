t.d(n, { Z: () => Z });
var l = t(200651),
    r = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(100527),
    a = t(906732),
    d = t(26033),
    c = t(960870),
    u = t(510659),
    f = t(287954),
    h = t(660579),
    p = t(652853),
    g = t(64621),
    j = t(382405),
    v = t(386019),
    m = t(228168),
    x = t(227832);
function Z(e) {
    let { user: n, entry: t, profileGuildId: i, className: Z, onClose: b, hideContextMenu: O = !1 } = e,
        y = r.useRef(null),
        { analyticsLocations: I } = (0, a.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: E } = (0, p.z)(),
        { interactionSource: P, interactionSourceId: T } = (0, u.Xo)(),
        N = (0, c.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: I
        });
    return null != E && (0, d.Rh)(t)
        ? (0, l.jsx)(a.Gt, {
              value: I,
              children: (0, l.jsx)(g.Z, {
                  targetElementRef: y,
                  sourceType: m.n_.ACTIVITY,
                  user: n,
                  children: (0, l.jsx)(f.Z, {
                      user: n,
                      guildId: i,
                      themeType: E,
                      sourceId: t.id,
                      entry: t,
                      onAction: N,
                      sourceType: m.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(h.Z, {
                              ref: y,
                              user: n,
                              className: x.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: O
                                  ? void 0
                                  : (e) =>
                                        (0, l.jsx)(v.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: n,
                                            onClose: b,
                                            children: e
                                        }),
                              children: (0, l.jsx)(j.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: b,
                                  className: o()(Z, { [x.hoisted]: P === m.n_.ACTIVITY && T === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
