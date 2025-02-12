n.d(t, { Z: () => N }), n(411104);
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(481060),
    a = n(774078),
    s = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(963249),
    E = n(639119),
    d = n(474936),
    _ = n(981631),
    I = n(388032),
    T = n(693763);
let N =
    12633 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: N } = e,
                  { analyticsLocations: A } = (0, o.ZP)(
                      (function (e) {
                          switch (e) {
                              case d.Si.TIER_0:
                                  return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case d.Si.TIER_2:
                                  return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(N)
                  ),
                  S = (0, E.N)(),
                  R = (0, a.Z)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0),
                  C = null == S || (null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== N || null == S.expires_at || Object.values(R).every((e) => 0 === e);
              return ((0, c.Z)(
                  {
                      type: l.ImpressionTypes.VIEW,
                      name: l.ImpressionNames.TRIAL_NOTICE,
                      properties: { trial_id: null == S ? void 0 : S.trial_id }
                  },
                  { disableTrack: C }
              ),
              C)
                  ? null
                  : (0, i.jsxs)(r.qXd, {
                        color: (function (e) {
                            switch (e) {
                                case d.Si.TIER_0:
                                    return r.DM8.PREMIUM_TIER_0;
                                case d.Si.TIER_2:
                                    return r.DM8.PREMIUM_TIER_2;
                                default:
                                    throw Error('Unsupported subscription tier: '.concat(e));
                            }
                        })(N),
                        children: [
                            (0, i.jsx)(r.RyX, { onClick: n }),
                            (0, i.jsx)(r.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.premiumIcon
                            }),
                            (function (e, t) {
                                switch (e) {
                                    case d.Si.TIER_0:
                                        return t.days > 0 ? I.intl.formatToPlainString(I.t.sP5OqK, { days: t.days }) : t.hours > 0 ? I.intl.formatToPlainString(I.t['7Lhfu7'], { hours: t.hours }) : I.intl.formatToPlainString(I.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                                    case d.Si.TIER_2:
                                        return t.days > 0 ? I.intl.formatToPlainString(I.t['4prs5e'], { days: t.days }) : t.hours > 0 ? I.intl.formatToPlainString(I.t.OD5nIS, { hours: t.hours }) : I.intl.formatToPlainString(I.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                                    default:
                                        throw Error('Unsupported subscription tier: '.concat(e));
                                }
                            })(N, R),
                            (0, i.jsx)(r.EyT, {
                                onClick: () => {
                                    (0, u.Z)({
                                        trialId: S.trial_id,
                                        subscriptionTier: N,
                                        analyticsLocations: A,
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
                                            return I.intl.string(I.t.mCG029);
                                        case d.Si.TIER_2:
                                            return I.intl.string(I.t['7590PT']);
                                        default:
                                            throw Error('Unsupported subscription tier: '.concat(e));
                                    }
                                })(N)
                            })
                        ]
                    });
          }
        : null;
