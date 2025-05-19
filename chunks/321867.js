n.d(e, { Z: () => v });
var i = n(255367),
    o = n(73800),
    a = n(442837),
    r = n(481060),
    l = n(100527),
    s = n(906732),
    d = n(118012),
    c = n(767714),
    u = n(411477),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    x = n(486324),
    f = n(474936),
    p = n(388032),
    N = n(365822);
function v(t) {
    let { analyticsSection: e, type: n } = t,
        v = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        A = h.ZP.canUseAnimatedAvatar(v),
        b = h.ZP.canUsePremiumProfileCustomization(v),
        E = (n === x.pC.BANNER && b) || (n === x.pC.AVATAR && A),
        { sourceAnalyticsLocations: C } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            E ||
                g.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: C
                });
        }, [E, e, C]),
        E)
    )
        return null;
    let y = (0, i.jsx)(c.Z, {
        className: N.__invalid_getNitroLink,
        size: r.zxk.Sizes.SMALL,
        look: r.zxk.Looks.LINK,
        color: r.zxk.Colors.LINK,
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
        className: N.nitroPreviewUpsell,
        text: p.intl.format(p.t.Og8039, {}),
        textSize: d.Z.Sizes.SIZE_14,
        textColor: d.Z.Colors.HEADER_PRIMARY,
        button: y
    });
}
