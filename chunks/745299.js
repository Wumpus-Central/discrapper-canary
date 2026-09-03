n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var l = n(562708),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    E = n(75678),
    c = n(174459),
    u = n(975571),
    _ = n(158045),
    A = n(732280),
    d = n(635995),
    T = n(99462),
    I = n(202541),
    N = n(652215),
    R = n(375708);
let C =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: C } = (0, a.Ay)(
                      (function (e) {
                          switch (e) {
                              case I.pe.TIER_0:
                                  return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case I.pe.TIER_2:
                                  return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error(`Unsupported subscription tier: ${e}`);
                          }
                      })(n),
                  ),
                  S = (0, A.V)(),
                  O = (0, r.A)(null != S && null != S.expiresAt ? S.expiresAt.getTime() : 0),
                  D =
                      null == S ||
                      S.subscriptionTrial?.skuId !== n ||
                      null == S.expiresAt ||
                      Object.values(O).every((e) => 0 === e);
              if (
                  ((0, o.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: S?.trialId },
                      },
                      { disableTrack: D },
                  ),
                  D)
              )
                  return null;
              let m = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  P = (0, _.re)({
                      intervalType: S.subscriptionTrial?.interval,
                      intervalCount: S.subscriptionTrial?.intervalCount,
                  }),
                  p = u.A.getArticleURL(S.trialId === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(d.T0, {
                  onClick: () => {
                      t(), c.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: m, trial_id: S.trialId });
                  },
                  children: [
                      (0, i.jsx)(d.In, { children: (0, T.GZ)(n, O, P, p) }),
                      (0, i.jsx)(d.fY, {
                          onClick: function () {
                              null != S &&
                                  ((0, E.A)({
                                      trialId: S.trialId,
                                      subscriptionTier: n,
                                      analyticsLocations: C,
                                      analyticsObject: {
                                          page: N.liQ.IN_APP,
                                          section: N.JJy.NOTIFICATION_BAR,
                                          object: N.ZSU.BUTTON_CTA,
                                      },
                                  }),
                                  c.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: m,
                                      trial_id: S.trialId,
                                  }));
                          },
                          text: (function (e) {
                              switch (e) {
                                  case I.pe.TIER_0:
                                      return R.intl.string(R.t.mCG023);
                                  case I.pe.TIER_2:
                                      return R.intl.string(R.t.J61px0);
                                  default:
                                      throw Error(`Unsupported subscription tier: ${e}`);
                              }
                          })(n),
                      }),
                  ],
              });
          }
        : null;
