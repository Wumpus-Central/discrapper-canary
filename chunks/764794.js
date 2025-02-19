n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(981729),
    a = n(780384),
    s = n(351773),
    l = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(704440),
    f = n(632583),
    p = n(626135),
    _ = n(443603),
    h = n(981631),
    m = n(474936),
    g = n(388032),
    E = n(342203);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { disabled: t, referralsRemaining: n, channel: v, isResending: y } = e,
        S = y ? g.NW.string(g.t.zzfBQk) : g.NW.string(g.t.ziPEBg),
        [I, T] = i.useState(!1),
        [N, A] = i.useState(!1),
        C = (0, s.Z)(null, () => A(!1)),
        { analyticsLocations: R } = (0, u.ZP)(c.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        P = v.isDM() && void 0 !== v.recipients ? v.recipients[0] : null,
        w = (0, l.ZP)();
    function D() {
        A((e) => !e);
    }
    return t
        ? null
        : (0, r.jsxs)('div', {
              ref: C,
              className: E.buttonContainer,
              children: [
                  (0, r.jsx)(d.Z, {
                      shouldShowPopout: N,
                      referralsRemaining: n,
                      channel: v,
                      onClose: () => A(!1),
                      isResending: y
                  }),
                  (0, r.jsx)(o.u, {
                      text: S,
                      shouldShow: !N,
                      'aria-label': S.toString(),
                      children: (e) =>
                          (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  N ||
                                      I ||
                                      (T(!0),
                                      p.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: R,
                                          step: m.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(P)
                                      }));
                              },
                              onMouseLeave: () => {
                                  T(!1);
                              },
                              children: (0, r.jsx)(
                                  _.Z,
                                  O(b({}, e), {
                                      innerClassName: E.button,
                                      isActive: N,
                                      'aria-label': S.toString(),
                                      'aria-haspopup': 'dialog',
                                      onClick: () => {
                                          D(),
                                              p.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
                                                  location_stack: R,
                                                  step: m.fz.BADGE_CLICKED,
                                                  other_user_id: Number(P)
                                              });
                                      },
                                      children: (0, r.jsx)(f.Z, {
                                          referralsRemaining: n,
                                          hovered: I,
                                          isResending: y,
                                          isLightTheme: (0, a.ap)(w)
                                      })
                                  })
                              )
                          })
                  })
              ]
          });
}
let I = i.memo(S);
