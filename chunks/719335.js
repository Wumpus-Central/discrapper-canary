i.d(t, { A: () => f });
var n = i(627968),
    a = i(64700),
    r = i(311907),
    l = i(862482),
    s = i(793574),
    o = i(688810),
    c = i(725807),
    d = i(721127),
    u = i(287809),
    _ = i(954571),
    A = i(927578),
    h = i(652215),
    g = i(339984),
    m = i(788868),
    x = i(985018),
    N = i(582602);
function f(e) {
    let { analyticsSection: t, type: i } = e,
        f = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        v = A.Ay.canUseAnimatedAvatar(f),
        E = A.Ay.canUsePremiumProfileCustomization(f),
        T = (i === g.HL.BANNER && E) || (i === g.HL.AVATAR && v),
        { sourceAnalyticsLocations: b } = (0, o.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            T || _.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, { type: t, location_stack: b });
        }, [T, t, b]),
        T)
    )
        return null;
    let p = (0, n.jsx)(c.A, {
        className: N.__invalid_getNitroLink,
        size: l.$n.Sizes.SMALL,
        look: l.$n.Looks.LINK,
        color: l.$n.Colors.LINK,
        subscriptionTier: m.pe.TIER_2,
        textOptions: { textOverride: x.intl.format(x.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: t, object: h.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(d.A, { reducedRightPadding: !0, className: N.C, text: x.intl.format(x.t.Og803x, {}), button: p });
}
