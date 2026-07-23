n.d(t, { Kk: () => c, MV: () => u, U1: () => d, bv: () => m, qY: () => x, s4: () => o, w$: () => E });
var i = n(64700),
    s = n(488430),
    r = n(719986),
    l = n(940622),
    a = n(25176);
function c(e) {
    let t = (0, l.mb)(a.RN.HERO_LOGO),
        n = (0, l.mb)(a.RN.HERO_BANNER_STATIC),
        s = (0, l.mb)(a.RN.HERO_BANNER_ANIMATED),
        c = (0, l.mb)(a.RN.HERO_BANNER_RIVE),
        o = (0, l.JE)((e) => e.heroLogoMaxHeight),
        u = (0, l.JE)((e) => e.heroResponsive);
    return i.useMemo(() => {
        let i,
            l = null != n || null != s || null != c || null != t,
            a = null != n && null == s;
        return (
            (i = l
                ? null != t && null != o
                    ? r.M.fromServer({ desktop_max_height: o })
                    : void 0
                : e.logoDisplayConfig),
            {
                bannerDisplayConfig: l ? (u ? r.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                logoDisplayConfig: i,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: a ? void 0 : (s ?? e.heroBannerAnimatedUrl),
                heroBannerRive: c ?? e.heroRiveUrl,
            }
        );
    }, [t, n, s, c, e, o, u]);
}
function o(e, t, n) {
    let i = (0, l.mb)(a.RN.FEATURED_BLOCK);
    return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
}
function u(e) {
    let t = (0, l.mb)(a.RN.CATALOG_BANNER_STATIC),
        n = (0, l.mb)(a.RN.CATALOG_BANNER_ANIMATED),
        i = (0, l.mb)(a.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: t ?? e.catalogBannerUrl,
        catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
        catalogBannerRive: i ?? e.catalogBannerRiveUrl,
    };
}
function d(e) {
    return (0, l.mb)(a.RN.PDP_BACKGROUND) ?? e.pdpBgUrl;
}
function m(e) {
    let t = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
        n = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
        r = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        c = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
        o = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
        u = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return i.useMemo(() => {
        if (e?.type === s.G.COACHMARK) return {};
        let i = e?.refTargetBackground?.asset,
            l = i?.resting,
            a = i?.hovered;
        return {
            buttonBGHoverDark: n ?? t ?? a?.dark,
            buttonBGHoverLight: r ?? t ?? a?.light,
            buttonBGRestingDark: o ?? c ?? l?.dark,
            buttonBGRestingLight: u ?? c ?? l?.light,
        };
    }, [t, n, r, c, o, u, e]);
}
function x(e) {
    return { bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl };
}
function E(e) {
    return { bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL };
}
