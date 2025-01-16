n.d(i, {
    Z: function () {
        return x;
    }
});
var t = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(100527),
    c = n(906732),
    s = n(118012),
    d = n(411477),
    u = n(197115),
    g = n(594174),
    f = n(626135),
    p = n(74538),
    _ = n(981631),
    h = n(486324),
    N = n(474936),
    T = n(388032),
    m = n(639907);
function x(e) {
    let { analyticsSection: i, type: n } = e,
        x = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        E = p.ZP.canUseAnimatedAvatar(x),
        b = p.ZP.canUsePremiumProfileCustomization(x),
        I = (n === h.pC.BANNER && b) || (n === h.pC.AVATAR && E),
        { sourceAnalyticsLocations: B } = (0, c.ZP)(a.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !I &&
                f.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: i,
                    location_stack: B
                });
        }, [I, i, B]),
        I)
    )
        return null;
    let C = (0, t.jsx)(u.Z, {
        className: m.__invalid_getNitroLink,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: T.intl.format(T.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: _.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, t.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: m.nitroPreviewUpsell,
        text: T.intl.format(T.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: C
    });
}
