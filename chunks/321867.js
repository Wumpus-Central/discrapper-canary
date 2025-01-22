n.d(e, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(118012),
    u = n(411477),
    d = n(197115),
    b = n(594174),
    _ = n(626135),
    g = n(74538),
    f = n(981631),
    m = n(486324),
    p = n(474936),
    h = n(388032),
    C = n(639907);
function N(t) {
    let { analyticsSection: e, type: n } = t,
        N = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        x = g.ZP.canUseAnimatedAvatar(N),
        E = g.ZP.canUsePremiumProfileCustomization(N),
        v = (n === m.pC.BANNER && E) || (n === m.pC.AVATAR && x),
        { sourceAnalyticsLocations: A } = (0, l.ZP)(s.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !v &&
                _.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A
                });
        }, [v, e, A]),
        v)
    )
        return null;
    let R = (0, i.jsx)(d.Z, {
        className: C.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: h.intl.format(h.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: C.nitroPreviewUpsell,
        text: h.intl.format(h.t.Og8039, {}),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: R
    });
}
