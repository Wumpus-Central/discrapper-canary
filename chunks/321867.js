i.d(e, { Z: () => v });
var n = i(54381),
    a = i(473749),
    r = i(442837),
    o = i(755721),
    l = i(100527),
    s = i(906732),
    d = i(767714),
    c = i(411477),
    u = i(594174),
    _ = i(626135),
    h = i(74538),
    g = i(981631),
    m = i(486324),
    x = i(474936),
    f = i(388032),
    p = i(869497);
function v(t) {
    let { analyticsSection: e, type: i } = t,
        v = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        N = h.ZP.canUseAnimatedAvatar(v),
        b = h.ZP.canUsePremiumProfileCustomization(v),
        y = (i === m.pC.BANNER && b) || (i === m.pC.AVATAR && N),
        { sourceAnalyticsLocations: A } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            y ||
                _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: A,
                });
        }, [y, e, A]),
        y)
    )
        return null;
    let I = (0, n.jsx)(d.Z, {
        className: p.__invalid_getNitroLink,
        size: o.zx.Sizes.SMALL,
        look: o.zx.Looks.LINK,
        color: o.zx.Colors.LINK,
        subscriptionTier: x.Si.TIER_2,
        textOptions: { textOverride: f.intl.format(f.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: g.qAy.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, n.jsx)(c.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: f.intl.format(f.t.Og803x, {}),
        button: I,
    });
}
