n.d(t, { Z: () => _ });
var i = n(54381),
    a = n(473749),
    o = n(442837),
    r = n(755721),
    l = n(100527),
    c = n(906732),
    s = n(767714),
    d = n(411477),
    u = n(594174),
    f = n(626135),
    b = n(74538),
    g = n(981631),
    p = n(486324),
    x = n(474936),
    N = n(388032),
    m = n(216246);
function _(e) {
    let { analyticsSection: t, type: n } = e,
        _ = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        h = b.ZP.canUseAnimatedAvatar(_),
        A = b.ZP.canUsePremiumProfileCustomization(_),
        P = (n === p.pC.BANNER && A) || (n === p.pC.AVATAR && h),
        { sourceAnalyticsLocations: v } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            P ||
                f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: v,
                });
        }, [P, t, v]),
        P)
    )
        return null;
    let E = (0, i.jsx)(s.Z, {
        className: m.__invalid_getNitroLink,
        size: r.zx.Sizes.SMALL,
        look: r.zx.Looks.LINK,
        color: r.zx.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        textOptions: { textOverride: N.intl.format(N.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: m.nitroPreviewUpsell,
        text: N.intl.format(N.t.Og803x, {}),
        button: E,
    });
}
