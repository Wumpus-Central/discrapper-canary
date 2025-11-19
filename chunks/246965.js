n.d(t, { Z: () => v }), n(415506);
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(481060),
    o = n(774078),
    s = n(100527),
    l = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(931118),
    f = n(639119),
    _ = n(959052),
    p = n(533246),
    h = n(474936),
    m = n(981631),
    g = n(388032),
    E = n(655227);
function b(e) {
    switch (e) {
        case h.Si.TIER_0:
            return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case h.Si.TIER_2:
            return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function y(e) {
    switch (e) {
        case h.Si.TIER_0:
            return a.DM8.PREMIUM_TIER_0;
        case h.Si.TIER_2:
            return a.DM8.PREMIUM_TIER_2;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function O(e) {
    switch (e) {
        case h.Si.TIER_0:
            return g.intl.string(g.t.mCG023);
        case h.Si.TIER_2:
            return g.intl.string(g.t["7590Pe"]);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let v = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: s } = e,
        { analyticsLocations: g } = (0, l.ZP)(b(s)),
        v = (0, f.N)(),
        I = (0, o.Z)(null != v && null != v.expires_at ? Date.parse(v.expires_at) : 0),
        { variant: T, showNagbar: S } = (0, d.ZP)("PremiumTrialEndingNotice"),
        A =
            null == v ||
            (null == (t = v.subscription_trial) ? void 0 : t.sku_id) !== s ||
            null == v.expires_at ||
            Object.values(I).every((e) => 0 === e) ||
            (v.trial_id !== h.a7 && !S);
    if (
        ((0, c.Z)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: null == v ? void 0 : v.trial_id },
            },
            { disableTrack: A },
        ),
        A)
    )
        return null;
    let C = () => {
        (0, u.Z)({
            trialId: v.trial_id,
            subscriptionTier: s,
            analyticsLocations: g,
            analyticsObject: {
                page: m.ZY5.IN_APP,
                section: m.jXE.NOTIFICATION_BAR,
                object: m.qAy.BUTTON_CTA,
            },
        });
    };
    return T === d.tE.NAGBAR_REFRESH && (null == v ? void 0 : v.trial_id) !== h.a7
        ? (0, r.jsxs)(_.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(_.Jy, { children: (0, p.kj)(s, I) }),
                  (0, r.jsx)(_.OJ, {
                      onClick: C,
                      text: O(s),
                  }),
              ],
          })
        : (0, r.jsxs)(a.qXd, {
              color: y(s),
              children: [
                  (0, r.jsx)(a.RyX, {
                      noticeType:
                          s === h.Si.TIER_2 ? m.kVF.PREMIUM_TIER_2_TRIAL_ENDING : m.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
                      onClick: n,
                  }),
                  (0, r.jsx)(a.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: E.premiumIcon,
                  }),
                  (0, p.kj)(s, I),
                  (0, r.jsx)(a.EyT, {
                      onClick: C,
                      children: O(s),
                  }),
              ],
          });
};
