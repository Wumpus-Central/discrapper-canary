n.d(i, { Z: () => f });
var t = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    d = n(118012),
    s = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    T = n(486324),
    x = n(474936),
    N = n(388032),
    b = n(171232);
function f(e) {
    let { analyticsSection: i, type: n } = e,
        f = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        E = h.ZP.canUseAnimatedAvatar(f),
        I = h.ZP.canUsePremiumProfileCustomization(f),
        p = (n === T.pC.BANNER && I) || (n === T.pC.AVATAR && E),
        { sourceAnalyticsLocations: C } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            p ||
                g.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: i,
                    location_stack: C
                });
        }, [p, i, C]),
        p)
    )
        return null;
    let B = (0, t.jsx)(u.Z, {
        className: b.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        buttonText: N.intl.format(N.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, t.jsx)(s.Z, {
        reducedRightPadding: !0,
        className: b.nitroPreviewUpsell,
        text: N.intl.format(N.t.Og8039, {}),
        textSize: d.Z.Sizes.SIZE_14,
        textColor: d.Z.Colors.HEADER_PRIMARY,
        button: B
    });
}
