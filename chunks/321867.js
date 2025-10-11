n.d(t, { Z: () => h });
var i = n(951288),
    a = n(647438),
    o = n(442837),
    r = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    d = n(411477),
    u = n(594174),
    f = n(626135),
    g = n(74538),
    _ = n(981631),
    p = n(486324),
    m = n(474936),
    N = n(388032),
    x = n(637285);
function h(e) {
    let { analyticsSection: t, type: n } = e,
        h = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        A = g.ZP.canUseAnimatedAvatar(h),
        b = g.ZP.canUsePremiumProfileCustomization(h),
        P = (n === p.pC.BANNER && b) || (n === p.pC.AVATAR && A),
        { sourceAnalyticsLocations: v } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            P ||
                f.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: v,
                });
        }, [P, t, v]),
        P)
    )
        return null;
    let E = (0, i.jsx)(s.Z, {
        className: x.__invalid_getNitroLink,
        size: r.zx.Sizes.SMALL,
        look: r.zx.Looks.LINK,
        color: r.zx.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        textOptions: { textOverride: N.intl.format(N.t["944tDg"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: _.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: x.nitroPreviewUpsell,
        text: N.intl.format(N.t.Og8039, {}),
        button: E,
    });
}
