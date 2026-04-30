"use strict";
n.d(t, { Kk: () => l, MV: () => c, U1: () => d, bv: () => _, qY: () => f, s4: () => u, w$: () => h });
var i = n(64700),
    r = n(488430),
    s = n(719986),
    a = n(940622),
    o = n(559474);
let l = (e) => {
        let t = (0, a.mb)(o.RN.HERO_LOGO),
            n = (0, a.mb)(o.RN.HERO_BANNER_STATIC),
            r = (0, a.mb)(o.RN.HERO_BANNER_ANIMATED),
            l = (0, a.mb)(o.RN.HERO_BANNER_RIVE),
            u = (0, a.JE)((e) => e.heroLogoMaxHeight),
            c = (0, a.JE)((e) => e.heroResponsive);
        return i.useMemo(() => {
            let i,
                a = null != n || null != r || null != l || null != t,
                o = null != n && null == r;
            return (
                (i = a
                    ? null != t && null != u
                        ? s.M.fromServer({ desktop_max_height: u })
                        : void 0
                    : e.logoDisplayConfig),
                {
                    bannerDisplayConfig: a ? (c ? s.M.fromServer({ responsive: !0 }) : void 0) : e.bannerDisplayConfig,
                    logoDisplayConfig: i,
                    heroLogo: t ?? e.heroLogoUrl,
                    heroBannerStatic: n ?? e.heroBannerUrl,
                    heroBannerAnimated: o ? void 0 : (r ?? e.heroBannerAnimatedUrl),
                    heroBannerRive: l ?? e.heroRiveUrl,
                }
            );
        }, [t, n, r, l, e, u, c]);
    },
    u = (e, t, n) => {
        let i = (0, a.mb)(o.RN.FEATURED_BLOCK);
        return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl;
    },
    c = (e) => {
        let t = (0, a.mb)(o.RN.CATALOG_BANNER_STATIC),
            n = (0, a.mb)(o.RN.CATALOG_BANNER_ANIMATED),
            i = (0, a.mb)(o.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl,
        };
    },
    d = (e) => (0, a.mb)(o.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    _ = (e) => {
        let t = (0, a.mb)(o.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, a.mb)(o.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, a.mb)(o.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            l = (0, a.mb)(o.RN.SHOP_BUTTON_BG_RESTING),
            u = (0, a.mb)(o.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, a.mb)(o.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return i.useMemo(() => {
            if (e?.type === r.G.COACHMARK) return {};
            let i = e?.refTargetBackground?.asset,
                a = i?.resting,
                o = i?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? o?.dark,
                buttonBGHoverLight: s ?? t ?? o?.light,
                buttonBGRestingDark: u ?? l ?? a?.dark,
                buttonBGRestingLight: c ?? l ?? a?.light,
            };
        }, [t, n, s, l, u, c, e]);
    },
    f = (e) => ({ bannerUrl: e.bannerUrl, bannerAnimatedUrl: e.bannerAnimatedUrl }),
    h = (e) => ({ bannerURL: e.bannerURL, bannerAnimatedURL: e.bannerAnimatedURL });
