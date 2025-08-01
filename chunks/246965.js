(n.d(t, { Z: () => S }), n(415506));
var r = n(255367);
n(73800);
var i = n(990547),
    l = n(481060),
    a = n(774078),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    _ = n(474936),
    E = n(981631),
    p = n(388032),
    O = n(131715);
let S = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: S } = e,
        { analyticsLocations: I } = (0, s.ZP)(
            (function (e) {
                switch (e) {
                    case _.Si.TIER_0:
                        return o.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case _.Si.TIER_2:
                        return o.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(S)
        ),
        f = (0, d.N)(),
        h = (0, a.Z)(null != f && null != f.expires_at ? Date.parse(f.expires_at) : 0),
        T = null == f || (null == (t = f.subscription_trial) ? void 0 : t.sku_id) !== S || null == f.expires_at || Object.values(h).every((e) => 0 === e);
    return ((0, c.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == f ? void 0 : f.trial_id }
        },
        { disableTrack: T }
    ),
    T)
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
              })(S),
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
                              return t.days > 0 ? p.intl.formatToPlainString(p.t.sP5OqK, { days: t.days }) : t.hours > 0 ? p.intl.formatToPlainString(p.t['7Lhfu7'], { hours: t.hours }) : p.intl.formatToPlainString(p.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case _.Si.TIER_2:
                              return t.days > 0 ? p.intl.formatToPlainString(p.t['4prs5e'], { days: t.days }) : t.hours > 0 ? p.intl.formatToPlainString(p.t.OD5nIS, { hours: t.hours }) : p.intl.formatToPlainString(p.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(S, h),
                  (0, r.jsx)(l.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: f.trial_id,
                              subscriptionTier: S,
                              analyticsLocations: I,
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
                                  return p.intl.string(p.t.mCG029);
                              case _.Si.TIER_2:
                                  return p.intl.string(p.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(S)
                  })
              ]
          });
};
