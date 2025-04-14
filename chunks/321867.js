n.d(e, { Z: () => x });
var o = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(118012),
    u = n(411477),
    d = n(197115),
    _ = n(594174),
    g = n(626135),
    m = n(74538),
    f = n(981631),
    h = n(486324),
    p = n(474936),
    N = n(388032),
    b = n(886563);
function x(t) {
    let { analyticsSection: e, type: n } = t,
        x = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        v = m.ZP.canUseAnimatedAvatar(x),
        y = m.ZP.canUsePremiumProfileCustomization(x),
        C = (n === h.pC.BANNER && y) || (n === h.pC.AVATAR && v),
        { sourceAnalyticsLocations: A } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            C ||
                g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A
                });
        }, [C, e, A]),
        C)
    )
        return null;
    let E = (0, o.jsx)(d.Z, {
        className: b.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: N.NW.format(N.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: b.nitroPreviewUpsell,
        text: N.NW.format(N.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: E
    });
}
