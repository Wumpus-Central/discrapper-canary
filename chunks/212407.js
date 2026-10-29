r.d(e, { Kk: () => i, MV: () => N, U1: () => u, bv: () => B, qY: () => b, s4: () => _, w$: () => A });
var t = r(582128),
    a = r(488430),
    o = r(719986),
    l = r(940622),
    R = r(559474);
function i(n) {
    let e = (0, l.mb)(R.RN.HERO_LOGO),
        r = (0, l.mb)(R.RN.HERO_BANNER_STATIC),
        a = (0, l.mb)(R.RN.HERO_BANNER_ANIMATED),
        i = (0, l.mb)(R.RN.HERO_BANNER_RIVE),
        _ = (0, l.JE)((n) => n.heroLogoMaxHeight),
        N = (0, l.JE)((n) => n.heroResponsive);
    return t.useMemo(() => {
        let t,
            l = null != r || null != a || null != i || null != e,
            R = null != r && null == a;
        return (
            (t = l
                ? null != e && null != _
                    ? o.M.fromServer({ desktop_max_height: _ })
                    : void 0
                : n.logoDisplayConfig),
            {
                bannerDisplayConfig: l ? (N ? o.M.fromServer({ responsive: !0 }) : void 0) : n.bannerDisplayConfig,
                logoDisplayConfig: t,
                heroLogo: e ?? n.heroLogoUrl,
                heroBannerStatic: r ?? n.heroBannerUrl,
                heroBannerAnimated: R ? void 0 : (a ?? n.heroBannerAnimatedUrl),
                heroBannerRive: i ?? n.heroRiveUrl,
            }
        );
    }, [e, r, a, i, n, _, N]);
}
function _(n, e, r) {
    let t = (0, l.mb)(R.RN.FEATURED_BLOCK);
    return (r ? t : null) ?? e?.assetUrl ?? n?.featuredBlockUrl;
}
function N(n) {
    let e = (0, l.mb)(R.RN.CATALOG_BANNER_STATIC),
        r = (0, l.mb)(R.RN.CATALOG_BANNER_ANIMATED),
        t = (0, l.mb)(R.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: e ?? n.catalogBannerUrl,
        catalogBannerAnimated: r ?? n.catalogBannerAnimatedUrl,
        catalogBannerRive: t ?? n.catalogBannerRiveUrl,
    };
}
function u(n) {
    return (0, l.mb)(R.RN.PDP_BACKGROUND) ?? n.pdpBgUrl;
}
function B(n) {
    let e = (0, l.mb)(R.RN.SHOP_BUTTON_BG_HOVER),
        r = (0, l.mb)(R.RN.SHOP_BUTTON_BG_HOVER_DARK),
        o = (0, l.mb)(R.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        i = (0, l.mb)(R.RN.SHOP_BUTTON_BG_RESTING),
        _ = (0, l.mb)(R.RN.SHOP_BUTTON_BG_RESTING_DARK),
        N = (0, l.mb)(R.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return t.useMemo(() => {
        if (n?.type === a.G.COACHMARK) return {};
        let t = n?.refTargetBackground?.asset,
            l = t?.resting,
            R = t?.hovered;
        return {
            buttonBGHoverDark: r ?? e ?? R?.dark,
            buttonBGHoverLight: o ?? e ?? R?.light,
            buttonBGRestingDark: _ ?? i ?? l?.dark,
            buttonBGRestingLight: N ?? i ?? l?.light,
        };
    }, [e, r, o, i, _, N, n]);
}
function b(n) {
    return { bannerUrl: n.bannerUrl, bannerAnimatedUrl: n.bannerAnimatedUrl };
}
function A(n) {
    return { bannerURL: n.bannerURL, bannerAnimatedURL: n.bannerAnimatedURL };
}
