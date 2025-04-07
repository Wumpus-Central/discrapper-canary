i.d(t, { Z: () => T });
var n = i(200651),
    o = i(192379),
    r = i(442837),
    a = i(481060),
    l = i(100527),
    s = i(906732),
    c = i(118012),
    d = i(411477),
    u = i(197115),
    _ = i(594174),
    g = i(626135),
    h = i(74538),
    b = i(981631),
    f = i(486324),
    m = i(474936),
    p = i(388032),
    N = i(886563);
function T(e) {
    let { analyticsSection: t, type: i } = e,
        T = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        x = h.ZP.canUseAnimatedAvatar(T),
        E = h.ZP.canUsePremiumProfileCustomization(T),
        B = (i === f.pC.BANNER && E) || (i === f.pC.AVATAR && x),
        { sourceAnalyticsLocations: I } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            B ||
                g.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: I
                });
        }, [B, t, I]),
        B)
    )
        return null;
    let v = (0, n.jsx)(u.Z, {
        className: N.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        buttonText: p.NW.format(p.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: b.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, n.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: N.nitroPreviewUpsell,
        text: p.NW.format(p.t.Og8039, {}),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: v
    });
}
