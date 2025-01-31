n.d(e, { Z: () => C });
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    c = n(100527),
    l = n(906732),
    s = n(118012),
    _ = n(411477),
    d = n(197115),
    u = n(594174),
    g = n(626135),
    f = n(74538),
    m = n(981631),
    x = n(486324),
    p = n(474936),
    b = n(388032),
    h = n(639907);
function C(t) {
    let { analyticsSection: e, type: n } = t,
        C = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        v = f.ZP.canUseAnimatedAvatar(C),
        A = f.ZP.canUsePremiumProfileCustomization(C),
        E = (n === x.pC.BANNER && A) || (n === x.pC.AVATAR && v),
        { sourceAnalyticsLocations: N } = (0, l.ZP)(c.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            E ||
                g.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    location_stack: N
                });
        }, [E, e, N]),
        E)
    )
        return null;
    let R = (0, i.jsx)(d.Z, {
        className: h.__invalid_getNitroLink,
        size: r.zxk.Sizes.SMALL,
        look: r.zxk.Looks.LINK,
        color: r.zxk.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: b.intl.format(b.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: m.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(_.Z, {
        reducedRightPadding: !0,
        className: h.nitroPreviewUpsell,
        text: b.intl.format(b.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: R
    });
}
