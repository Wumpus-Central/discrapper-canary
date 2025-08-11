n.d(t, { Z: () => y });
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
    m = n(660579),
    p = n(652853),
    g = n(64621),
    b = n(382405),
    j = n(386019),
    h = n(228168),
    x = n(227832);
function y(e) {
    let { user: t, entry: n, profileGuildId: i, className: y, onClose: v, hideContextMenu: O = !1 } = e,
        _ = l.useRef(null),
        { analyticsLocations: I } = (0, c.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, p.z)(),
        { interactionSource: Z, interactionSourceId: N } = (0, u.Xo)(),
        T = (0, d.Z)({
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
                  sourceType: h.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(f.Z, {
                      user: t,
                      guildId: i,
                      themeType: P,
                      sourceId: n.id,
                      entry: n,
                      onAction: T,
                      sourceType: h.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(m.Z, {
                              ref: _,
                              user: t,
                              className: x.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: h.n_.ACTIVITY,
                              onAction: T,
                              onShowToolbar: () => T({ action: "HOVER_ACTIVITY_CARD" }),
                              renderMoreButtonPopout: O
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(j.Z, {
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
                                  className: o()(y, { [x.hoisted]: Z === h.n_.ACTIVITY && N === n.id }),
                              }),
                          }),
                  }),
              }),
          })
        : null;
}
