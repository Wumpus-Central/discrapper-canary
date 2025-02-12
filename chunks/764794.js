n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(981729),
    s = n(780384),
    o = n(351773),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(704440),
    f = n(632583),
    _ = n(626135),
    p = n(443603),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(446016);
function v(e) {
    let { disabled: t, referralsRemaining: n, channel: v, isResending: y } = e,
        I = y ? g.intl.string(g.t.zzfBQk) : g.intl.string(g.t.ziPEBg),
        [T, b] = r.useState(!1),
        [S, A] = r.useState(!1),
        N = (0, o.Z)(null, () => A(!1)),
        { analyticsLocations: C } = (0, c.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        R = v.isDM() && void 0 !== v.recipients ? v.recipients[0] : null,
        O = (0, l.ZP)();
    function D() {
        A((e) => !e);
    }
    return t
        ? null
        : (0, i.jsxs)('div', {
              ref: N,
              className: E.buttonContainer,
              children: [
                  (0, i.jsx)(d.Z, {
                      shouldShowPopout: S,
                      referralsRemaining: n,
                      channel: v,
                      onClose: () => A(!1),
                      isResending: y
                  }),
                  (0, i.jsx)(a.u, {
                      text: I,
                      shouldShow: !S,
                      'aria-label': I.toString(),
                      children: (e) =>
                          (0, i.jsx)('div', {
                              onMouseEnter: () => {
                                  S ||
                                      T ||
                                      (b(!0),
                                      _.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: C,
                                          step: m.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(R)
                                      }));
                              },
                              onMouseLeave: () => {
                                  b(!1);
                              },
                              children: (0, i.jsx)(p.Z, {
                                  ...e,
                                  innerClassName: E.button,
                                  isActive: S,
                                  'aria-label': I.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      D(),
                                          _.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: C,
                                              step: m.fz.BADGE_CLICKED,
                                              other_user_id: Number(R)
                                          });
                                  },
                                  children: (0, i.jsx)(f.Z, {
                                      referralsRemaining: n,
                                      hovered: T,
                                      isResending: y,
                                      isLightTheme: (0, s.ap)(O)
                                  })
                              })
                          })
                  })
              ]
          });
}
let y = r.memo(v);
