n.d(i, { Z: () => T });
var t = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(118012),
    d = n(411477),
    u = n(197115),
    g = n(594174),
    f = n(626135),
    _ = n(74538),
    b = n(981631),
    p = n(486324),
    N = n(474936),
    m = n(388032),
    h = n(886563);
function T(e) {
    let { analyticsSection: i, type: n } = e,
        T = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        E = _.ZP.canUseAnimatedAvatar(T),
        x = _.ZP.canUsePremiumProfileCustomization(T),
        j = (n === p.pC.BANNER && x) || (n === p.pC.AVATAR && E),
        { sourceAnalyticsLocations: I } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            j ||
                f.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: i,
                    location_stack: I
                });
        }, [j, i, I]),
        j)
    )
        return null;
    let P = (0, t.jsx)(u.Z, {
        className: h.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: m.NW.format(m.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: b.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, t.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: h.nitroPreviewUpsell,
        text: m.NW.format(m.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: P
    });
}
