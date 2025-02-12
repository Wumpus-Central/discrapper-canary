n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(785717),
    c = n(456644),
    d = n(502762),
    f = n(652853),
    _ = n(171368),
    p = n(228168),
    h = n(388032),
    m = n(537208);
let g = r.forwardRef(function (e, t) {
    let { children: n, className: r, subsection: a, onAction: g, onClose: E, ...v } = e,
        { profileType: y } = (0, f.z)(),
        { analyticsLocations: I } = (0, l.ZP)(),
        { context: T } = (0, u.KZ)(),
        { recentActivityEnabled: b } = (0, c.i)({ location: 'UserProfileActivityCardContainer' });
    return y !== p.y0.FULL_SIZE && (null == T ? void 0 : T.userId) != null && b
        ? (0, i.jsx)(o.P3F, {
              className: m.clickableContainer,
              'aria-label': h.intl.string(h.t.pD1L1t),
              onClick: () => {
                  null == g || g({ action: 'PRESS_CARD' }),
                      (0, _.openUserProfileModal)({
                          section: p.oh.ACTIVITY,
                          sourceAnalyticsLocations: I,
                          subsection: a,
                          ...T
                      }),
                      null == E || E();
              },
              children: (0, i.jsx)(d.Z.Overlay, {
                  ref: t,
                  className: s()(m.card, r),
                  ...v,
                  children: n
              })
          })
        : (0, i.jsx)(d.Z.Overlay, {
              ref: t,
              className: s()(m.card, r),
              ...v,
              children: n
          });
});
