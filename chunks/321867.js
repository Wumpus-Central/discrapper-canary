n.d(e, { Z: () => N });
var i = n(255367),
    o = n(73800),
    a = n(442837),
    r = n(755721),
    l = n(100527),
    s = n(906732),
    d = n(767714),
    c = n(411477),
    u = n(594174),
    _ = n(626135),
    h = n(74538),
    g = n(981631),
    m = n(486324),
    f = n(474936),
    x = n(388032),
    p = n(886563);
function N(t) {
    let { analyticsSection: e, type: n } = t,
        N = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        v = h.ZP.canUseAnimatedAvatar(N),
        y = h.ZP.canUsePremiumProfileCustomization(N),
        b = (n === m.pC.BANNER && y) || (n === m.pC.AVATAR && v),
        { sourceAnalyticsLocations: A } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            b ||
                _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A
                });
        }, [b, e, A]),
        b)
    )
        return null;
    let B = (0, i.jsx)(d.Z, {
        className: p.__invalid_getNitroLink,
        size: r.zx.Sizes.SMALL,
        look: r.zx.Looks.LINK,
        color: r.zx.Colors.LINK,
        subscriptionTier: f.Si.TIER_2,
        textOptions: { textOverride: x.intl.format(x.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: g.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(c.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: x.intl.format(x.t.Og8039, {}),
        button: B
    });
}
