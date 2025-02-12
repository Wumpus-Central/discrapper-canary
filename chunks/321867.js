n.d(t, { Z: () => E });
var i = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    s = n(906732),
    c = n(118012),
    d = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    p = n(486324),
    x = n(474936),
    f = n(388032),
    C = n(832924);
function E(e) {
    let { analyticsSection: t, type: n } = e,
        E = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        b = h.ZP.canUseAnimatedAvatar(E),
        N = h.ZP.canUsePremiumProfileCustomization(E),
        v = (n === p.pC.BANNER && N) || (n === p.pC.AVATAR && b),
        { sourceAnalyticsLocations: T } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            v ||
                g.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: T
                });
        }, [v, t, T]),
        v)
    )
        return null;
    let B = (0, i.jsx)(u.Z, {
        className: C.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        buttonText: f.intl.format(f.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: C.nitroPreviewUpsell,
        text: f.intl.format(f.t.Og8039, {}),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: B
    });
}
