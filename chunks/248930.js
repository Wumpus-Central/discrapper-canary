t.d(n, { Z: () => v });
var r = t(951288),
    o = t(647438),
    l = t(120356),
    i = t.n(l),
    c = t(100527),
    a = t(906732),
    s = t(26033),
    d = t(960870),
    u = t(510659),
    f = t(287954),
    m = t(660579),
    p = t(652853),
    b = t(64621),
    x = t(382405),
    g = t(386019),
    h = t(228168),
    j = t(704543);
function v(e) {
    let { user: n, entry: t, profileGuildId: l, className: v, onClose: _, hideContextMenu: y = !1 } = e,
        I = o.useRef(null),
        { analyticsLocations: O } = (0, a.ZP)(c.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { themeType: P } = (0, p.z)(),
        { interactionSource: Z, interactionSourceId: T } = (0, u.Xo)(),
        A = (0, d.Z)({
            display: "recent",
            user: n,
            entry: t,
            analyticsLocations: O,
        });
    return null != P && (0, s.Rh)(t)
        ? (0, r.jsx)(a.Gt, {
              value: O,
              children: (0, r.jsx)(b.Z, {
                  targetElementRef: I,
                  sourceType: h.n_.ACTIVITY,
                  user: n,
                  children: (0, r.jsx)(f.Z, {
                      user: n,
                      guildId: l,
                      themeType: P,
                      sourceId: t.id,
                      entry: t,
                      onAction: A,
                      sourceType: h.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(m.Z, {
                              ref: I,
                              user: n,
                              className: j.toolbarContainer,
                              interactionSourceId: t.id,
                              sourceType: h.n_.ACTIVITY,
                              onAction: A,
                              onShowToolbar: () => A({ action: "HOVER_ACTIVITY_CARD" }),
                              renderMoreButtonPopout: y
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(g.Z, {
                                            display: "recent",
                                            entry: t,
                                            user: n,
                                            onClose: _,
                                            children: e,
                                        }),
                              children: (0, r.jsx)(x.Z, {
                                  entry: t,
                                  user: n,
                                  onClose: _,
                                  className: i()(v, { [j.hoisted]: Z === h.n_.ACTIVITY && T === t.id }),
                              }),
                          }),
                  }),
              }),
          })
        : null;
}
