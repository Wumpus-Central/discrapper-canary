(n.d(t, { Z: () => p }), n(415506));
var i = n(255367);
n(73800);
var r = n(990547),
    l = n(481060),
    o = n(774078),
    s = n(100527),
    a = n(906732),
    c = n(213609),
    d = n(963249),
    u = n(639119),
    _ = n(474936),
    h = n(981631),
    E = n(388032),
    I = n(131715);
let p =
    12633 == n.j
        ? function (e) {
              var t;
              let { dismissCurrentNotice: n, subscriptionTier: p } = e,
                  { analyticsLocations: C } = (0, a.ZP)(
                      (function (e) {
                          switch (e) {
                              case _.Si.TIER_0:
                                  return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case _.Si.TIER_2:
                                  return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(p)
                  ),
                  g = (0, u.N)(),
                  O = (0, o.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0),
                  T = null == g || (null == (t = g.subscription_trial) ? void 0 : t.sku_id) !== p || null == g.expires_at || Object.values(O).every((e) => 0 === e);
              return ((0, c.Z)(
                  {
                      type: r.ImpressionTypes.VIEW,
                      name: r.ImpressionNames.TRIAL_NOTICE,
                      properties: { trial_id: null == g ? void 0 : g.trial_id }
                  },
                  { disableTrack: T }
              ),
              T)
                  ? null
                  : (0, i.jsxs)(l.qXd, {
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
                            (0, i.jsx)(l.RyX, { onClick: n }),
                            (0, i.jsx)(l.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.premiumIcon
                            }),
                            (function (e, t) {
                                switch (e) {
                                    case _.Si.TIER_0:
                                        return t.days > 0 ? E.intl.formatToPlainString(E.t.sP5OqK, { days: t.days }) : t.hours > 0 ? E.intl.formatToPlainString(E.t['7Lhfu7'], { hours: t.hours }) : E.intl.formatToPlainString(E.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                                    case _.Si.TIER_2:
                                        return t.days > 0 ? E.intl.formatToPlainString(E.t['4prs5e'], { days: t.days }) : t.hours > 0 ? E.intl.formatToPlainString(E.t.OD5nIS, { hours: t.hours }) : E.intl.formatToPlainString(E.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                                    default:
                                        throw Error('Unsupported subscription tier: '.concat(e));
                                }
                            })(p, O),
                            (0, i.jsx)(l.EyT, {
                                onClick: () => {
                                    (0, d.Z)({
                                        trialId: g.trial_id,
                                        subscriptionTier: p,
                                        analyticsLocations: C,
                                        analyticsObject: {
                                            page: h.ZY5.IN_APP,
                                            section: h.jXE.NOTIFICATION_BAR,
                                            object: h.qAy.BUTTON_CTA
                                        }
                                    });
                                },
                                children: (function (e) {
                                    switch (e) {
                                        case _.Si.TIER_0:
                                            return E.intl.string(E.t.mCG029);
                                        case _.Si.TIER_2:
                                            return E.intl.string(E.t['7590PT']);
                                        default:
                                            throw Error('Unsupported subscription tier: '.concat(e));
                                    }
                                })(p)
                            })
                        ]
                    });
          }
        : null;
