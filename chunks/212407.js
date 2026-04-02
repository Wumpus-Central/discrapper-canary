n.d(t, { Kk: () => o, MV: () => c, U1: () => u, bv: () => A, qY: () => h, s4: () => d, w$: () => _ });
var i = n(64700),
    l = n(488430),
    a = n(719986),
    r = n(940622),
    s = n(559474);
let o = (e) => {
        let t = (0, r.mb)(s.RN.HERO_LOGO),
            n = (0, r.mb)(s.RN.HERO_BANNER_STATIC),
            l = (0, r.mb)(s.RN.HERO_BANNER_ANIMATED),
            o = (0, r.mb)(s.RN.HERO_BANNER_RIVE),
            d = (0, r.JE)((e) => e.heroLogoMaxHeight),
            c = (0, r.JE)((e) => e.heroResponsive);
        return i.useMemo(() => {
            let i,
                r = null != n || null != l || null != o || null != t,
                s = null != n && null == l;
            return (
                (i = r
                    ? null != t && null != d
                        ? a.M.fromServer({ desktop_max_height: d })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: r ? (c ? a.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: i,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: n ?? e.heroBannerUrl,
                    heroBannerAnimated: s ? void 0 : (l ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: o ?? e.heroRiveUrl,
                }
            );
        }, [t, n, l, o, e, d, c]);
    },
    d = (e, t, n) => {
        let i = (0, r.mb)(s.RN.FEATURED_BLOCK);
        return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    c = (e) => {
        let t = (0, r.mb)(s.RN.CATALOG_BANNER_STATIC),
            n = (0, r.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            i = (0, r.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl,
        };
    },
    u = (e) => (0, r.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    A = (e) => {
        let t = (0, r.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, r.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            a = (0, r.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, r.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            d = (0, r.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, r.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return i.useMemo(() => {
            if (e?.type === l.G.COACHMARK) return {};
            let i = e?.refTargetBackground?.asset,
                r = i?.resting,
                s = i?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? s?.dark,
                buttonBGHoverLight: a ?? t ?? s?.light,
                buttonBGRestingDark: d ?? o ?? r?.dark,
                buttonBGRestingLight: c ?? o ?? r?.light,
            };
        }, [t, n, a, o, d, c, e]);
    },
    h = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    _ = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
