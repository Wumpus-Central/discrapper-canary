n.d(t, { Z: () => b });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(100527),
    c = n(906732),
    a = n(26033),
    d = n(960870),
    u = n(510659),
    f = n(287954),
    p = n(660579),
    h = n(652853),
    j = n(64621),
    g = n(382405),
    v = n(386019),
    m = n(228168),
    x = n(227832);
function b(e) {
    let { user: t, entry: n, profileGuildId: i, className: b, onClose: O, hideContextMenu: Z = !1 } = e,
        y = r.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(o.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, h.z)(),
        { interactionSource: E, interactionSourceId: N } = (0, u.Xo)(),
        T = (0, d.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: I
        });
    return null != P && (0, a.Rh)(n)
        ? (0, l.jsx)(c.Gt, {
              value: I,
              children: (0, l.jsx)(j.Z, {
                  targetElementRef: y,
                  sourceType: m.n_.ACTIVITY,
                  user: t,
                  children: (0, l.jsx)(f.Z, {
                      user: t,
                      guildId: i,
                      themeType: P,
                      sourceId: n.id,
                      entry: n,
                      onAction: T,
                      sourceType: m.n_.ACTIVITY,
                      children: () =>
                          (0, l.jsx)(p.Z, {
                              ref: y,
                              user: t,
                              className: x.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: m.n_.ACTIVITY,
                              onAction: T,
                              onShowToolbar: () => T({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: Z
                                  ? void 0
                                  : (e) =>
                                        (0, l.jsx)(v.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: O,
                                            children: e
                                        }),
                              children: (0, l.jsx)(g.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: O,
                                  className: s()(b, { [x.hoisted]: E === m.n_.ACTIVITY && N === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
