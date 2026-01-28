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
    A = n(804412),
    T = n(234419),
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
let y = function (e) {
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
        m = (0, T.V)(),
        D = (0, o.A)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0),
        { variant: g, showNagbar: h } = (0, A.Ay)("PremiumTrialEndingNotice"),
        b =
            null == m ||
            (null == (t = m.subscription_trial) ? void 0 : t.sku_id) !== f ||
            null == m.expires_at ||
            Object.values(D).every((e) => 0 === e) ||
            (m.trial_id !== N.Dw && !h);
    if (
        ((0, c.A)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: {
                    trial_id: null == m ? void 0 : m.trial_id,
                },
            },
            {
                disableTrack: b,
            },
        ),
        b)
    )
        return null;
    let U = f === N.pe.TIER_2 ? p.kqX.PREMIUM_TIER_2_TRIAL_ENDING : p.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        M = () => {
            (0, u.A)({
                trialId: m.trial_id,
                subscriptionTier: f,
                analyticsLocations: C,
                analyticsObject: {
                    page: p.liQ.IN_APP,
                    section: p.JJy.NOTIFICATION_BAR,
                    object: p.ZSU.BUTTON_CTA,
                },
            }),
                E.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: U,
                    trial_id: m.trial_id,
                });
        },
        j = (0, _.re)({
            intervalType: null == (n = m.subscription_trial) ? void 0 : n.interval,
            intervalCount: null == (R = m.subscription_trial) ? void 0 : R.interval_count,
        }),
        k = d.A.getArticleURL(m.trial_id === N.yo ? p.MVz.NITRO_TRIAL_FOR_ALL : p.MVz.PREMIUM_TRIAL);
    return g === A.CJ.NAGBAR_REFRESH && (null == m ? void 0 : m.trial_id) !== N.Dw
        ? (0, r.jsxs)(I.T0, {
              onClick: () => {
                  y(),
                      E.default.track(p.HAw.APP_NOTICE_CLOSED, {
                          notice_type: U,
                          trial_id: m.trial_id,
                      });
              },
              children: [
                  (0, r.jsx)(I.In, {
                      children: (0, O.GZ)(f, D, j, k),
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
                      noticeType: U,
                      onClick: y,
                  }),
                  (0, r.jsx)(l.tvc, {
                      size: "md",
                      color: "currentColor",
                      className: S.PC,
                  }),
                  (0, O.GZ)(f, D, j, k),
                  (0, r.jsx)(l.zr9, {
                      onClick: M,
                      children: P(f),
                  }),
              ],
          });
};
