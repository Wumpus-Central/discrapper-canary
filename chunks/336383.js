var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(906732),
    c = r(785717),
    d = r(456644),
    f = r(502762),
    _ = r(652853),
    h = r(171368),
    p = r(228168),
    m = r(388032),
    g = r(249942);
n.Z = a.forwardRef(function (e, n) {
    let { children: r, className: a, subsection: s, onAction: E, onClose: v, ...I } = e,
        { profileType: T } = (0, _.z)(),
        { analyticsLocations: b } = (0, u.ZP)(),
        { context: y } = (0, c.KZ)(),
        { recentActivityEnabled: S } = (0, d.i)({ location: 'UserProfileActivityCardContainer' });
    return T !== p.y0.FULL_SIZE && (null == y ? void 0 : y.userId) != null && S
        ? (0, i.jsx)(l.Clickable, {
              className: g.clickableContainer,
              'aria-label': m.intl.string(m.t.pD1L1t),
              onClick: () => {
                  null == E || E({ action: 'PRESS_CARD' }),
                      (0, h.openUserProfileModal)({
                          section: p.oh.ACTIVITY,
                          sourceAnalyticsLocations: b,
                          subsection: s,
                          ...y
                      }),
                      null == v || v();
              },
              children: (0, i.jsx)(f.Z.Overlay, {
                  ref: n,
                  className: o()(g.card, a),
                  ...I,
                  children: r
              })
          })
        : (0, i.jsx)(f.Z.Overlay, {
              ref: n,
              className: o()(g.card, a),
              ...I,
              children: r
          });
});
