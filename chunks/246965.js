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
    p = n(959052),
    _ = n(533246),
    m = n(474936),
    h = n(981631),
    g = n(388032),
    E = n(710930);
function b(e) {
    switch (e) {
        case m.Si.TIER_0:
            return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case m.Si.TIER_2:
            return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function y(e) {
    switch (e) {
        case m.Si.TIER_0:
            return a.DM8.PREMIUM_TIER_0;
        case m.Si.TIER_2:
            return a.DM8.PREMIUM_TIER_2;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function O(e) {
    switch (e) {
        case m.Si.TIER_0:
            return g.intl.string(g.t.mCG023);
        case m.Si.TIER_2:
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
        S = (0, o.Z)(null != v && null != v.expires_at ? Date.parse(v.expires_at) : 0),
        { variant: I, showNagbar: T } = (0, d.ZP)("PremiumTrialEndingNotice"),
        C =
            null == v ||
            (null == (t = v.subscription_trial) ? void 0 : t.sku_id) !== s ||
            null == v.expires_at ||
            Object.values(S).every((e) => 0 === e) ||
            (v.trial_id !== m.a7 && !T);
    if (
        ((0, c.Z)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: null == v ? void 0 : v.trial_id },
            },
            { disableTrack: C },
        ),
        C)
    )
        return null;
    let A = () => {
        (0, u.Z)({
            trialId: v.trial_id,
            subscriptionTier: s,
            analyticsLocations: g,
            analyticsObject: {
                page: h.ZY5.IN_APP,
                section: h.jXE.NOTIFICATION_BAR,
                object: h.qAy.BUTTON_CTA,
            },
        });
    };
    return I === d.tE.NAGBAR_REFRESH && (null == v ? void 0 : v.trial_id) !== m.a7
        ? (0, r.jsxs)(p.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(p.Jy, { children: (0, _.kj)(s, S) }),
                  (0, r.jsx)(p.OJ, {
                      onClick: A,
                      text: O(s),
                  }),
              ],
          })
        : (0, r.jsxs)(a.qXd, {
              color: y(s),
              children: [
                  (0, r.jsx)(a.RyX, {
                      noticeType:
                          s === m.Si.TIER_2 ? h.kVF.PREMIUM_TIER_2_TRIAL_ENDING : h.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
                      onClick: n,
                  }),
                  (0, r.jsx)(a.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: E.premiumIcon,
                  }),
                  (0, _.kj)(s, S),
                  (0, r.jsx)(a.EyT, {
                      onClick: A,
                      children: O(s),
                  }),
              ],
          });
};
