s.d(t, { Kk: () => c, MV: () => d, U1: () => u, bv: () => m, qY: () => h, s4: () => o, w$: () => x });
var i = s(64700),
    n = s(488430),
    r = s(719986),
    a = s(940622),
    l = s(559474);
let c = (e) => {
        let t = (0, a.mb)(l.RN.HERO_LOGO),
            s = (0, a.mb)(l.RN.HERO_BANNER_STATIC),
            n = (0, a.mb)(l.RN.HERO_BANNER_ANIMATED),
            c = (0, a.mb)(l.RN.HERO_BANNER_RIVE),
            o = (0, a.JE)((e) => e.heroLogoMaxHeight),
            d = (0, a.JE)((e) => e.heroResponsive);
        return i.useMemo(() => {
            let i,
                a = null != s || null != n || null != c || null != t,
                l = null != s && null == n;
            return (
                (i = a
                    ? null != t && null != o
                        ? r.M.fromServer({ desktop_max_height: o })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: a ? (d ? r.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: i,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: s ?? e.heroBannerUrl,
                    heroBannerAnimated: l ? void 0 : (n ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: c ?? e.heroRiveUrl,
                }
            );
        }, [t, s, n, c, e, o, d]);
    },
    o = (e, t, s) => {
        let i = (0, a.mb)(l.RN.FEATURED_BLOCK);
        return (s ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    d = (e) => {
        let t = (0, a.mb)(l.RN.CATALOG_BANNER_STATIC),
            s = (0, a.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            i = (0, a.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: s ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl,
        };
    },
    u = (e) => (0, a.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = (e) => {
        let t = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            s = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            r = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            c = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return i.useMemo(() => {
            if (e?.type === n.G.COACHMARK) return {};
            let i = e?.refTargetBackground?.asset,
                a = i?.resting,
                l = i?.hovered;
            return {
                buttonBGHoverDark: s ?? t ?? l?.dark,
                buttonBGHoverLight: r ?? t ?? l?.light,
                buttonBGRestingDark: o ?? c ?? a?.dark,
                buttonBGRestingLight: d ?? c ?? a?.light,
            };
        }, [t, s, r, c, o, d, e]);
    },
    h = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    x = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
