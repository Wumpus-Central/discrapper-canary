n.d(t, { Z: () => O }), n(411104);
var r = n(200651);
n(192379);
var i = n(990547),
    l = n(481060),
    o = n(774078),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(963249),
    E = n(639119),
    d = n(474936),
    _ = n(981631),
    N = n(388032),
    I = n(24060);
let O =
    12633 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: O } = e,
                  { analyticsLocations: T } = (0, s.ZP)(
                      (function (e) {
                          switch (e) {
                              case d.Si.TIER_0:
                                  return a.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case d.Si.TIER_2:
                                  return a.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(O)
                  ),
                  S = (0, E.N)(),
                  p = (0, o.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0),
                  P = null == S || (null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== O || null == S.expires_at || Object.values(p).every((e) => 0 === e);
              return ((0, c.Z)(
                  {
                      type: i.ImpressionTypes.VIEW,
                      name: i.ImpressionNames.TRIAL_NOTICE,
                      properties: { trial_id: null == S ? void 0 : S.trial_id }
                  },
                  { disableTrack: P }
              ),
              P)
                  ? null
                  : (0, r.jsxs)(l.qXd, {
                        color: (function (e) {
                            switch (e) {
                                case d.Si.TIER_0:
                                    return l.DM8.PREMIUM_TIER_0;
                                case d.Si.TIER_2:
                                    return l.DM8.PREMIUM_TIER_2;
                                default:
                                    throw Error('Unsupported subscription tier: '.concat(e));
                            }
                        })(O),
                        children: [
                            (0, r.jsx)(l.RyX, { onClick: n }),
                            (0, r.jsx)(l.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.premiumIcon
                            }),
                            (function (e, t) {
                                switch (e) {
                                    case d.Si.TIER_0:
                                        return t.days > 0 ? N.NW.formatToPlainString(N.t.sP5OqK, { days: t.days }) : t.hours > 0 ? N.NW.formatToPlainString(N.t['7Lhfu7'], { hours: t.hours }) : N.NW.formatToPlainString(N.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                                    case d.Si.TIER_2:
                                        return t.days > 0 ? N.NW.formatToPlainString(N.t['4prs5e'], { days: t.days }) : t.hours > 0 ? N.NW.formatToPlainString(N.t.OD5nIS, { hours: t.hours }) : N.NW.formatToPlainString(N.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                                    default:
                                        throw Error('Unsupported subscription tier: '.concat(e));
                                }
                            })(O, p),
                            (0, r.jsx)(l.EyT, {
                                onClick: () => {
                                    (0, u.Z)({
                                        trialId: S.trial_id,
                                        subscriptionTier: O,
                                        analyticsLocations: T,
                                        analyticsObject: {
                                            page: _.ZY5.IN_APP,
                                            section: _.jXE.NOTIFICATION_BAR,
                                            object: _.qAy.BUTTON_CTA
                                        }
                                    });
                                },
                                children: (function (e) {
                                    switch (e) {
                                        case d.Si.TIER_0:
                                            return N.NW.string(N.t.mCG029);
                                        case d.Si.TIER_2:
                                            return N.NW.string(N.t['7590PT']);
                                        default:
                                            throw Error('Unsupported subscription tier: '.concat(e));
                                    }
                                })(O)
                            })
                        ]
                    });
          }
        : null;
