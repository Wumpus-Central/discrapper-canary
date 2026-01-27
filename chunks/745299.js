n.d(t, {
    A: () => y,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(397927),
    o = n(496431),
    a = n(793574),
    s = n(688810),
    c = n(139286),
    u = n(532794),
    E = n(954571),
    d = n(975571),
    _ = n(927578),
    T = n(804412),
    A = n(234419),
    I = n(635995),
    O = n(915516),
    N = n(788868),
    p = n(652215),
    R = n(985018),
    S = n(237082);

function P(e) {
    switch (e) {
        case N.pe.TIER_0:
            return R.intl.string(R.t.mCG023);
        case N.pe.TIER_2:
            return R.intl.string(R.t.J61px0);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let y =
    21552 == n.j
        ? function (e) {
              var t, n, R;
              let { dismissCurrentNotice: y, subscriptionTier: f } = e,
                  { analyticsLocations: C } = (0, s.Ay)(
                      (function (e) {
                          switch (e) {
                              case N.pe.TIER_0:
                                  return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                              case N.pe.TIER_2:
                                  return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                              default:
                                  throw Error("Unsupported subscription tier: ".concat(e));
                          }
                      })(f),
                  ),
                  D = (0, A.V)(),
                  m = (0, o.A)(null != D && null != D.expires_at ? Date.parse(D.expires_at) : 0),
                  { variant: g, showNagbar: h } = (0, T.Ay)("PremiumTrialEndingNotice"),
                  U =
                      null == D ||
                      (null == (t = D.subscription_trial) ? void 0 : t.sku_id) !== f ||
                      null == D.expires_at ||
                      Object.values(m).every((e) => 0 === e) ||
                      (D.trial_id !== N.Dw && !h);
              if (
                  ((0, c.A)(
                      {
                          type: i.ImpressionTypes.VIEW,
                          name: i.ImpressionNames.TRIAL_NOTICE,
                          properties: {
                              trial_id: null == D ? void 0 : D.trial_id,
                          },
                      },
                      {
                          disableTrack: U,
                      },
                  ),
                  U)
              )
                  return null;
              let b = f === N.pe.TIER_2 ? p.kqX.PREMIUM_TIER_2_TRIAL_ENDING : p.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                  M = () => {
                      (0, u.A)({
                          trialId: D.trial_id,
                          subscriptionTier: f,
                          analyticsLocations: C,
                          analyticsObject: {
                              page: p.liQ.IN_APP,
                              section: p.JJy.NOTIFICATION_BAR,
                              object: p.ZSU.BUTTON_CTA,
                          },
                      }),
                          E.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                              notice_type: b,
                              trial_id: D.trial_id,
                          });
                  },
                  j = (0, _.re)({
                      intervalType: null == (n = D.subscription_trial) ? void 0 : n.interval,
                      intervalCount: null == (R = D.subscription_trial) ? void 0 : R.interval_count,
                  }),
                  k = d.A.getArticleURL(D.trial_id === N.yo ? p.MVz.NITRO_TRIAL_FOR_ALL : p.MVz.PREMIUM_TRIAL);
              return g === T.CJ.NAGBAR_REFRESH && (null == D ? void 0 : D.trial_id) !== N.Dw
                  ? (0, r.jsxs)(I.T0, {
                        onClick: () => {
                            y(),
                                E.default.track(p.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: b,
                                    trial_id: D.trial_id,
                                });
                        },
                        children: [
                            (0, r.jsx)(I.In, {
                                children: (0, O.GZ)(f, m, j, k),
                            }),
                            (0, r.jsx)(I.fY, {
                                onClick: M,
                                text: P(f),
                            }),
                        ],
                    })
                  : (0, r.jsxs)(l.$Td, {
                        color: (function (e) {
                            switch (e) {
                                case N.pe.TIER_0:
                                    return l.Hv$.PREMIUM_TIER_0;
                                case N.pe.TIER_2:
                                    return l.Hv$.PREMIUM_TIER_2;
                                default:
                                    throw Error("Unsupported subscription tier: ".concat(e));
                            }
                        })(f),
                        children: [
                            (0, r.jsx)(l.PMB, {
                                noticeType: b,
                                onClick: y,
                            }),
                            (0, r.jsx)(l.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: S.PC,
                            }),
                            (0, O.GZ)(f, m, j, k),
                            (0, r.jsx)(l.zr9, {
                                onClick: M,
                                children: P(f),
                            }),
                        ],
                    });
          }
        : null;
