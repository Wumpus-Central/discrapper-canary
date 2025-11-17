n.d(t, { Z: () => h });
var i = n(54381),
    a = n(473749),
    r = n(442837),
    o = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    d = n(411477),
    u = n(594174),
    f = n(626135),
    _ = n(74538),
    g = n(981631),
    p = n(486324),
    x = n(474936),
    m = n(388032),
    N = n(637285);
function h(e) {
    let { analyticsSection: t, type: n } = e,
        h = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        A = _.ZP.canUseAnimatedAvatar(h),
        P = _.ZP.canUsePremiumProfileCustomization(h),
        b = (n === p.pC.BANNER && P) || (n === p.pC.AVATAR && A),
        { sourceAnalyticsLocations: v } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            b ||
                f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: v,
                });
        }, [b, t, v]),
        b)
    )
        return null;
    let E = (0, i.jsx)(s.Z, {
        className: N.__invalid_getNitroLink,
        size: o.zx.Sizes.SMALL,
        look: o.zx.Looks.LINK,
        color: o.zx.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        textOptions: { textOverride: m.intl.format(m.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: N.nitroPreviewUpsell,
        text: m.intl.format(m.t.Og803x, {}),
        button: E,
    });
}
