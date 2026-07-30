n.d(t, { Kk: () => c, MV: () => d, U1: () => u, bv: () => m, qY: () => p, s4: () => o, w$: () => x });
var i = n(582128),
    r = n(488430),
    s = n(719986),
    a = n(940622),
    l = n(25176);
function c(e) {
    let t = (0, a.mb)(l.RN.HERO_LOGO),
        n = (0, a.mb)(l.RN.HERO_BANNER_STATIC),
        r = (0, a.mb)(l.RN.HERO_BANNER_ANIMATED),
        c = (0, a.mb)(l.RN.HERO_BANNER_RIVE),
        o = (0, a.JE)((e) => e.heroLogoMaxHeight),
        d = (0, a.JE)((e) => e.heroResponsive);
    return i.useMemo(() => {
        let i,
            a = null != n || null != r || null != c || null != t,
            l = null != n && null == r;
        return (
            (i = a
                ? null != t && null != o
                    ? s.M.fromServer({ desktop_max_height: o })
                    : void 0
                : e.logoDisplayConfig),
            {
                bannerDisplayConfig: a ? (d ? s.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                logoDisplayConfig: i,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : (r ?? e.heroBannerAnimatedUrl),
                heroBannerRive: c ?? e.heroRiveUrl,
            }
        );
    }, [t, n, r, c, e, o, d]);
}
function o(e, t, n) {
    let i = (0, a.mb)(l.RN.FEATURED_BLOCK);
    return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
}
function d(e) {
    let t = (0, a.mb)(l.RN.CATALOG_BANNER_STATIC),
        n = (0, a.mb)(l.RN.CATALOG_BANNER_ANIMATED),
        i = (0, a.mb)(l.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: t ?? e.catalogBannerUrl,
        catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
        catalogBannerRive: i ?? e.catalogBannerRiveUrl,
    };
}
function u(e) {
    return (0, a.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl;
}
function m(e) {
    let t = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
        n = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
        s = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        c = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
        o = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
        d = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return i.useMemo(() => {
        if (e?.type === r.G.COACHMARK) return {};
        let i = e?.refTargetBackground?.asset,
            a = i?.resting,
            l = i?.hovered;
        return {
            buttonBGHoverDark: n ?? t ?? l?.dark,
            buttonBGHoverLight: s ?? t ?? l?.light,
            buttonBGRestingDark: o ?? c ?? a?.dark,
            buttonBGRestingLight: d ?? c ?? a?.light,
        };
    }, [t, n, s, c, o, d, e]);
}
function p(e) {
    return { bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl };
}
function x(e) {
    return { bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL };
}
