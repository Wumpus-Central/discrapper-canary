n.d(e, { Z: () => y });
var i = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(118012),
    u = n(411477),
    d = n(197115),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    f = n(486324),
    p = n(474936),
    b = n(388032),
    x = n(886563);
function y(t) {
    let { analyticsSection: e, type: n } = t,
        y = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        N = h.ZP.canUseAnimatedAvatar(y),
        v = h.ZP.canUsePremiumProfileCustomization(y),
        C = (n === f.pC.BANNER && v) || (n === f.pC.AVATAR && N),
        { sourceAnalyticsLocations: A } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            C ||
                g.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A
                });
        }, [C, e, A]),
        C)
    )
        return null;
    let E = (0, i.jsx)(d.Z, {
        className: x.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: b.intl.format(b.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: x.nitroPreviewUpsell,
        text: b.intl.format(b.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: E
    });
}
