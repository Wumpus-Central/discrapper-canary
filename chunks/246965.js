n.d(t, { Z: () => v }), n(415506);
var r = n(951288);
n(647438);
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
    E = n(50953);
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
            return g.intl.string(g.t.mCG029);
        case h.Si.TIER_2:
            return g.intl.string(g.t["7590PT"]);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let v = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: s } = e,
        { analyticsLocations: h } = (0, l.ZP)(b(s)),
        g = (0, f.N)(),
        v = (0, o.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0),
        { variant: I } = (0, d.ZP)("PremiumTrialEndingNotice"),
        T =
            null == g ||
            (null == (t = g.subscription_trial) ? void 0 : t.sku_id) !== s ||
            null == g.expires_at ||
            Object.values(v).every((e) => 0 === e);
    if (
        ((0, c.Z)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: null == g ? void 0 : g.trial_id },
            },
            { disableTrack: T },
        ),
        T)
    )
        return null;
    let S = () => {
        (0, u.Z)({
            trialId: g.trial_id,
            subscriptionTier: s,
            analyticsLocations: h,
            analyticsObject: {
                page: m.ZY5.IN_APP,
                section: m.jXE.NOTIFICATION_BAR,
                object: m.qAy.BUTTON_CTA,
            },
        });
    };
    return I === d.tE.NAGBAR_REFRESH
        ? (0, r.jsxs)(_.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(_.Jy, { children: (0, p.kj)(s, v) }),
                  (0, r.jsx)(_.OJ, {
                      onClick: S,
                      text: O(s),
                  }),
              ],
          })
        : (0, r.jsxs)(a.qXd, {
              color: y(s),
              children: [
                  (0, r.jsx)(a.RyX, { onClick: n }),
                  (0, r.jsx)(a.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: E.premiumIcon,
                  }),
                  (0, p.kj)(s, v),
                  (0, r.jsx)(a.EyT, {
                      onClick: S,
                      children: O(s),
                  }),
              ],
          });
};
