r.d(e, { Kk: () => R, MV: () => u, U1: () => N, bv: () => B, qY: () => A, s4: () => _, w$: () => b });
var t = r(582128),
    a = r(488430),
    o = r(719986),
    i = r(940622),
    l = r(25176);
function R(n) {
    let e = (0, i.mb)(l.RN.HERO_LOGO),
        r = (0, i.mb)(l.RN.HERO_BANNER_STATIC),
        a = (0, i.mb)(l.RN.HERO_BANNER_ANIMATED),
        R = (0, i.mb)(l.RN.HERO_BANNER_RIVE),
        _ = (0, i.JE)((n) => n.heroLogoMaxHeight),
        u = (0, i.JE)((n) => n.heroResponsive);
    return t.useMemo(() => {
        let t,
            i = null != r || null != a || null != R || null != e,
            l = null != r && null == a;
        return (
            (t = i
                ? null != e && null != _
                    ? o.M.fromServer({ desktop_max_height: _ })
                    : void 0
                : n.logoDisplayConfig),
            {
                bannerDisplayConfig: i ? (u ? o.M.fromServer({ responsive: !0 }) : void 0) : n.bannerDisplayConfig,
                logoDisplayConfig: t,
                heroLogo: e ?? n.heroLogoUrl,
                heroBannerStatic: r ?? n.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : (a ?? n.heroBannerAnimatedUrl),
                heroBannerRive: R ?? n.heroRiveUrl,
            }
        );
    }, [e, r, a, R, n, _, u]);
}
function _(n, e, r) {
    let t = (0, i.mb)(l.RN.FEATURED_BLOCK);
    return (r ? t : null) ?? e?.assetUrl ?? n?.featuredBlockUrl;
}
function u(n) {
    let e = (0, i.mb)(l.RN.CATALOG_BANNER_STATIC),
        r = (0, i.mb)(l.RN.CATALOG_BANNER_ANIMATED),
        t = (0, i.mb)(l.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: e ?? n.catalogBannerUrl,
        catalogBannerAnimated: r ?? n.catalogBannerAnimatedUrl,
        catalogBannerRive: t ?? n.catalogBannerRiveUrl,
    };
}
function N(n) {
    return (0, i.mb)(l.RN.PDP_BACKGROUND) ?? n.pdpBgUrl;
}
function B(n) {
    let e = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
        r = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
        o = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        R = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
        _ = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
        u = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return t.useMemo(() => {
        if (n?.type === a.G.COACHMARK) return {};
        let t = n?.refTargetBackground?.asset,
            i = t?.resting,
            l = t?.hovered;
        return {
            buttonBGHoverDark: r ?? e ?? l?.dark,
            buttonBGHoverLight: o ?? e ?? l?.light,
            buttonBGRestingDark: _ ?? R ?? i?.dark,
            buttonBGRestingLight: u ?? R ?? i?.light,
        };
    }, [e, r, o, R, _, u, n]);
}
function A(n) {
    return { bannerUrl: n.bannerUrl, bannerAnimatedUrl: n.bannerAnimatedUrl };
}
function b(n) {
    return { bannerURL: n.bannerURL, bannerAnimatedURL: n.bannerAnimatedURL };
}
