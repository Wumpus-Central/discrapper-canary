n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    E = n(139286),
    o = n(532794),
    _ = n(954571),
    c = n(975571),
    A = n(927578),
    I = n(234419),
    u = n(635995),
    T = n(915516),
    d = n(788868),
    N = n(652215),
    R = n(985018);
let O =
    21552 == n.j
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
                  P = (0, I.V)(),
                  S = (0, r.A)(null != P && null != P.expires_at ? Date.parse(P.expires_at) : 0),
                  C =
                      null == P ||
                      P.subscription_trial?.sku_id !== n ||
                      null == P.expires_at ||
                      Object.values(S).every((e) => 0 === e);
              if (
                  ((0, E.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: P?.trial_id },
                      },
                      { disableTrack: C },
                  ),
                  C)
              )
                  return null;
              let D = n === d.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  M = (0, A.re)({
                      intervalType: P.subscription_trial?.interval,
                      intervalCount: P.subscription_trial?.interval_count,
                  }),
                  m = c.A.getArticleURL(P.trial_id === d.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(u.T0, {
                  onClick: () => {
                      t(), _.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: D, trial_id: P.trial_id });
                  },
                  children: [
                      (0, i.jsx)(u.In, { children: (0, T.GZ)(n, S, M, m) }),
                      (0, i.jsx)(u.fY, {
                          onClick: () => {
                              (0, o.A)({
                                  trialId: P.trial_id,
                                  subscriptionTier: n,
                                  analyticsLocations: O,
                                  analyticsObject: {
                                      page: N.liQ.IN_APP,
                                      section: N.JJy.NOTIFICATION_BAR,
                                      object: N.ZSU.BUTTON_CTA,
                                  },
                              }),
                                  _.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: D,
                                      trial_id: P.trial_id,
                                  });
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
