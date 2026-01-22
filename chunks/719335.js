n.d(t, {
    A: () => x,
});
var a = n(627968),
    r = n(64700),
    i = n(311907),
    c = n(421380),
    l = n(793574),
    s = n(688810),
    o = n(465794),
    d = n(721127),
    u = n(287809),
    b = n(954571),
    f = n(927578),
    h = n(652215),
    A = n(339984),
    m = n(788868),
    _ = n(985018),
    g = n(560207);

function x(e) {
    let { analyticsSection: t, type: n } = e,
        x = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        p = f.Ay.canUseAnimatedAvatar(x),
        y = f.Ay.canUsePremiumProfileCustomization(x),
        N = (n === A.HL.BANNER && y) || (n === A.HL.AVATAR && p),
        { sourceAnalyticsLocations: E } = (0, s.Ay)(l.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (r.useEffect(() => {
            N ||
                b.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: E,
                });
        }, [N, t, E]),
        N)
    )
        return null;
    let j = (0, a.jsx)(o.A, {
        className: g.__invalid_getNitroLink,
        size: c.$n.Sizes.SMALL,
        look: c.$n.Looks.LINK,
        color: c.$n.Colors.LINK,
        subscriptionTier: m.pe.TIER_2,
        textOptions: {
            textOverride: _.intl.format(_.t["944tDv"], {}),
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: h.ZSU.BUTTON_CTA,
        },
        disableShine: !0,
    });
    return (0, a.jsx)(d.A, {
        reducedRightPadding: !0,
        className: g.C,
        text: _.intl.format(_.t.Og803x, {}),
        button: j,
    });
}
