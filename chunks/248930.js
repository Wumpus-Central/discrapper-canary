n.d(t, { Z: () => x });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(100527),
    c = n(906732),
    s = n(26033),
    d = n(960870),
    u = n(510659),
    f = n(287954),
    p = n(660579),
    m = n(652853),
    g = n(64621),
    b = n(382405),
    h = n(386019),
    j = n(228168),
    y = n(227832);
function x(e) {
    let { user: t, entry: n, profileGuildId: i, className: x, onClose: v, hideContextMenu: O = !1 } = e,
        _ = l.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, m.z)(),
        { interactionSource: E, interactionSourceId: Z } = (0, u.Xo)(),
        N = (0, d.Z)({
            display: "recent",
            user: t,
            entry: n,
            analyticsLocations: I,
        });
    return null != P && (0, s.Rh)(n)
        ? (0, r.jsx)(c.Gt, {
              value: I,
              children: (0, r.jsx)(g.Z, {
                  targetElementRef: _,
                  sourceType: j.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: i,
                      themeType: P,
                      sourceId: n.id,
                      entry: n,
                      onAction: N,
                      sourceType: j.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(p.Z, {
                              ref: _,
                              user: t,
                              className: y.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: j.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: "HOVER_ACTIVITY_CARD" }),
                              renderMoreButtonPopout: O
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(h.Z, {
                                            display: "recent",
                                            entry: n,
                                            user: t,
                                            onClose: v,
                                            children: e,
                                        }),
                              children: (0, r.jsx)(b.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: v,
                                  className: o()(x, { [y.hoisted]: E === j.n_.ACTIVITY && Z === n.id }),
                              }),
                          }),
                  }),
              }),
          })
        : null;
}
