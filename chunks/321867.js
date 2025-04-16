n.d(e, { Z: () => b });
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    l = n(100527),
    s = n(906732),
    c = n(118012),
    d = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    h = n(74538),
    m = n(981631),
    x = n(486324),
    N = n(474936),
    f = n(388032),
    p = n(886563);
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
        className: p.__invalid_getNitroLink,
        size: r.zxk.Sizes.SMALL,
        look: r.zxk.Looks.LINK,
        color: r.zxk.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: f.NW.format(f.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: f.NW.format(f.t.Og8039, {}),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: y
    });
}
