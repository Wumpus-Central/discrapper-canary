"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(110259),
    l = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    c = n(532794),
    u = n(954571),
    d = n(975571),
    _ = n(927578),
    E = n(234419),
    A = n(635995),
    m = n(915516),
    I = n(788868),
    T = n(652215),
    N = n(985018);
let g =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: g } = (0, a.Ay)(
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
                  p = (0, E.V)(),
                  C = (0, l.A)(null != p && null != p.expires_at ? Date.parse(p.expires_at) : 0),
                  f =
                      null == p ||
                      p.subscription_trial?.sku_id !== n ||
                      null == p.expires_at ||
                      Object.values(C).every((e) => 0 === e);
              if (
                  ((0, o.A)(
                      {
                          type: r.ImpressionTypes.VIEW,
                          name: r.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: p?.trial_id },
                      },
                      { disableTrack: f },
                  ),
                  f)
              )
                  return null;
              let h = n === I.pe.TIER_2 ? T.kqX.PREMIUM_TIER_2_TRIAL_ENDING : T.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  R = (0, _.re)({
                      intervalType: p.subscription_trial?.interval,
                      intervalCount: p.subscription_trial?.interval_count,
                  }),
                  S = d.A.getArticleURL(p.trial_id === I.yo ? T.MVz.NITRO_TRIAL_FOR_ALL : T.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(A.T0, {
                  onClick: () => {
                      t(), u.default.track(T.HAw.APP_NOTICE_CLOSED, { notice_type: h, trial_id: p.trial_id });
                  },
                  children: [
                      (0, i.jsx)(A.In, { children: (0, m.GZ)(n, C, R, S) }),
                      (0, i.jsx)(A.fY, {
                          onClick: () => {
                              (0, c.A)({
                                  trialId: p.trial_id,
                                  subscriptionTier: n,
                                  analyticsLocations: g,
                                  analyticsObject: {
                                      page: T.liQ.IN_APP,
                                      section: T.JJy.NOTIFICATION_BAR,
                                      object: T.ZSU.BUTTON_CTA,
                                  },
                              }),
                                  u.default.track(T.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: h,
                                      trial_id: p.trial_id,
                                  });
                          },
                          text: (function (e) {
                              switch (e) {
                                  case I.pe.TIER_0:
                                      return N.intl.string(N.t.mCG023);
                                  case I.pe.TIER_2:
                                      return N.intl.string(N.t.J61px0);
                                  default:
                                      throw Error(`Unsupported subscription tier: ${e}`);
                              }
                          })(n),
                      }),
                  ],
              });
          }
        : null;
