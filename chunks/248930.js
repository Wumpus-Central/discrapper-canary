t.d(n, { Z: () => x });
var l = t(200651),
    r = t(192379),
    i = t(120356),
    s = t.n(i),
    o = t(100527),
    a = t(906732),
    c = t(26033),
    d = t(960870),
    u = t(510659),
    f = t(287954),
    p = t(660579),
    h = t(652853),
    v = t(64621),
    g = t(382405),
    j = t(386019),
    m = t(228168),
    b = t(227832);
function x(e) {
    let { user: n, entry: t, profileGuildId: i, className: x, onClose: Z, hideContextMenu: O = !1 } = e,
        y = r.useRef(null),
        { analyticsLocations: I } = (0, a.ZP)(o.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, h.z)(),
        { interactionSource: E, interactionSourceId: N } = (0, u.Xo)(),
        T = (0, d.Z)({
            display: 'recent',
            user: n,
            entry: t,
            analyticsLocations: I
        });
    return null != P && (0, c.Rh)(t)
        ? (0, l.jsx)(a.Gt, {
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
                      onAction: T,
                      sourceType: m.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(p.Z, {
                              ref: y,
                              user: n,
                              className: b.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: T,
                              onShowToolbar: () => T({ action: 'HOVER_ACTIVITY_CARD' }),
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
                              children: (0, l.jsx)(g.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: Z,
                                  className: s()(x, { [b.hoisted]: E === m.n_.ACTIVITY && N === t.id })
                              })
                          })
                  })
              })
          })
        : null;
}
