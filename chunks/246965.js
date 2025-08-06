n.d(t, { Z: () => y }), n(415506);
var r = n(255367);
n(73800);
var i = n(990547),
    o = n(481060),
    a = n(774078),
    s = n(100527),
    l = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    f = n(474936),
    _ = n(981631),
    p = n(388032),
    h = n(131715);
function m(e) {
    switch (e) {
        case f.Si.TIER_0:
            return s.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
        case f.Si.TIER_2:
            return s.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function g(e) {
    switch (e) {
        case f.Si.TIER_0:
            return o.DM8.PREMIUM_TIER_0;
        case f.Si.TIER_2:
            return o.DM8.PREMIUM_TIER_2;
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function E(e, t) {
    switch (e) {
        case f.Si.TIER_0:
            return t.days > 0
                ? p.intl.formatToPlainString(p.t.sP5OqK, { days: t.days })
                : t.hours > 0
                  ? p.intl.formatToPlainString(p.t["7Lhfu7"], { hours: t.hours })
                  : p.intl.formatToPlainString(p.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case f.Si.TIER_2:
            return t.days > 0
                ? p.intl.formatToPlainString(p.t["4prs5e"], { days: t.days })
                : t.hours > 0
                  ? p.intl.formatToPlainString(p.t.OD5nIS, { hours: t.hours })
                  : p.intl.formatToPlainString(p.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
function b(e) {
    switch (e) {
        case f.Si.TIER_0:
            return p.intl.string(p.t.mCG029);
        case f.Si.TIER_2:
            return p.intl.string(p.t["7590PT"]);
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let y = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: s } = e,
        { analyticsLocations: f } = (0, l.ZP)(m(s)),
        p = (0, d.N)(),
        y = (0, a.Z)(null != p && null != p.expires_at ? Date.parse(p.expires_at) : 0),
        O =
            null == p ||
            (null == (t = p.subscription_trial) ? void 0 : t.sku_id) !== s ||
            null == p.expires_at ||
            Object.values(y).every((e) => 0 === e);
    return ((0, c.Z)(
        {
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == p ? void 0 : p.trial_id },
        },
        { disableTrack: O },
    ),
    O)
        ? null
        : (0, r.jsxs)(o.qXd, {
              color: g(s),
              children: [
                  (0, r.jsx)(o.RyX, { onClick: n }),
                  (0, r.jsx)(o.SrA, {
                      size: "md",
                      color: "currentColor",
                      className: h.premiumIcon,
                  }),
                  E(s, y),
                  (0, r.jsx)(o.EyT, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: p.trial_id,
                              subscriptionTier: s,
                              analyticsLocations: f,
                              analyticsObject: {
                                  page: _.ZY5.IN_APP,
                                  section: _.jXE.NOTIFICATION_BAR,
                                  object: _.qAy.BUTTON_CTA,
                              },
                          });
                      },
                      children: b(s),
                  }),
              ],
          });
};
