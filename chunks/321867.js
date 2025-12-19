n.d(t, { Z: () => x });
var o = n(54381),
    i = n(473749),
    r = n(442837),
    a = n(755721),
    l = n(100527),
    s = n(906732),
    c = n(767714),
    u = n(411477),
    b = n(594174),
    d = n(626135),
    f = n(74538),
    m = n(981631),
    p = n(486324),
    g = n(474936),
    v = n(388032),
    _ = n(216246);
function x(e) {
    let { analyticsSection: t, type: n } = e,
        x = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        A = f.ZP.canUseAnimatedAvatar(x),
        y = f.ZP.canUsePremiumProfileCustomization(x),
        C = (n === p.pC.BANNER && y) || (n === p.pC.AVATAR && A),
        { sourceAnalyticsLocations: h } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            C ||
                d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: h,
                });
        }, [C, t, h]),
        C)
    )
        return null;
    let P = (0, o.jsx)(c.Z, {
        className: _.__invalid_getNitroLink,
        size: a.zx.Sizes.SMALL,
        look: a.zx.Looks.LINK,
        color: a.zx.Colors.LINK,
        subscriptionTier: g.Si.TIER_2,
        textOptions: { textOverride: v.intl.format(v.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: m.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: _.nitroPreviewUpsell,
        text: v.intl.format(v.t.Og803x, {}),
        button: P,
    });
}
