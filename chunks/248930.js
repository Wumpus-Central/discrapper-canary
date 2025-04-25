n.d(t, { Z: () => h });
var r = n(200651),
    o = n(192379),
    l = n(120356),
    i = n.n(l),
    u = n(100527),
    c = n(906732),
    s = n(26033),
    a = n(960870),
    d = n(510659),
    f = n(287954),
    b = n(660579),
    p = n(652853),
    O = n(64621),
    y = n(382405),
    g = n(386019),
    j = n(228168),
    v = n(227832);
function h(e) {
    let { user: t, entry: n, profileGuildId: l, className: h, onClose: m, hideContextMenu: P = !1 } = e,
        x = o.useRef(null),
        { analyticsLocations: Z } = (0, c.ZP)(u.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: w } = (0, p.z)(),
        { interactionSource: E, interactionSourceId: R } = (0, d.Xo)(),
        I = (0, a.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: Z
        });
    return null != w && (0, s.Rh)(n)
        ? (0, r.jsx)(c.Gt, {
              value: Z,
              children: (0, r.jsx)(O.Z, {
                  targetElementRef: x,
                  sourceType: j.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: l,
                      themeType: w,
                      sourceId: n.id,
                      entry: n,
                      onAction: I,
                      sourceType: j.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(b.Z, {
                              ref: x,
                              user: t,
                              className: v.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: j.n_.ACTIVITY,
                              onAction: I,
                              onShowToolbar: () => I({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: P
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(g.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: m,
                                            children: e
                                        }),
                              children: (0, r.jsx)(y.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: m,
                                  className: i()(h, { [v.hoisted]: E === j.n_.ACTIVITY && R === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
