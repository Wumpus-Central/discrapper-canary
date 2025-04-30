n.d(t, { Z: () => T }), n(415506);
var r = n(200651);
n(192379);
var i = n(990547),
    l = n(481060),
    o = n(774078),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    E = n(474936),
    _ = n(981631),
    O = n(388032),
    I = n(131715);
let T = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: T } = e,
        { analyticsLocations: N } = (0, s.ZP)(
            (function (e) {
                switch (e) {
                    case E.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case E.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(T)
        ),
        S = (0, d.N)(),
        p = (0, o.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0),
        R = null == S || (null == (t = S.subscription_trial) ? void 0 : t.sku_id) !== T || null == S.expires_at || Object.values(p).every((e) => 0 === e);
    return ((0, c.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == S ? void 0 : S.trial_id }
        },
        { disableTrack: R }
    ),
    R)
        ? null
        : (0, r.jsxs)(l.qXd, {
              color: (function (e) {
                  switch (e) {
                      case E.Si.TIER_0:
                          return l.DM8.PREMIUM_TIER_0;
                      case E.Si.TIER_2:
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
                      className: I.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case E.Si.TIER_0:
                              return t.days > 0 ? O.intl.formatToPlainString(O.t.sP5OqK, { days: t.days }) : t.hours > 0 ? O.intl.formatToPlainString(O.t['7Lhfu7'], { hours: t.hours }) : O.intl.formatToPlainString(O.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case E.Si.TIER_2:
                              return t.days > 0 ? O.intl.formatToPlainString(O.t['4prs5e'], { days: t.days }) : t.hours > 0 ? O.intl.formatToPlainString(O.t.OD5nIS, { hours: t.hours }) : O.intl.formatToPlainString(O.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(T, p),
                  (0, r.jsx)(l.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: S.trial_id,
                              subscriptionTier: T,
                              analyticsLocations: N,
                              analyticsObject: {
                                  page: _.ZY5.IN_APP,
                                  section: _.jXE.NOTIFICATION_BAR,
                                  object: _.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case E.Si.TIER_0:
                                  return O.intl.string(O.t.mCG029);
                              case E.Si.TIER_2:
                                  return O.intl.string(O.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(T)
                  })
              ]
          });
};
