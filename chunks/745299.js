n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var l = n(562708),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    c = n(75678),
    E = n(174459),
    u = n(975571),
    d = n(158045),
    _ = n(732280),
    A = n(635995),
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
                  O = (0, _.V)(),
                  m = (0, r.A)(null != O && null != O.expiresAt ? O.expiresAt.getTime() : 0),
                  S =
                      null == O ||
                      O.subscriptionTrial?.skuId !== n ||
                      null == O.expiresAt ||
                      Object.values(m).every((e) => 0 === e);
              if (
                  ((0, o.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: O?.trialId },
                      },
                      { disableTrack: S },
                  ),
                  S)
              )
                  return null;
              let f = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  p = (0, d.re)({
                      intervalType: O.subscriptionTrial?.interval,
                      intervalCount: O.subscriptionTrial?.intervalCount,
                  }),
                  D = u.A.getArticleURL(O.trialId === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(A.T0, {
                  onClick: () => {
                      (t(), E.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: f, trial_id: O.trialId }));
                  },
                  children: [
                      (0, i.jsx)(A.In, { children: (0, T.GZ)(n, m, p, D) }),
                      (0, i.jsx)(A.fY, {
                          onClick: function () {
                              null != O &&
                                  ((0, c.A)({
                                      trialId: O.trialId,
                                      subscriptionTier: n,
                                      analyticsLocations: C,
                                      analyticsObject: {
                                          page: N.liQ.IN_APP,
                                          section: N.JJy.NOTIFICATION_BAR,
                                          object: N.ZSU.BUTTON_CTA,
                                      },
                                  }),
                                  E.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: f,
                                      trial_id: O.trialId,
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
