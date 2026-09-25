r.d(e, { Kk: () => R, MV: () => _, U1: () => N, bv: () => B, qY: () => A, s4: () => u, w$: () => b });
var t = r(582128),
    a = r(488430),
    o = r(719986),
    l = r(940622),
    i = r(25176);
function R(n) {
    let e = (0, l.mb)(i.RN.HERO_LOGO),
        r = (0, l.mb)(i.RN.HERO_BANNER_STATIC),
        a = (0, l.mb)(i.RN.HERO_BANNER_ANIMATED),
        R = (0, l.mb)(i.RN.HERO_BANNER_RIVE),
        u = (0, l.JE)((n) => n.heroLogoMaxHeight),
        _ = (0, l.JE)((n) => n.heroResponsive);
    return t.useMemo(() => {
        let t,
            l = null != r || null != a || null != R || null != e,
            i = null != r && null == a;
        return (
            (t = l
                ? null != e && null != u
                    ? o.M.fromServer({ desktop_max_height: u })
                    : void 0
                : n.logoDisplayConfig),
            {
                bannerDisplayConfig: l ? (_ ? o.M.fromServer({ responsive: !0 }) : void 0) : n.bannerDisplayConfig,
                logoDisplayConfig: t,
                heroLogo: e ?? n.heroLogoUrl,
                heroBannerStatic: r ?? n.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : (a ?? n.heroBannerAnimatedUrl),
                heroBannerRive: R ?? n.heroRiveUrl,
            }
        );
    }, [e, r, a, R, n, u, _]);
}
function u(n, e, r) {
    let t = (0, l.mb)(i.RN.FEATURED_BLOCK);
    return (r ? t : null) ?? e?.assetUrl ?? n?.featuredBlockUrl;
}
function _(n) {
    let e = (0, l.mb)(i.RN.CATALOG_BANNER_STATIC),
        r = (0, l.mb)(i.RN.CATALOG_BANNER_ANIMATED),
        t = (0, l.mb)(i.RN.CATALOG_BANNER_RIVE);
    return {
        catalogBannerStatic: e ?? n.catalogBannerUrl,
        catalogBannerAnimated: r ?? n.catalogBannerAnimatedUrl,
        catalogBannerRive: t ?? n.catalogBannerRiveUrl,
    };
}
function N(n) {
    return (0, l.mb)(i.RN.PDP_BACKGROUND) ?? n.pdpBgUrl;
}
function B(n) {
    let e = (0, l.mb)(i.RN.SHOP_BUTTON_BG_HOVER),
        r = (0, l.mb)(i.RN.SHOP_BUTTON_BG_HOVER_DARK),
        o = (0, l.mb)(i.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
        R = (0, l.mb)(i.RN.SHOP_BUTTON_BG_RESTING),
        u = (0, l.mb)(i.RN.SHOP_BUTTON_BG_RESTING_DARK),
        _ = (0, l.mb)(i.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
    return t.useMemo(() => {
        if (n?.type === a.G.COACHMARK) return {};
        let t = n?.refTargetBackground?.asset,
            l = t?.resting,
            i = t?.hovered;
        return {
            buttonBGHoverDark: r ?? e ?? i?.dark,
            buttonBGHoverLight: o ?? e ?? i?.light,
            buttonBGRestingDark: u ?? R ?? l?.dark,
            buttonBGRestingLight: _ ?? R ?? l?.light,
        };
    }, [e, r, o, R, u, _, n]);
}
function A(n) {
    return { bannerUrl: n.bannerUrl, bannerAnimatedUrl: n.bannerAnimatedUrl };
}
function b(n) {
    return { bannerURL: n.bannerURL, bannerAnimatedURL: n.bannerAnimatedURL };
}
