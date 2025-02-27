n.d(t, { Z: () => h }), n(411104);
var r = n(200651);
n(192379);
var i = n(990547),
    l = n(481060),
    o = n(774078),
    s = n(100527),
    a = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    _ = n(474936),
    E = n(981631),
    p = n(388032),
    m = n(24060);
let h = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: h } = e,
        { analyticsLocations: f } = (0, a.ZP)(
            (function (e) {
                switch (e) {
                    case _.Si.TIER_0:
                        return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case _.Si.TIER_2:
                        return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(h)
        ),
        g = (0, d.N)(),
        N = (0, o.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0),
        O = null == g || (null === (t = g.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== h || null == g.expires_at || Object.values(N).every((e) => 0 === e);
    return ((0, c.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == g ? void 0 : g.trial_id }
        },
        { disableTrack: O }
    ),
    O)
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
              })(h),
              children: [
                  (0, r.jsx)(l.RyX, { onClick: n }),
                  (0, r.jsx)(l.SrA, {
                      size: 'md',
                      color: 'currentColor',
                      className: m.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case _.Si.TIER_0:
                              return t.days > 0 ? p.NW.formatToPlainString(p.t.sP5OqK, { days: t.days }) : t.hours > 0 ? p.NW.formatToPlainString(p.t['7Lhfu7'], { hours: t.hours }) : p.NW.formatToPlainString(p.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case _.Si.TIER_2:
                              return t.days > 0 ? p.NW.formatToPlainString(p.t['4prs5e'], { days: t.days }) : t.hours > 0 ? p.NW.formatToPlainString(p.t.OD5nIS, { hours: t.hours }) : p.NW.formatToPlainString(p.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(h, N),
                  (0, r.jsx)(l.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: g.trial_id,
                              subscriptionTier: h,
                              analyticsLocations: f,
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
                                  return p.NW.string(p.t.mCG029);
                              case _.Si.TIER_2:
                                  return p.NW.string(p.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(h)
                  })
              ]
          });
};
