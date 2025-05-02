n.d(e, { Z: () => b });
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    l = n(100527),
    s = n(906732),
    d = n(118012),
    c = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    x = n(486324),
    f = n(474936),
    p = n(388032),
    N = n(886563);
function b(t) {
    let { analyticsSection: e, type: n } = t,
        b = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        A = h.ZP.canUseAnimatedAvatar(b),
        v = h.ZP.canUsePremiumProfileCustomization(b),
        E = (n === x.pC.BANNER && v) || (n === x.pC.AVATAR && A),
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
    let y = (0, i.jsx)(u.Z, {
        className: N.__invalid_getNitroLink,
        size: r.zxk.Sizes.SMALL,
        look: r.zxk.Looks.LINK,
        color: r.zxk.Colors.LINK,
        subscriptionTier: f.Si.TIER_2,
        buttonText: p.intl.format(p.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(c.Z, {
        reducedRightPadding: !0,
        className: N.nitroPreviewUpsell,
        text: p.intl.format(p.t.Og8039, {}),
        textSize: d.Z.Sizes.SIZE_14,
        textColor: d.Z.Colors.HEADER_PRIMARY,
        button: y
    });
}
