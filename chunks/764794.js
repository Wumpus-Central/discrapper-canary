var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(981729),
    l = r(780384),
    u = r(351773),
    c = r(410030),
    d = r(100527),
    f = r(906732),
    p = r(704440),
    h = r(632583),
    _ = r(626135),
    m = r(443603),
    g = r(981631),
    E = r(474936),
    v = r(388032),
    y = r(553796);
function b(e) {
    let { disabled: n, referralsRemaining: r, channel: i, isResending: b } = e,
        I = b ? v.intl.string(v.t.zzfBQk) : v.intl.string(v.t.ziPEBg),
        [T, S] = o.useState(!1),
        [A, C] = o.useState(!1),
        N = (0, u.Z)(null, () => C(!1)),
        { analyticsLocations: R } = (0, f.ZP)(d.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        O = i.isDM() && void 0 !== i.recipients ? i.recipients[0] : null,
        D = (0, c.ZP)();
    function L() {
        C((e) => !e);
    }
    return n
        ? null
        : (0, a.jsxs)('div', {
              ref: N,
              className: y.buttonContainer,
              children: [
                  (0, a.jsx)(p.Z, {
                      shouldShowPopout: A,
                      referralsRemaining: r,
                      channel: i,
                      onClose: () => C(!1),
                      isResending: b
                  }),
                  (0, a.jsx)(s.u, {
                      text: I,
                      shouldShow: !A,
                      'aria-label': I.toString(),
                      children: (e) =>
                          (0, a.jsx)('div', {
                              onMouseEnter: () => {
                                  !A &&
                                      !T &&
                                      (S(!0),
                                      _.default.track(g.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: R,
                                          step: E.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(O)
                                      }));
                              },
                              onMouseLeave: () => {
                                  S(!1);
                              },
                              children: (0, a.jsx)(m.Z, {
                                  ...e,
                                  innerClassName: y.button,
                                  isActive: A,
                                  'aria-label': I.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      L(),
                                          _.default.track(g.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: R,
                                              step: E.fz.BADGE_CLICKED,
                                              other_user_id: Number(O)
                                          });
                                  },
                                  children: (0, a.jsx)(h.Z, {
                                      referralsRemaining: r,
                                      hovered: T,
                                      isResending: b,
                                      isLightTheme: (0, l.ap)(D)
                                  })
                              })
                          })
                  })
              ]
          });
}
n.Z = o.memo(b);
