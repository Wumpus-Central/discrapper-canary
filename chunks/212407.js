n.d(t, {
    Kk: () => s,
    MV: () => c,
    U1: () => u,
    bv: () => d,
    qY: () => p,
    s4: () => o,
    w$: () => f,
});
var r = n(64700),
    i = n(488430),
    l = n(940622),
    a = n(559474);
let s = (e) => {
        let t = (0, l.mb)(a.RN.HERO_LOGO),
            n = (0, l.mb)(a.RN.HERO_BANNER_STATIC),
            i = (0, l.mb)(a.RN.HERO_BANNER_ANIMATED),
            s = (0, l.mb)(a.RN.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != i || null != s || null != t,
                l = null != n && null == i;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: null != t ? t : e.heroLogoUrl,
                heroBannerStatic: null != n ? n : e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : null != i ? i : e.heroBannerAnimatedUrl,
                heroBannerRive: null != s ? s : e.heroRiveUrl,
            };
        }, [t, n, i, s, e]);
    },
    o = (e, t) => {
        var n;
        let r = (0, l.mb)(a.RN.FEATURED_BLOCK);
        return null != (n = null != r ? r : null == t ? void 0 : t.assetUrl)
            ? n
            : null == e
              ? void 0
              : e.featuredBlockUrl;
    },
    c = (e) => {
        let t = (0, l.mb)(a.RN.CATALOG_BANNER_STATIC),
            n = (0, l.mb)(a.RN.CATALOG_BANNER_ANIMATED),
            r = (0, l.mb)(a.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
            catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl,
            catalogBannerRive: null != r ? r : e.catalogBannerRiveUrl,
        };
    },
    u = (e) => {
        let t = (0, l.mb)(a.RN.PDP_BACKGROUND);
        return null != t ? t : e.pdpBgUrl;
    },
    d = (e) => {
        let t = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, l.mb)(a.RN.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, l, a, p, f;
            let h = [t, n, s, o, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.G.COACHMARK) return { hasPreviewAssets: !1 };
            let A = null == e || null == (f = e.refTargetBackground) ? void 0 : f.asset,
                g = null == A ? void 0 : A.resting,
                m = null == A ? void 0 : A.hovered;
            return {
                hasPreviewAssets: h,
                buttonBGHoverDark: null != (r = null != n ? n : t) ? r : null == m ? void 0 : m.dark,
                buttonBGHoverLight: null != (l = null != s ? s : t) ? l : null == m ? void 0 : m.light,
                buttonBGRestingDark: null != (a = null != c ? c : o) ? a : null == g ? void 0 : g.dark,
                buttonBGRestingLight: null != (p = null != u ? u : o) ? p : null == g ? void 0 : g.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, s, o, c, u, d, e]);
    },
    p = (e) => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl,
    }),
    f = (e) => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL,
    });
