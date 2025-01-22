r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(100527),
    l = r(906732),
    u = r(26033),
    c = r(960870),
    d = r(510659),
    f = r(287954),
    p = r(660579),
    h = r(652853),
    _ = r(64621),
    m = r(382405),
    g = r(386019),
    E = r(228168),
    v = r(249942);
function y(e) {
    let { user: n, entry: r, profileGuildId: a, className: y, onClose: b, hideContextMenu: I = !1 } = e,
        { analyticsLocations: T } = (0, l.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: S } = (0, h.z)(),
        { interactionSource: A, interactionSourceId: C } = (0, d.Xo)(),
        N = (0, c.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: T
        });
    return null != S && (0, u.Rh)(r)
        ? (0, i.jsx)(l.Gt, {
              value: T,
              children: (0, i.jsx)(_.Z, {
                  sourceType: E.n_.ACTIVITY,
                  user: n,
                  children: (0, i.jsx)(f.Z, {
                      user: n,
                      guildId: a,
                      profileType: S,
                      sourceId: r.id,
                      entry: r,
                      onAction: N,
                      sourceType: E.n_.ACTIVITY,
                      children: () =>
                          (0, i.jsx)(p.Z, {
                              user: n,
                              className: v.toolbarContainer,
                              interactionSourceId: r.id,
                              sourceType: E.n_.ACTIVITY,
                              onAction: N,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: I
                                  ? void 0
                                  : (e) =>
                                        (0, i.jsx)(g.Z, {
                                            display: 'recent',
                                            entry: r,
                                            user: n,
                                            onClose: b,
                                            children: e
                                        }),
                              children: (0, i.jsx)(m.Z, {
                                  entry: r,
                                  user: n,
                                  onClose: b,
                                  className: o()(y, { [v.hoisted]: A === E.n_.ACTIVITY && C === r.id })
                              })
                          })
                  })
              })
          })
        : null;
}
