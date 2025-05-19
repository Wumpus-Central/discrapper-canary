n.d(t, { Z: () => h });
var i = n(255367),
    a = n(73800),
    o = n(442837),
    l = n(481060),
    r = n(100527),
    c = n(906732),
    s = n(118012),
    d = n(767714),
    u = n(411477),
    _ = n(594174),
    f = n(626135),
    g = n(74538),
    p = n(981631),
    N = n(486324),
    m = n(474936),
    x = n(388032),
    A = n(365822);
function h(e) {
    let { analyticsSection: t, type: n } = e,
        h = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        P = g.ZP.canUseAnimatedAvatar(h),
        b = g.ZP.canUsePremiumProfileCustomization(h),
        E = (n === N.pC.BANNER && b) || (n === N.pC.AVATAR && P),
        { sourceAnalyticsLocations: R } = (0, c.ZP)(r.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            E ||
                f.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: R
                });
        }, [E, t, R]),
        E)
    )
        return null;
    let j = (0, i.jsx)(d.Z, {
        className: A.__invalid_getNitroLink,
        size: l.zxk.Sizes.SMALL,
        look: l.zxk.Looks.LINK,
        color: l.zxk.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        textOptions: { textOverride: x.intl.format(x.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: p.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: A.nitroPreviewUpsell,
        text: x.intl.format(x.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: j
    });
}
