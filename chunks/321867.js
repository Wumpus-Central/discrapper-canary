n.d(t, { Z: () => h });
var i = n(255367),
    a = n(73800),
    o = n(442837),
    r = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    d = n(411477),
    u = n(594174),
    f = n(626135),
    _ = n(74538),
    g = n(981631),
    p = n(486324),
    m = n(474936),
    N = n(388032),
    x = n(886563);
function h(e) {
    let { analyticsSection: t, type: n } = e,
        h = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        A = _.ZP.canUseAnimatedAvatar(h),
        P = _.ZP.canUsePremiumProfileCustomization(h),
        b = (n === p.pC.BANNER && P) || (n === p.pC.AVATAR && A),
        { sourceAnalyticsLocations: E } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            b ||
                f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: E
                });
        }, [b, t, E]),
        b)
    )
        return null;
    let R = (0, i.jsx)(s.Z, {
        className: x.__invalid_getNitroLink,
        size: r.zx.Sizes.SMALL,
        look: r.zx.Looks.LINK,
        color: r.zx.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        textOptions: { textOverride: N.intl.format(N.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: x.nitroPreviewUpsell,
        text: N.intl.format(N.t.Og8039, {}),
        button: R
    });
}
