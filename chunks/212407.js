n.d(t, { Kk: () => c, MV: () => u, U1: () => d, bv: () => m, qY: () => h, s4: () => o, w$: () => x });
var r = n(64700),
    i = n(488430),
    s = n(719986),
    l = n(940622),
    a = n(779982);
function c(e) {
    let t = (0, l.mb)(a.RN.HERO_LOGO),
        n = (0, l.mb)(a.RN.HERO_BANNER_STATIC),
        i = (0, l.mb)(a.RN.HERO_BANNER_ANIMATED),
        c = (0, l.mb)(a.RN.HERO_BANNER_RIVE),
        o = (0, l.JE)((e) => e.heroLogoMaxHeight),
        u = (0, l.JE)((e) => e.heroResponsive);
    return r.useMemo(() => {
        let r,
            l = null != n || null != i || null != c || null != t,
            a = null != n && null == i;
        return (
            (r = l
                ? null != t && null != o
                    ? s.M.fromServer({ desktop_max_height: o })
                    : void 0
                : e.logoDisplayConfig),
            {
                bannerDisplayConfig: l ? (u ? s.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                logoDisplayConfig: r,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: a ? void 0 : (i ?? e.heroBannerAnimatedUrl),
                heroBannerRive: c ?? e.heroRiveUrl,
            }
        );
    }, [t, n, i, c, e, o, u]);
}
function o(e, t, n) {
    let r = (0, l.mb)(a.RN.FEATURED_BLOCK);
    return (n ? r : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
}
function u(e) {
    let t = (0, l.mb)(a.RN.CATALOG_BANNER_STATIC),
        n = (0, l.mb)(a.RN.CATALOG_BANNER_ANIMATED),
        r = (0, l.mb)(a.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: t ?? e.catalogBannerUrl,
        catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
        catalogBannerRive: r ?? e.catalogBannerRiveUrl,
    };
}
function d(e) {
    return (0, l.mb)(a.RN.PDP_BACKGROUND) ?? e.pdpBgUrl;
}
function m(e) {
    let t = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
        n = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
        s = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        c = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
        o = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
        u = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return r.useMemo(() => {
        if (e?.type === i.G.COACHMARK) return {};
        let r = e?.refTargetBackground?.asset,
            l = r?.resting,
            a = r?.hovered;
        return {
            buttonBGHoverDark: n ?? t ?? a?.dark,
            buttonBGHoverLight: s ?? t ?? a?.light,
            buttonBGRestingDark: o ?? c ?? l?.dark,
            buttonBGRestingLight: u ?? c ?? l?.light,
        };
    }, [t, n, s, c, o, u, e]);
}
function h(e) {
    return { bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl };
}
function x(e) {
    return { bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL };
}
