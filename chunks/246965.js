n.d(t, { Z: () => T }), n(415506);
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(481060),
    o = n(774078),
    a = n(100527),
    c = n(906732),
    s = n(213609),
    u = n(963249),
    d = n(639119),
    _ = n(474936),
    E = n(981631),
    I = n(388032),
    O = n(131715);
let T = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: T } = e,
        { analyticsLocations: p } = (0, c.ZP)(
            (function (e) {
                switch (e) {
                    case _.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case _.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(T)
        ),
        N = (0, d.N)(),
        S = (0, o.Z)(null != N && null != N.expires_at ? Date.parse(N.expires_at) : 0),
        f = null == N || (null == (t = N.subscription_trial) ? void 0 : t.sku_id) !== T || null == N.expires_at || Object.values(S).every((e) => 0 === e);
    return ((0, s.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == N ? void 0 : N.trial_id }
        },
        { disableTrack: f }
    ),
    f)
        ? null
        : (0, r.jsxs)(l.qXd, {
              color: (function (e) {
                  switch (e) {
                      case _.Si.TIER_0:
                          return l.DM8.PREMIUM_TIER_0;
                      case _.Si.TIER_2:
                          return l.DM8.PREMIUM_TIER_2;
                      default:
                          throw Error('Unsupported subscription tier: '.concat(e));
                  }
              })(T),
              children: [
                  (0, r.jsx)(l.RyX, { onClick: n }),
                  (0, r.jsx)(l.SrA, {
                      size: 'md',
                      color: 'currentColor',
                      className: O.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case _.Si.TIER_0:
                              return t.days > 0 ? I.intl.formatToPlainString(I.t.sP5OqK, { days: t.days }) : t.hours > 0 ? I.intl.formatToPlainString(I.t['7Lhfu7'], { hours: t.hours }) : I.intl.formatToPlainString(I.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case _.Si.TIER_2:
                              return t.days > 0 ? I.intl.formatToPlainString(I.t['4prs5e'], { days: t.days }) : t.hours > 0 ? I.intl.formatToPlainString(I.t.OD5nIS, { hours: t.hours }) : I.intl.formatToPlainString(I.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(T, S),
                  (0, r.jsx)(l.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: N.trial_id,
                              subscriptionTier: T,
                              analyticsLocations: p,
                              analyticsObject: {
                                  page: E.ZY5.IN_APP,
                                  section: E.jXE.NOTIFICATION_BAR,
                                  object: E.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case _.Si.TIER_0:
                                  return I.intl.string(I.t.mCG029);
                              case _.Si.TIER_2:
                                  return I.intl.string(I.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(T)
                  })
              ]
          });
};
