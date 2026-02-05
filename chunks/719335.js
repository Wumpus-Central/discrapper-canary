a.d(t, { A: () => v });
var n = a(627968),
    i = a(64700),
    o = a(311907),
    r = a(421380),
    s = a(793574),
    l = a(688810),
    _ = a(465794),
    c = a(721127),
    d = a(287809),
    u = a(954571),
    A = a(927578),
    m = a(652215),
    x = a(339984),
    p = a(788868),
    f = a(985018),
    g = a(560207);
function v(e) {
    let { analyticsSection: t, type: a } = e,
        v = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        b = A.Ay.canUseAnimatedAvatar(v),
        L = A.Ay.canUsePremiumProfileCustomization(v),
        E = (a === x.HL.BANNER && L) || (a === x.HL.AVATAR && b),
        { sourceAnalyticsLocations: N } = (0, l.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            E || u.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, { type: t, location_stack: N });
        }, [E, t, N]),
        E)
    )
        return null;
    let h = (0, n.jsx)(_.A, {
        className: g.__invalid_getNitroLink,
        size: r.$n.Sizes.SMALL,
        look: r.$n.Looks.LINK,
        color: r.$n.Colors.LINK,
        subscriptionTier: p.pe.TIER_2,
        textOptions: { textOverride: f.intl.format(f.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: t, object: m.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(c.A, { reducedRightPadding: !0, className: g.C, text: f.intl.format(f.t.Og803x, {}), button: h });
}
