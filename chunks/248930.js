r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(100527),
    l = r(906732),
    u = r(26033),
    c = r(960870),
    d = r(510659),
    f = r(287954),
    _ = r(660579),
    h = r(652853),
    p = r(64621),
    m = r(382405),
    g = r(386019),
    E = r(228168),
    v = r(249942);
function I(e) {
    let { user: n, entry: r, profileGuildId: a, className: I, onClose: T, hideContextMenu: b = !1 } = e,
        { analyticsLocations: y } = (0, l.ZP)(o.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: S } = (0, h.z)(),
        { interactionSource: A, interactionSourceId: N } = (0, d.Xo)(),
        C = (0, c.Z)({
            display: 'recent',
            user: n,
            entry: r,
            analyticsLocations: y
        });
    return null != S && (0, u.Rh)(r)
        ? (0, i.jsx)(l.Gt, {
              value: y,
              children: (0, i.jsx)(p.Z, {
                  sourceType: E.n_.ACTIVITY,
                  user: n,
                  children: (0, i.jsx)(f.Z, {
                      user: n,
                      guildId: a,
                      profileType: S,
                      sourceId: r.id,
                      entry: r,
                      onAction: C,
                      sourceType: E.n_.ACTIVITY,
                      children: () =>
                          (0, i.jsx)(_.Z, {
                              user: n,
                              className: v.toolbarContainer,
                              interactionSourceId: r.id,
                              sourceType: E.n_.ACTIVITY,
                              onAction: C,
                              onShowToolbar: () => C({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: b
                                  ? void 0
                                  : (e) =>
                                        (0, i.jsx)(g.Z, {
                                            display: 'recent',
                                            entry: r,
                                            user: n,
                                            onClose: T,
                                            children: e
                                        }),
                              children: (0, i.jsx)(m.Z, {
                                  entry: r,
                                  user: n,
                                  onClose: T,
                                  className: s()(I, { [v.hoisted]: A === E.n_.ACTIVITY && N === r.id })
                              })
                          })
                  })
              })
          })
        : null;
}
