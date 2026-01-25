n.d(t, {
    A: () => S,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(397927),
    s = n(496431),
    o = n(793574),
    l = n(688810),
    c = n(139286),
    u = n(532794),
    d = n(954571),
    f = n(975571),
    p = n(927578),
    _ = n(804412),
    h = n(234419),
    m = n(635995),
    g = n(915516),
    E = n(788868),
    y = n(652215),
    b = n(985018),
    O = n(237082);

function v(e) {
    switch (e) {
        case E.pe.TIER_0:
            return o.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case E.pe.TIER_2:
            return o.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}

function A(e) {
    switch (e) {
        case E.pe.TIER_0:
            return a.Hv$.PREMIUM_TIER_0;
        case E.pe.TIER_2:
            return a.Hv$.PREMIUM_TIER_2;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}

function I(e) {
    switch (e) {
        case E.pe.TIER_0:
            return b.intl.string(b.t.mCG023);
        case E.pe.TIER_2:
            return b.intl.string(b.t.J61px0);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let S = function (e) {
    var t, n, o;
    let { dismissCurrentNotice: b, subscriptionTier: S } = e,
        { analyticsLocations: T } = (0, l.Ay)(v(S)),
        C = (0, h.V)(),
        N = (0, s.A)(null != C && null != C.expires_at ? Date.parse(C.expires_at) : 0),
        { variant: w, showNagbar: R } = (0, _.Ay)("PremiumTrialEndingNotice"),
        P =
            null == C ||
            (null == (t = C.subscription_trial) ? void 0 : t.sku_id) !== S ||
            null == C.expires_at ||
            Object.values(N).every((e) => 0 === e) ||
            (C.trial_id !== E.Dw && !R);
    if (
        ((0, c.A)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: {
                    trial_id: null == C ? void 0 : C.trial_id,
                },
            },
            {
                disableTrack: P,
            },
        ),
        P)
    )
        return null;
    let D = S === E.pe.TIER_2 ? y.kqX.PREMIUM_TIER_2_TRIAL_ENDING : y.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        x = () => {
            (0, u.A)({
                trialId: C.trial_id,
                subscriptionTier: S,
                analyticsLocations: T,
                analyticsObject: {
                    page: y.liQ.IN_APP,
                    section: y.JJy.NOTIFICATION_BAR,
                    object: y.ZSU.BUTTON_CTA,
                },
            }),
                d.default.track(y.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: D,
                    trial_id: C.trial_id,
                });
        },
        L = (0, p.re)({
            intervalType: null == (n = C.subscription_trial) ? void 0 : n.interval,
            intervalCount: null == (o = C.subscription_trial) ? void 0 : o.interval_count,
        }),
        j = f.A.getArticleURL(C.trial_id === E.yo ? y.MVz.NITRO_TRIAL_FOR_ALL : y.MVz.PREMIUM_TRIAL);
    return w === _.CJ.NAGBAR_REFRESH && (null == C ? void 0 : C.trial_id) !== E.Dw
        ? (0, r.jsxs)(m.T0, {
              onClick: () => {
                  b(),
                      d.default.track(y.HAw.APP_NOTICE_CLOSED, {
                          notice_type: D,
                          trial_id: C.trial_id,
                      });
              },
              children: [
                  (0, r.jsx)(m.In, {
                      children: (0, g.GZ)(S, N, L, j),
                  }),
                  (0, r.jsx)(m.fY, {
                      onClick: x,
                      text: I(S),
                  }),
              ],
          })
        : (0, r.jsxs)(a.$Td, {
              color: A(S),
              children: [
                  (0, r.jsx)(a.PMB, {
                      noticeType: D,
                      onClick: b,
                  }),
                  (0, r.jsx)(a.tvc, {
                      size: "md",
                      color: "currentColor",
                      className: O.PC,
                  }),
                  (0, g.GZ)(S, N, L, j),
                  (0, r.jsx)(a.zr9, {
                      onClick: x,
                      children: I(S),
                  }),
              ],
          });
};
