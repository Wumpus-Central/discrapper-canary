"use strict";
n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var r = n(110259),
    l = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    E = n(532794),
    c = n(954571),
    _ = n(975571),
    d = n(927578),
    A = n(234419),
    u = n(635995),
    T = n(915516),
    I = n(788868),
    N = n(652215),
    R = n(985018);
let S =
    21552 == n.j
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
                  C = (0, l.A)(null != O && null != O.expires_at ? Date.parse(O.expires_at) : 0),
                  p =
                      null == O ||
                      O.subscription_trial?.sku_id !== n ||
                      null == O.expires_at ||
                      Object.values(C).every((e) => 0 === e);
              if (
                  ((0, o.A)(
                      {
                          type: r.ImpressionTypes.VIEW,
                          name: r.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: O?.trial_id },
                      },
                      { disableTrack: p },
                  ),
                  p)
              )
                  return null;
              let P = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  D = (0, d.re)({
                      intervalType: O.subscription_trial?.interval,
                      intervalCount: O.subscription_trial?.interval_count,
                  }),
                  M = _.A.getArticleURL(O.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(u.T0, {
                  onClick: () => {
                      t(), c.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: P, trial_id: O.trial_id });
                  },
                  children: [
                      (0, i.jsx)(u.In, { children: (0, T.GZ)(n, C, D, M) }),
                      (0, i.jsx)(u.fY, {
                          onClick: () => {
                              (0, E.A)({
                                  trialId: O.trial_id,
                                  subscriptionTier: n,
                                  analyticsLocations: S,
                                  analyticsObject: {
                                      page: N.liQ.IN_APP,
                                      section: N.JJy.NOTIFICATION_BAR,
                                      object: N.ZSU.BUTTON_CTA,
                                  },
                              }),
                                  c.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: P,
                                      trial_id: O.trial_id,
                                  });
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
