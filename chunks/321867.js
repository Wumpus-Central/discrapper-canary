n.d(e, { Z: () => b });
var i = n(951288),
    o = n(647438),
    r = n(442837),
    a = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    u = n(411477),
    d = n(594174),
    _ = n(626135),
    g = n(74538),
    h = n(981631),
    m = n(486324),
    f = n(474936),
    p = n(388032),
    x = n(637285);
function b(t) {
    let { analyticsSection: e, type: n } = t,
        b = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        y = g.ZP.canUseAnimatedAvatar(b),
        N = g.ZP.canUsePremiumProfileCustomization(b),
        v = (n === m.pC.BANNER && N) || (n === m.pC.AVATAR && y),
        { sourceAnalyticsLocations: A } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            v ||
                _.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A,
                });
        }, [v, e, A]),
        v)
    )
        return null;
    let C = (0, i.jsx)(s.Z, {
        className: x.__invalid_getNitroLink,
        size: a.zx.Sizes.SMALL,
        look: a.zx.Looks.LINK,
        color: a.zx.Colors.LINK,
        subscriptionTier: f.Si.TIER_2,
        textOptions: { textOverride: p.intl.format(p.t["944tDg"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: h.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: x.nitroPreviewUpsell,
        text: p.intl.format(p.t.Og8039, {}),
        button: C,
    });
}
