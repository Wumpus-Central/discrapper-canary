n.d(e, { Z: () => x });
var o = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    u = n(411477),
    _ = n(594174),
    d = n(626135),
    m = n(74538),
    f = n(981631),
    p = n(486324),
    b = n(474936),
    g = n(388032),
    v = n(886563);
function x(t) {
    let { analyticsSection: e, type: n } = t,
        x = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        y = m.ZP.canUseAnimatedAvatar(x),
        C = m.ZP.canUsePremiumProfileCustomization(x),
        h = (n === p.pC.BANNER && C) || (n === p.pC.AVATAR && y),
        { sourceAnalyticsLocations: A } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (r.useEffect(() => {
            h ||
                d.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A
                });
        }, [h, e, A]),
        h)
    )
        return null;
    let N = (0, o.jsx)(s.Z, {
        className: v.__invalid_getNitroLink,
        size: a.zx.Sizes.SMALL,
        look: a.zx.Looks.LINK,
        color: a.zx.Colors.LINK,
        subscriptionTier: b.Si.TIER_2,
        textOptions: { textOverride: g.intl.format(g.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: v.nitroPreviewUpsell,
        text: g.intl.format(g.t.Og8039, {}),
        button: N
    });
}
