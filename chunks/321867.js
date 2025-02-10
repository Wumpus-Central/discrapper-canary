n.d(i, { Z: () => E });
var o = n(200651),
    t = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(100527),
    c = n(906732),
    s = n(118012),
    d = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    N = n(74538),
    T = n(981631),
    f = n(486324),
    m = n(474936),
    p = n(388032),
    x = n(171232);
function E(e) {
    let { analyticsSection: i, type: n } = e,
        E = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        h = N.ZP.canUseAnimatedAvatar(E),
        I = N.ZP.canUsePremiumProfileCustomization(E),
        b = (n === f.pC.BANNER && I) || (n === f.pC.AVATAR && h),
        { sourceAnalyticsLocations: B } = (0, c.ZP)(r.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (t.useEffect(() => {
            b ||
                g.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: i,
                    location_stack: B
                });
        }, [b, i, B]),
        b)
    )
        return null;
    let C = (0, o.jsx)(u.Z, {
        className: x.__invalid_getNitroLink,
        size: l.zxk.Sizes.SMALL,
        look: l.zxk.Looks.LINK,
        color: l.zxk.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        buttonText: p.intl.format(p.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: T.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: x.nitroPreviewUpsell,
        text: p.intl.format(p.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: C
    });
}
