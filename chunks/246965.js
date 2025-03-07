n.d(t, { Z: () => m }), n(411104);
var r = n(200651);
n(192379);
var i = n(990547),
    o = n(481060),
    l = n(774078),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    _ = n(474936),
    p = n(981631),
    E = n(388032),
    f = n(24060);
let m = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: m } = e,
        { analyticsLocations: h } = (0, s.ZP)(
            (function (e) {
                switch (e) {
                    case _.Si.TIER_0:
                        return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case _.Si.TIER_2:
                        return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(m)
        ),
        g = (0, d.N)(),
        b = (0, l.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0),
        O = null == g || (null === (t = g.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== m || null == g.expires_at || Object.values(b).every((e) => 0 === e);
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
        : (0, r.jsxs)(o.qXd, {
              color: (function (e) {
                  switch (e) {
                      case _.Si.TIER_0:
                          return o.DM8.PREMIUM_TIER_0;
                      case _.Si.TIER_2:
                          return o.DM8.PREMIUM_TIER_2;
                      default:
                          throw Error('Unsupported subscription tier: '.concat(e));
                  }
              })(m),
              children: [
                  (0, r.jsx)(o.RyX, { onClick: n }),
                  (0, r.jsx)(o.SrA, {
                      size: 'md',
                      color: 'currentColor',
                      className: f.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case _.Si.TIER_0:
                              return t.days > 0 ? E.NW.formatToPlainString(E.t.sP5OqK, { days: t.days }) : t.hours > 0 ? E.NW.formatToPlainString(E.t['7Lhfu7'], { hours: t.hours }) : E.NW.formatToPlainString(E.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case _.Si.TIER_2:
                              return t.days > 0 ? E.NW.formatToPlainString(E.t['4prs5e'], { days: t.days }) : t.hours > 0 ? E.NW.formatToPlainString(E.t.OD5nIS, { hours: t.hours }) : E.NW.formatToPlainString(E.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(m, b),
                  (0, r.jsx)(o.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: g.trial_id,
                              subscriptionTier: m,
                              analyticsLocations: h,
                              analyticsObject: {
                                  page: p.ZY5.IN_APP,
                                  section: p.jXE.NOTIFICATION_BAR,
                                  object: p.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case _.Si.TIER_0:
                                  return E.NW.string(E.t.mCG029);
                              case _.Si.TIER_2:
                                  return E.NW.string(E.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(m)
                  })
              ]
          });
};
