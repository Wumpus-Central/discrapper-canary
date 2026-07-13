"use strict";
n.d(t, { Kk: () => o, MV: () => c, U1: () => u, bv: () => _, qY: () => E, s4: () => d, w$: () => A });
var i = n(64700),
    r = n(488430),
    a = n(719986),
    s = n(940622),
    l = n(779982);
function o(e) {
    let t = (0, s.mb)(l.RN.HERO_LOGO),
        n = (0, s.mb)(l.RN.HERO_BANNER_STATIC),
        r = (0, s.mb)(l.RN.HERO_BANNER_ANIMATED),
        o = (0, s.mb)(l.RN.HERO_BANNER_RIVE),
        d = (0, s.JE)((e) => e.heroLogoMaxHeight),
        c = (0, s.JE)((e) => e.heroResponsive);
    return i.useMemo(() => {
        let i,
            s = null != n || null != r || null != o || null != t,
            l = null != n && null == r;
        return (
            (i = s
                ? null != t && null != d
                    ? a.M.fromServer({ desktop_max_height: d })
                    : void 0
                : e.logoDisplayConfig),
            {
                bannerDisplayConfig: s ? (c ? a.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                logoDisplayConfig: i,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : (r ?? e.heroBannerAnimatedUrl),
                heroBannerRive: o ?? e.heroRiveUrl,
            }
        );
    }, [t, n, r, o, e, d, c]);
}
function d(e, t, n) {
    let i = (0, s.mb)(l.RN.FEATURED_BLOCK);
    return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
}
function c(e) {
    let t = (0, s.mb)(l.RN.CATALOG_BANNER_STATIC),
        n = (0, s.mb)(l.RN.CATALOG_BANNER_ANIMATED),
        i = (0, s.mb)(l.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: t ?? e.catalogBannerUrl,
        catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
        catalogBannerRive: i ?? e.catalogBannerRiveUrl,
    };
}
function u(e) {
    return (0, s.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl;
}
function _(e) {
    let t = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
        n = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
        a = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        o = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
        d = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
        c = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return i.useMemo(() => {
        if (e?.type === r.G.COACHMARK) return {};
        let i = e?.refTargetBackground?.asset,
            s = i?.resting,
            l = i?.hovered;
        return {
            buttonBGHoverDark: n ?? t ?? l?.dark,
            buttonBGHoverLight: a ?? t ?? l?.light,
            buttonBGRestingDark: d ?? o ?? s?.dark,
            buttonBGRestingLight: c ?? o ?? s?.light,
        };
    }, [t, n, a, o, d, c, e]);
}
function E(e) {
    return { bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl };
}
function A(e) {
    return { bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL };
}
