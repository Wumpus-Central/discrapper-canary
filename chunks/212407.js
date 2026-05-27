n.d(t, { Kk: () => o, MV: () => u, U1: () => d, bv: () => m, qY: () => R, s4: () => c, w$: () => N });
var r = n(64700),
    i = n(488430),
    l = n(719986),
    a = n(940622),
    s = n(559474);
let o = (e) => {
        let t = (0, a.mb)(s.RN.HERO_LOGO),
            n = (0, a.mb)(s.RN.HERO_BANNER_STATIC),
            i = (0, a.mb)(s.RN.HERO_BANNER_ANIMATED),
            o = (0, a.mb)(s.RN.HERO_BANNER_RIVE),
            c = (0, a.JE)((e) => e.heroLogoMaxHeight),
            u = (0, a.JE)((e) => e.heroResponsive);
        return r.useMemo(() => {
            let r,
                a = null != n || null != i || null != o || null != t,
                s = null != n && null == i;
            return (
                (r = a
                    ? null != t && null != c
                        ? l.M.fromServer({ desktop_max_height: c })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: a ? (u ? l.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: r,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: n ?? e.heroBannerUrl,
                    heroBannerAnimated: s ? void 0 : (i ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: o ?? e.heroRiveUrl,
                }
            );
        }, [t, n, i, o, e, c, u]);
    },
    c = (e, t, n) => {
        let r = (0, a.mb)(s.RN.FEATURED_BLOCK);
        return (n ? r : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    u = (e) => {
        let t = (0, a.mb)(s.RN.CATALOG_BANNER_STATIC),
            n = (0, a.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            r = (0, a.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: r ?? e.catalogBannerRiveUrl,
        };
    },
    d = (e) => (0, a.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = (e) => {
        let t = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, a.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, a.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return r.useMemo(() => {
            if (e?.type === i.G.COACHMARK) return {};
            let r = e?.refTargetBackground?.asset,
                a = r?.resting,
                s = r?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? s?.dark,
                buttonBGHoverLight: l ?? t ?? s?.light,
                buttonBGRestingDark: c ?? o ?? a?.dark,
                buttonBGRestingLight: u ?? o ?? a?.light,
            };
        }, [t, n, l, o, c, u, e]);
    },
    R = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    N = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
