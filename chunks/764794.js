var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(981729),
    l = r(780384),
    u = r(351773),
    c = r(410030),
    d = r(100527),
    f = r(906732),
    _ = r(704440),
    h = r(632583),
    p = r(626135),
    m = r(443603),
    g = r(981631),
    E = r(474936),
    v = r(388032),
    I = r(553796);
function T(e) {
    let { disabled: n, referralsRemaining: r, channel: i, isResending: T } = e,
        b = T ? v.intl.string(v.t.zzfBQk) : v.intl.string(v.t.ziPEBg),
        [y, S] = s.useState(!1),
        [A, N] = s.useState(!1),
        C = (0, u.Z)(null, () => N(!1)),
        { analyticsLocations: R } = (0, f.ZP)(d.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        O = i.isDM() && void 0 !== i.recipients ? i.recipients[0] : null,
        D = (0, c.ZP)();
    function L() {
        N((e) => !e);
    }
    return n
        ? null
        : (0, a.jsxs)('div', {
              ref: C,
              className: I.buttonContainer,
              children: [
                  (0, a.jsx)(_.Z, {
                      shouldShowPopout: A,
                      referralsRemaining: r,
                      channel: i,
                      onClose: () => N(!1),
                      isResending: T
                  }),
                  (0, a.jsx)(o.u, {
                      text: b,
                      shouldShow: !A,
                      'aria-label': b.toString(),
                      children: (e) =>
                          (0, a.jsx)('div', {
                              onMouseEnter: () => {
                                  !A &&
                                      !y &&
                                      (S(!0),
                                      p.default.track(g.rMx.SHARE_NITRO_FLOW_STEPS, {
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
                                  innerClassName: I.button,
                                  isActive: A,
                                  'aria-label': b.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      L(),
                                          p.default.track(g.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: R,
                                              step: E.fz.BADGE_CLICKED,
                                              other_user_id: Number(O)
                                          });
                                  },
                                  children: (0, a.jsx)(h.Z, {
                                      referralsRemaining: r,
                                      hovered: y,
                                      isResending: T,
                                      isLightTheme: (0, l.ap)(D)
                                  })
                              })
                          })
                  })
              ]
          });
}
n.Z = s.memo(T);
