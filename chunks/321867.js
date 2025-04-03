n.d(e, { Z: () => v });
var o = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    l = n(100527),
    c = n(906732),
    s = n(118012),
    u = n(411477),
    _ = n(197115),
    d = n(594174),
    f = n(626135),
    m = n(74538),
    p = n(981631),
    b = n(486324),
    g = n(474936),
    C = n(388032),
    N = n(886563);
function v(t) {
    let { analyticsSection: e, type: n } = t,
        v = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        x = m.ZP.canUseAnimatedAvatar(v),
        A = m.ZP.canUsePremiumProfileCustomization(v),
        E = (n === b.pC.BANNER && A) || (n === b.pC.AVATAR && x),
        { sourceAnalyticsLocations: y } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (r.useEffect(() => {
            E ||
                f.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: y
                });
        }, [E, e, y]),
        E)
    )
        return null;
    let h = (0, o.jsx)(_.Z, {
        className: N.__invalid_getNitroLink,
        size: a.zxk.Sizes.SMALL,
        look: a.zxk.Looks.LINK,
        color: a.zxk.Colors.LINK,
        subscriptionTier: g.Si.TIER_2,
        buttonText: C.NW.format(C.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: p.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: N.nitroPreviewUpsell,
        text: C.NW.format(C.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: h
    });
}
