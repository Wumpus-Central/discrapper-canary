n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    E = n(139286),
    _ = n(532794),
    o = n(954571),
    A = n(975571),
    c = n(927578),
    T = n(234419),
    I = n(635995),
    N = n(915516),
    u = n(788868),
    R = n(652215),
    d = n(985018);
let O =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: O } = (0, a.Ay)(
                      (function (e) {
                          switch (e) {
                              case u.pe.TIER_0:
                                  return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case u.pe.TIER_2:
                                  return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error(`Unsupported subscription tier: ${e}`);
                          }
                      })(n),
                  ),
                  P = (0, T.V)(),
                  C = (0, r.A)(null != P && null != P.expires_at ? Date.parse(P.expires_at) : 0),
                  S =
                      null == P ||
                      P.subscription_trial?.sku_id !== n ||
                      null == P.expires_at ||
                      Object.values(C).every((e) => 0 === e);
              if (
                  ((0, E.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: P?.trial_id },
                      },
                      { disableTrack: S },
                  ),
                  S)
              )
                  return null;
              let M = n === u.pe.TIER_2 ? R.kqX.PREMIUM_TIER_2_TRIAL_ENDING : R.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  D = (0, c.re)({
                      intervalType: P.subscription_trial?.interval,
                      intervalCount: P.subscription_trial?.interval_count,
                  }),
                  m = A.A.getArticleURL(P.trial_id === u.yo ? R.MVz.NITRO_TRIAL_FOR_ALL : R.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(I.T0, {
                  onClick: () => {
                      t(), o.default.track(R.HAw.APP_NOTICE_CLOSED, { notice_type: M, trial_id: P.trial_id });
                  },
                  children: [
                      (0, i.jsx)(I.In, { children: (0, N.GZ)(n, C, D, m) }),
                      (0, i.jsx)(I.fY, {
                          onClick: () => {
                              (0, _.A)({
                                  trialId: P.trial_id,
                                  subscriptionTier: n,
                                  analyticsLocations: O,
                                  analyticsObject: {
                                      page: R.liQ.IN_APP,
                                      section: R.JJy.NOTIFICATION_BAR,
                                      object: R.ZSU.BUTTON_CTA,
                                  },
                              }),
                                  o.default.track(R.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: M,
                                      trial_id: P.trial_id,
                                  });
                          },
                          text: (function (e) {
                              switch (e) {
                                  case u.pe.TIER_0:
                                      return d.intl.string(d.t.mCG023);
                                  case u.pe.TIER_2:
                                      return d.intl.string(d.t.J61px0);
                                  default:
                                      throw Error(`Unsupported subscription tier: ${e}`);
                              }
                          })(n),
                      }),
                  ],
              });
          }
        : null;
