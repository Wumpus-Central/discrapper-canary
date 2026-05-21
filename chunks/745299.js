n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(562708),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    c = n(139286),
    o = n(532794),
    d = n(174459),
    u = n(975571),
    E = n(428262),
    A = n(234419),
    _ = n(635995),
    T = n(99462),
    I = n(788868),
    N = n(652215),
    R = n(375708);
let m =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: m } = (0, a.Ay)(
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
                  C = (0, A.V)(),
                  p = (0, r.A)(null != C && null != C.expires_at ? Date.parse(C.expires_at) : 0),
                  S =
                      null == C ||
                      C.subscription_trial?.sku_id !== n ||
                      null == C.expires_at ||
                      Object.values(p).every((e) => 0 === e);
              if (
                  ((0, c.A)(
                      {
                          type: l.ImpressionTypes.VIEW,
                          name: l.ImpressionNames.TRIAL_NOTICE,
                          properties: { trial_id: C?.trial_id },
                      },
                      { disableTrack: S },
                  ),
                  S)
              )
                  return null;
              let O = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  g = (0, E.re)({
                      intervalType: C.subscription_trial?.interval,
                      intervalCount: C.subscription_trial?.interval_count,
                  }),
                  h = u.A.getArticleURL(C.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
              return (0, i.jsxs)(_.T0, {
                  onClick: () => {
                      t(), d.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: O, trial_id: C.trial_id });
                  },
                  children: [
                      (0, i.jsx)(_.In, { children: (0, T.GZ)(n, p, g, h) }),
                      (0, i.jsx)(_.fY, {
                          onClick: () => {
                              (0, o.A)({
                                  trialId: C.trial_id,
                                  subscriptionTier: n,
                                  analyticsLocations: m,
                                  analyticsObject: {
                                      page: N.liQ.IN_APP,
                                      section: N.JJy.NOTIFICATION_BAR,
                                      object: N.ZSU.BUTTON_CTA,
                                  },
                              }),
                                  d.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                      notice_type: O,
                                      trial_id: C.trial_id,
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
