n.d(t, { Kk: () => s, MV: () => d, U1: () => c, bv: () => u, qY: () => A, s4: () => o, w$: () => h });
var i = n(64700),
    l = n(488430),
    a = n(940622),
    r = n(559474);
let s = (e) => {
        let t = (0, a.mb)(r.RN.HERO_LOGO),
            n = (0, a.mb)(r.RN.HERO_BANNER_STATIC),
            l = (0, a.mb)(r.RN.HERO_BANNER_ANIMATED),
            s = (0, a.mb)(r.RN.HERO_BANNER_RIVE);
        return i.useMemo(() => {
            let i = null != n || null != l || null != s || null != t,
                a = null != n && null == l;
            return {
                bannerDisplayConfig: i ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: i ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: a ? void 0 : (l ?? e.heroBannerAnimatedUrl),
                heroBannerRive: s ?? e.heroRiveUrl,
            };
        }, [t, n, l, s, e]);
    },
    o = (e, t) => (0, a.mb)(r.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    d = (e) => {
        let t = (0, a.mb)(r.RN.CATALOG_BANNER_STATIC),
            n = (0, a.mb)(r.RN.CATALOG_BANNER_ANIMATED),
            i = (0, a.mb)(r.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl,
        };
    },
    c = (e) => (0, a.mb)(r.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = (e) => {
        let t = (0, a.mb)(r.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, a.mb)(r.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, a.mb)(r.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, a.mb)(r.RN.SHOP_BUTTON_BG_RESTING),
            d = (0, a.mb)(r.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, a.mb)(r.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return i.useMemo(() => {
            if (e?.type === l.G.COACHMARK) return {};
            let i = e?.refTargetBackground?.asset,
                a = i?.resting,
                r = i?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? r?.dark,
                buttonBGHoverLight: s ?? t ?? r?.light,
                buttonBGRestingDark: d ?? o ?? a?.dark,
                buttonBGRestingLight: c ?? o ?? a?.light,
            };
        }, [t, n, s, o, d, c, e]);
    },
    A = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    h = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
