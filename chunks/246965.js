n.d(t, {
    A: () => y,
    Z: () => v,
}),
    n(415506);
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
    p = n(474936),
    h = n(981631),
    m = n(388032),
    g = n(50953);
function E(e) {
    switch (e) {
        case p.Si.TIER_0:
            return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case p.Si.TIER_2:
            return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function b(e) {
    switch (e) {
        case p.Si.TIER_0:
            return a.DM8.PREMIUM_TIER_0;
        case p.Si.TIER_2:
            return a.DM8.PREMIUM_TIER_2;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function y(e, t) {
    switch (e) {
        case p.Si.TIER_0:
            return t.days > 0
                ? m.intl.formatToPlainString(m.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? m.intl.formatToPlainString(m.t["7Lhfu7"], { hours: t.hours })
                  : m.intl.formatToPlainString(m.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case p.Si.TIER_2:
            return t.days > 0
                ? m.intl.formatToPlainString(m.t["4prs5b"], { days: t.days })
                : t.hours > 0
                  ? m.intl.formatToPlainString(m.t.OD5nIR, { hours: t.hours })
                  : m.intl.formatToPlainString(m.t.rvyXjD, { minutes: Math.max(t.minutes, 1) });
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function O(e) {
    switch (e) {
        case p.Si.TIER_0:
            return m.intl.string(m.t.mCG023);
        case p.Si.TIER_2:
            return m.intl.string(m.t["7590Pe"]);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let v = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: s } = e,
        { analyticsLocations: p } = (0, l.ZP)(E(s)),
        m = (0, f.N)(),
        v = (0, o.Z)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0),
        { variant: I } = (0, d.ZP)("PremiumTrialEndingNotice"),
        T =
            null == m ||
            (null == (t = m.subscription_trial) ? void 0 : t.sku_id) !== s ||
            null == m.expires_at ||
            Object.values(v).every((e) => 0 === e);
    if (
        ((0, c.Z)(
            {
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.TRIAL_NOTICE,
                properties: { trial_id: null == m ? void 0 : m.trial_id },
            },
            { disableTrack: T },
        ),
        T)
    )
        return null;
    let S = () => {
        (0, u.Z)({
            trialId: m.trial_id,
            subscriptionTier: s,
            analyticsLocations: p,
            analyticsObject: {
                page: h.ZY5.IN_APP,
                section: h.jXE.NOTIFICATION_BAR,
                object: h.qAy.BUTTON_CTA,
            },
        });
    };
    return I === d.tE.NAGBAR_REFRESH
        ? (0, r.jsxs)(_.eJ, {
              onClick: n,
              children: [
                  (0, r.jsx)(_.Jy, { children: y(s, v) }),
                  (0, r.jsx)(_.OJ, {
                      onClick: S,
                      text: O(s),
                  }),
              ],
          })
        : (0, r.jsxs)(a.qXd, {
              color: b(s),
              children: [
                  (0, r.jsx)(a.RyX, { onClick: n }),
                  (0, r.jsx)(a.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: g.premiumIcon,
                  }),
                  y(s, v),
                  (0, r.jsx)(a.EyT, {
                      onClick: S,
                      children: O(s),
                  }),
              ],
          });
};
