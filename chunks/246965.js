n.d(t, { Z: () => p }), n(415506);
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
    O = n(388032),
    I = n(131715);
let p = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: p } = e,
        { analyticsLocations: T } = (0, c.ZP)(
            (function (e) {
                switch (e) {
                    case _.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case _.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(p)
        ),
        S = (0, d.N)(),
        N = (0, o.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0),
        f = null == S || (null == (t = S.subscription_trial) ? void 0 : t.sku_id) !== p || null == S.expires_at || Object.values(N).every((e) => 0 === e);
    return ((0, s.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == S ? void 0 : S.trial_id }
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
              })(p),
              children: [
                  (0, r.jsx)(l.RyX, { onClick: n }),
                  (0, r.jsx)(l.SrA, {
                      size: 'md',
                      color: 'currentColor',
                      className: I.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case _.Si.TIER_0:
                              return t.days > 0 ? O.intl.formatToPlainString(O.t.sP5OqK, { days: t.days }) : t.hours > 0 ? O.intl.formatToPlainString(O.t['7Lhfu7'], { hours: t.hours }) : O.intl.formatToPlainString(O.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case _.Si.TIER_2:
                              return t.days > 0 ? O.intl.formatToPlainString(O.t['4prs5e'], { days: t.days }) : t.hours > 0 ? O.intl.formatToPlainString(O.t.OD5nIS, { hours: t.hours }) : O.intl.formatToPlainString(O.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(p, N),
                  (0, r.jsx)(l.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: S.trial_id,
                              subscriptionTier: p,
                              analyticsLocations: T,
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
                                  return O.intl.string(O.t.mCG029);
                              case _.Si.TIER_2:
                                  return O.intl.string(O.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(p)
                  })
              ]
          });
};
