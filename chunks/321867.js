n.d(e, { Z: () => y });
var o = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    u = n(411477),
    _ = n(594174),
    d = n(626135),
    f = n(74538),
    m = n(981631),
    p = n(486324),
    b = n(474936),
    g = n(388032),
    v = n(637285);
function y(t) {
    let { analyticsSection: e, type: n } = t,
        y = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        x = f.ZP.canUseAnimatedAvatar(y),
        N = f.ZP.canUsePremiumProfileCustomization(y),
        h = (n === p.pC.BANNER && N) || (n === p.pC.AVATAR && x),
        { sourceAnalyticsLocations: C } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (r.useEffect(() => {
            h ||
                d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: C,
                });
        }, [h, e, C]),
        h)
    )
        return null;
    let A = (0, o.jsx)(s.Z, {
        className: v.__invalid_getNitroLink,
        size: a.zx.Sizes.SMALL,
        look: a.zx.Looks.LINK,
        color: a.zx.Colors.LINK,
        subscriptionTier: b.Si.TIER_2,
        textOptions: { textOverride: g.intl.format(g.t["944tDg"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: v.nitroPreviewUpsell,
        text: g.intl.format(g.t.Og8039, {}),
        button: A,
    });
}
