i.d(n, { Z: () => h });
var t = i(200651),
    o = i(192379),
    r = i(442837),
    a = i(481060),
    l = i(100527),
    c = i(906732),
    s = i(118012),
    d = i(411477),
    u = i(197115),
    g = i(594174),
    _ = i(626135),
    f = i(74538),
    b = i(981631),
    p = i(486324),
    N = i(474936),
    m = i(388032),
    T = i(301995);
function h(e) {
    let { analyticsSection: n, type: i } = e,
        h = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        E = f.ZP.canUseAnimatedAvatar(h),
        x = f.ZP.canUsePremiumProfileCustomization(h),
        j = (i === p.pC.BANNER && x) || (i === p.pC.AVATAR && E),
        { sourceAnalyticsLocations: I } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            j ||
                _.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: n,
                    location_stack: I
                });
        }, [j, n, I]),
        j)
    )
        return null;
    let P = (0, t.jsx)(u.Z, {
        className: T.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: m.NW.format(m.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: n,
            object: b.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, t.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: T.nitroPreviewUpsell,
        text: m.NW.format(m.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: P
    });
}
