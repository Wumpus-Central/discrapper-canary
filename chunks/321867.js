n.d(e, { Z: () => x });
var o = n(255367),
    i = n(73800),
    r = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(118012),
    u = n(767714),
    _ = n(411477),
    d = n(594174),
    f = n(626135),
    m = n(74538),
    p = n(981631),
    b = n(486324),
    g = n(474936),
    v = n(388032),
    C = n(886563);
function x(t) {
    let { analyticsSection: e, type: n } = t,
        x = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        y = m.ZP.canUseAnimatedAvatar(x),
        A = m.ZP.canUsePremiumProfileCustomization(x),
        E = (n === b.pC.BANNER && A) || (n === b.pC.AVATAR && y),
        { sourceAnalyticsLocations: N } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            E ||
                f.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: N
                });
        }, [E, e, N]),
        E)
    )
        return null;
    let h = (0, o.jsx)(u.Z, {
        className: C.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: g.Si.TIER_2,
        textOptions: { textOverride: v.intl.format(v.t['944tDg'], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: p.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(_.Z, {
        reducedRightPadding: !0,
        className: C.nitroPreviewUpsell,
        text: v.intl.format(v.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: h
    });
}
