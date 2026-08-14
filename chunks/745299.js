n.d(t, { A: () => S });
var i = n(477900);
n(582128);
var l = n(562708),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    E = n(139286),
    o = n(532794),
    c = n(174459),
    u = n(975571),
    _ = n(158045),
    A = n(732280),
    T = n(635995),
    d = n(99462),
    I = n(202541),
    N = n(652215),
    R = n(375708);
let S =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: S } = (0, a.Ay)(
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
                  O = (0, A.V)(),
                  C = (0, r.A)(null != O && null != O.expiresAt ? O.expiresAt.getTime() : 0),
                  D =
                      null == O ||
                      O.subscriptionTrial?.skuId !== n ||
                      null == O.expiresAt ||
                      Object.values(C).every((e) => 0 === e);
              if (
                  ((0, E.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: O?.trialId },
                      },
                      { disableTrack: D },
                  ),
                  D)
              )
                  return null;
              let m = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  p = (0, _.re)({
                      intervalType: O.subscriptionTrial?.interval,
                      intervalCount: O.subscriptionTrial?.intervalCount,
                  }),
                  P = u.A.getArticleURL(O.trialId === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(T.T0, {
                  onClick: () => {
                      t(), c.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: m, trial_id: O.trialId });
                  },
                  children: [
                      (0, i.jsx)(T.In, { children: (0, d.GZ)(n, C, p, P) }),
                      (0, i.jsx)(T.fY, {
                          onClick: function () {
                              null != O &&
                                  ((0, o.A)({
                                      trialId: O.trialId,
                                      subscriptionTier: n,
                                      analyticsLocations: S,
                                      analyticsObject: {
                                          page: N.liQ.IN_APP,
                                          section: N.JJy.NOTIFICATION_BAR,
                                          object: N.ZSU.BUTTON_CTA,
                                      },
                                  }),
                                  c.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: m,
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
