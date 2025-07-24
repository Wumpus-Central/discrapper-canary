n.d(e, { Z: () => C });
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
    f = n(74538),
    m = n(981631),
    p = n(486324),
    b = n(474936),
    g = n(388032),
    v = n(886563);
function C(t) {
    let { analyticsSection: e, type: n } = t,
        C = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        x = f.ZP.canUseAnimatedAvatar(C),
        y = f.ZP.canUsePremiumProfileCustomization(C),
        N = (n === p.pC.BANNER && y) || (n === p.pC.AVATAR && x),
        { sourceAnalyticsLocations: h } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (r.useEffect(() => {
            N ||
                d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: h
                });
        }, [N, e, h]),
        N)
    )
        return null;
    let A = (0, o.jsx)(s.Z, {
        className: v.__invalid_getNitroLink,
        size: a.zx.Sizes.SMALL,
        look: a.zx.Looks.LINK,
        color: a.zx.Colors.LINK,
        subscriptionTier: b.Si.TIER_2,
        textOptions: { textOverride: g.intl.format(g.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: v.nitroPreviewUpsell,
        text: g.intl.format(g.t.Og8039, {}),
        button: A
    });
}
