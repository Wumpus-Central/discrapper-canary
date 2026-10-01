n.d(t, { A: () => O });
var i = n(477900);
n(582128);
var l = n(562708),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    E = n(139286),
    o = n(75678),
    c = n(174459),
    _ = n(975571),
    u = n(158045),
    A = n(732280),
    T = n(635995),
    I = n(99462),
    d = n(202541),
    N = n(652215),
    R = n(375708);
let O =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: O } = (0, a.Ay)(
                      (function (e) {
                          switch (e) {
                              case d.pe.TIER_0:
                                  return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case d.pe.TIER_2:
                                  return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error(`Unsupported subscription tier: ${e}`);
                          }
                      })(n),
                  ),
                  S = (0, A.V)(),
                  C = (0, r.A)(null != S && null != S.expiresAt ? S.expiresAt.getTime() : 0),
                  D =
                      null == S ||
                      S.subscriptionTrial?.skuId !== n ||
                      null == S.expiresAt ||
                      Object.values(C).every((e) => 0 === e);
              if (
                  ((0, E.A)(
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
              let P = n === d.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  p = (0, u.re)({
                      intervalType: S.subscriptionTrial?.interval,
                      intervalCount: S.subscriptionTrial?.intervalCount,
                  }),
                  M = _.A.getArticleURL(S.trialId === d.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(T.T0, {
                  onClick: () => {
                      (t(), c.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: P, trial_id: S.trialId }));
                  },
                  children: [
                      (0, i.jsx)(T.In, { children: (0, I.GZ)(n, C, p, M) }),
                      (0, i.jsx)(T.fY, {
                          onClick: function () {
                              null != S &&
                                  ((0, o.A)({
                                      trialId: S.trialId,
                                      subscriptionTier: n,
                                      analyticsLocations: O,
                                      analyticsObject: {
                                          page: N.liQ.IN_APP,
                                          section: N.JJy.NOTIFICATION_BAR,
                                          object: N.ZSU.BUTTON_CTA,
                                      },
                                  }),
                                  c.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: P,
                                      trial_id: S.trialId,
                                  }));
                          },
                          text: (function (e) {
                              switch (e) {
                                  case d.pe.TIER_0:
                                      return R.intl.string(R.t.mCG023);
                                  case d.pe.TIER_2:
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
