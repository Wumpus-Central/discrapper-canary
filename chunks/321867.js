o.d(e, { Z: () => b });
var n = o(200651),
    i = o(192379),
    a = o(442837),
    r = o(481060),
    l = o(100527),
    s = o(906732),
    c = o(118012),
    _ = o(411477),
    d = o(197115),
    u = o(594174),
    m = o(626135),
    g = o(74538),
    p = o(981631),
    f = o(486324),
    x = o(474936),
    C = o(388032),
    v = o(171232);
function b(t) {
    let { analyticsSection: e, type: o } = t,
        b = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        h = g.ZP.canUseAnimatedAvatar(b),
        A = g.ZP.canUsePremiumProfileCustomization(b),
        E = (o === f.pC.BANNER && A) || (o === f.pC.AVATAR && h),
        { sourceAnalyticsLocations: N } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            E ||
                m.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: N
                });
        }, [E, e, N]),
        E)
    )
        return null;
    let P = (0, n.jsx)(d.Z, {
        className: v.__invalid_getNitroLink,
        size: r.zxk.Sizes.SMALL,
        look: r.zxk.Looks.LINK,
        color: r.zxk.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        buttonText: C.intl.format(C.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: p.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, n.jsx)(_.Z, {
        reducedRightPadding: !0,
        className: v.nitroPreviewUpsell,
        text: C.intl.format(C.t.Og8039, {}),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: P
    });
}
