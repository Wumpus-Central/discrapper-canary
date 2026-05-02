s.d(t, { Kk: () => c, MV: () => d, U1: () => u, bv: () => m, qY: () => h, s4: () => o, w$: () => x });
var n = s(64700),
    i = s(488430),
    r = s(719986),
    l = s(940622),
    a = s(559474);
let c = (e) => {
        let t = (0, l.mb)(a.RN.HERO_LOGO),
            s = (0, l.mb)(a.RN.HERO_BANNER_STATIC),
            i = (0, l.mb)(a.RN.HERO_BANNER_ANIMATED),
            c = (0, l.mb)(a.RN.HERO_BANNER_RIVE),
            o = (0, l.JE)((e) => e.heroLogoMaxHeight),
            d = (0, l.JE)((e) => e.heroResponsive);
        return n.useMemo(() => {
            let n,
                l = null != s || null != i || null != c || null != t,
                a = null != s && null == i;
            return (
                (n = l
                    ? null != t && null != o
                        ? r.M.fromServer({ desktop_max_height: o })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: l ? (d ? r.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: n,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: s ?? e.heroBannerUrl,
                    heroBannerAnimated: a ? void 0 : (i ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: c ?? e.heroRiveUrl,
                }
            );
        }, [t, s, i, c, e, o, d]);
    },
    o = (e, t, s) => {
        let n = (0, l.mb)(a.RN.FEATURED_BLOCK);
        return (s ? n : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    d = (e) => {
        let t = (0, l.mb)(a.RN.CATALOG_BANNER_STATIC),
            s = (0, l.mb)(a.RN.CATALOG_BANNER_ANIMATED),
            n = (0, l.mb)(a.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: s ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: n ?? e.catalogBannerRiveUrl,
        };
    },
    u = (e) => (0, l.mb)(a.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = (e) => {
        let t = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
            s = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
            r = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            c = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return n.useMemo(() => {
            if (e?.type === i.G.COACHMARK) return {};
            let n = e?.refTargetBackground?.asset,
                l = n?.resting,
                a = n?.hovered;
            return {
                buttonBGHoverDark: s ?? t ?? a?.dark,
                buttonBGHoverLight: r ?? t ?? a?.light,
                buttonBGRestingDark: o ?? c ?? l?.dark,
                buttonBGRestingLight: d ?? c ?? l?.light,
            };
        }, [t, s, r, c, o, d, e]);
    },
    h = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    x = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
