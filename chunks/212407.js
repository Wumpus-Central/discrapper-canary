r.d(t, { Kk: () => o, MV: () => u, U1: () => d, bv: () => m, qY: () => R, s4: () => c, w$: () => N });
var n = r(64700),
    i = r(488430),
    l = r(719986),
    a = r(940622),
    s = r(559474);
let o = (e) => {
        let t = (0, a.mb)(s.RN.HERO_LOGO),
            r = (0, a.mb)(s.RN.HERO_BANNER_STATIC),
            i = (0, a.mb)(s.RN.HERO_BANNER_ANIMATED),
            o = (0, a.mb)(s.RN.HERO_BANNER_RIVE),
            c = (0, a.JE)((e) => e.heroLogoMaxHeight),
            u = (0, a.JE)((e) => e.heroResponsive);
        return n.useMemo(() => {
            let n,
                a = null != r || null != i || null != o || null != t,
                s = null != r && null == i;
            return (
                (n = a
                    ? null != t && null != c
                        ? l.M.fromServer({ desktop_max_height: c })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: a ? (u ? l.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: n,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: r ?? e.heroBannerUrl,
                    heroBannerAnimated: s ? void 0 : (i ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: o ?? e.heroRiveUrl,
                }
            );
        }, [t, r, i, o, e, c, u]);
    },
    c = (e, t, r) => {
        let n = (0, a.mb)(s.RN.FEATURED_BLOCK);
        return (r ? n : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    u = (e) => {
        let t = (0, a.mb)(s.RN.CATALOG_BANNER_STATIC),
            r = (0, a.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            n = (0, a.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: r ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: n ?? e.catalogBannerRiveUrl,
        };
    },
    d = (e) => (0, a.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = (e) => {
        let t = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            r = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return n.useMemo(() => {
            if (e?.type === i.G.COACHMARK) return {};
            let n = e?.refTargetBackground?.asset,
                a = n?.resting,
                s = n?.hovered;
            return {
                buttonBGHoverDark: r ?? t ?? s?.dark,
                buttonBGHoverLight: l ?? t ?? s?.light,
                buttonBGRestingDark: c ?? o ?? a?.dark,
                buttonBGRestingLight: u ?? o ?? a?.light,
            };
        }, [t, r, l, o, c, u, e]);
    },
    R = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    N = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
