n.d(t, { Kk: () => s, MV: () => d, U1: () => c, bv: () => u, qY: () => A, s4: () => o, w$: () => h });
var i = n(64700),
    r = n(488430),
    a = n(940622),
    l = n(559474);
let s = (e) => {
        let t = (0, a.mb)(l.RN.HERO_LOGO),
            n = (0, a.mb)(l.RN.HERO_BANNER_STATIC),
            r = (0, a.mb)(l.RN.HERO_BANNER_ANIMATED),
            s = (0, a.mb)(l.RN.HERO_BANNER_RIVE);
        return i.useMemo(() => {
            let i = null != n || null != r || null != s || null != t,
                a = null != n && null == r;
            return {
                bannerDisplayConfig: i ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: i ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: a ? void 0 : (r ?? e.heroBannerAnimatedUrl),
                heroBannerRive: s ?? e.heroRiveUrl,
            };
        }, [t, n, r, s, e]);
    },
    o = (e, t) => (0, a.mb)(l.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    d = (e) => {
        let t = (0, a.mb)(l.RN.CATALOG_BANNER_STATIC),
            n = (0, a.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            i = (0, a.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl,
        };
    },
    c = (e) => (0, a.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = (e) => {
        let t = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            d = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, a.mb)(l.RN.COACHTIP_AVATAR);
        return i.useMemo(() => {
            let i = [t, n, s, o, d, c, u].some((e) => null != e);
            if (e?.type === r.G.COACHMARK) return { hasPreviewAssets: !1 };
            let a = e?.refTargetBackground?.asset,
                l = a?.resting,
                A = a?.hovered;
            return {
                hasPreviewAssets: i,
                buttonBGHoverDark: n ?? t ?? A?.dark,
                buttonBGHoverLight: s ?? t ?? A?.light,
                buttonBGRestingDark: d ?? o ?? l?.dark,
                buttonBGRestingLight: c ?? o ?? l?.light,
                coachtipAvatar: u ?? e?.avatar,
            };
        }, [t, n, s, o, d, c, u, e]);
    },
    A = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    h = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
