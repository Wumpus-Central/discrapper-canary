n.d(t, { Z: () => T });
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
    f = n(74538),
    b = n(981631),
    m = n(486324),
    p = n(474936),
    h = n(388032),
    N = n(886563);
function T(e) {
    let { analyticsSection: t, type: n } = e,
        T = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        v = f.ZP.canUseAnimatedAvatar(T),
        x = f.ZP.canUsePremiumProfileCustomization(T),
        C = (n === m.pC.BANNER && x) || (n === m.pC.AVATAR && v),
        { sourceAnalyticsLocations: E } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            C ||
                g.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: E
                });
        }, [C, t, E]),
        C)
    )
        return null;
    let y = (0, i.jsx)(d.Z, {
        className: N.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: h.NW.format(h.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: b.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: N.nitroPreviewUpsell,
        text: h.NW.format(h.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: y
    });
}
