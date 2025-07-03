n.d(e, { Z: () => b });
var i = n(255367),
    o = n(73800),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    u = n(411477),
    d = n(594174),
    _ = n(626135),
    g = n(74538),
    m = n(981631),
    h = n(486324),
    f = n(474936),
    p = n(388032),
    x = n(886563);
function b(t) {
    let { analyticsSection: e, type: n } = t,
        b = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        y = g.ZP.canUseAnimatedAvatar(b),
        v = g.ZP.canUsePremiumProfileCustomization(b),
        N = (n === h.pC.BANNER && v) || (n === h.pC.AVATAR && y),
        { sourceAnalyticsLocations: C } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            N ||
                _.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: C
                });
        }, [N, e, C]),
        N)
    )
        return null;
    let A = (0, i.jsx)(s.Z, {
        className: x.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: f.Si.TIER_2,
        textOptions: { textOverride: p.intl.format(p.t['944tDg'], {}) },
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
        text: p.intl.format(p.t.Og8039, {}),
        button: A
    });
}
