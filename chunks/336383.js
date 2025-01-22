var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(906732),
    c = r(785717),
    d = r(456644),
    f = r(502762),
    p = r(652853),
    h = r(171368),
    _ = r(228168),
    m = r(388032),
    g = r(249942);
n.Z = a.forwardRef(function (e, n) {
    let { children: r, className: a, subsection: o, onAction: E, onClose: v, ...y } = e,
        { profileType: b } = (0, p.z)(),
        { analyticsLocations: I } = (0, u.ZP)(),
        { context: T } = (0, c.KZ)(),
        { recentActivityEnabled: S } = (0, d.i)({ location: 'UserProfileActivityCardContainer' });
    return b !== _.y0.FULL_SIZE && (null == T ? void 0 : T.userId) != null && S
        ? (0, i.jsx)(l.Clickable, {
              className: g.clickableContainer,
              'aria-label': m.intl.string(m.t.pD1L1t),
              onClick: () => {
                  null == E || E({ action: 'PRESS_CARD' }),
                      (0, h.openUserProfileModal)({
                          section: _.oh.ACTIVITY,
                          sourceAnalyticsLocations: I,
                          subsection: o,
                          ...T
                      }),
                      null == v || v();
              },
              children: (0, i.jsx)(f.Z.Overlay, {
                  ref: n,
                  className: s()(g.card, a),
                  ...y,
                  children: r
              })
          })
        : (0, i.jsx)(f.Z.Overlay, {
              ref: n,
              className: s()(g.card, a),
              ...y,
              children: r
          });
});
