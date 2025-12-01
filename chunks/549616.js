n.d(t, { Z: () => m }), n(539854);
var r = n(979554),
    i = n(884697),
    a = n(27123),
    o = n(778787),
    s = n(803358);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class m extends s.Z {
    static fromServer(e) {
        var {
                products: t,
                logo: n,
                hero_ranking: r,
                pdp_bg: a,
                mobile_bg: s,
                mobile_banner: l,
                catalog_banner_asset: u,
                hero_banner_asset: p,
                featured_block: h,
                hero_logo: g,
                hero_logo_display_config: E,
                hero_banner_display_config: b,
                hero_banner_url: y,
                hero_banner_animated_url: O,
                hero_rive_url: v,
                hero_logo_url: S,
                catalog_banner_url: I,
                catalog_banner_animated_url: T,
                featured_block_url: A,
                logo_url: C,
                pdp_bg_url: N,
                mobile_banner_url: P,
                mobile_bg_url: R,
            } = e,
            w = f(e, [
                "products",
                "logo",
                "hero_ranking",
                "pdp_bg",
                "mobile_bg",
                "mobile_banner",
                "catalog_banner_asset",
                "hero_banner_asset",
                "featured_block",
                "hero_logo",
                "hero_logo_display_config",
                "hero_banner_display_config",
                "hero_banner_url",
                "hero_banner_animated_url",
                "hero_rive_url",
                "hero_logo_url",
                "catalog_banner_url",
                "catalog_banner_animated_url",
                "featured_block_url",
                "logo_url",
                "pdp_bg_url",
                "mobile_banner_url",
                "mobile_bg_url",
            ]);
        return new m(
            d(c({}, super.fromServer(w)), {
                products: t.reduce((e, t) => {
                    let n = o.Z.fromServer(t);
                    return (_(n.type) || 0 !== n.items.length) && e.push(n), e;
                }, []),
                logo: n,
                heroRanking: r,
                pdpBg: a,
                mobileBg: s,
                mobileBanner: l,
                catalogBannerAsset: u,
                heroBannerAsset: p,
                featuredBlock: h,
                heroLogo: g,
                heroLogoDisplayConfig: (0, i.QG)(E),
                heroBannerDisplayConfig: (0, i.QG)(b),
                heroBannerUrl: y,
                heroBannerAnimatedUrl: O,
                heroRiveUrl: v,
                heroLogoUrl: S,
                catalogBannerUrl: I,
                catalogBannerAnimatedUrl: T,
                featuredBlockUrl: A,
                logoUrl: C,
                pdpBgUrl: N,
                mobileBannerUrl: P,
                mobileBgUrl: R,
            }),
        );
    }
    constructor(e) {
        super(e),
            l(this, "products", void 0),
            l(this, "heroRanking", void 0),
            l(this, "logo", void 0),
            l(this, "pdpBg", void 0),
            l(this, "mobileBg", void 0),
            l(this, "mobileBanner", void 0),
            l(this, "catalogBannerAsset", void 0),
            l(this, "heroBannerAsset", void 0),
            l(this, "featuredBlock", void 0),
            l(this, "isOrbsExclusive", void 0),
            l(this, "heroLogo", void 0),
            l(this, "heroLogoDisplayConfig", void 0),
            l(this, "heroBannerDisplayConfig", void 0),
            l(this, "heroBannerUrl", void 0),
            l(this, "heroBannerAnimatedUrl", void 0),
            l(this, "heroRiveUrl", void 0),
            l(this, "heroLogoUrl", void 0),
            l(this, "catalogBannerUrl", void 0),
            l(this, "catalogBannerAnimatedUrl", void 0),
            l(this, "featuredBlockUrl", void 0),
            l(this, "logoUrl", void 0),
            l(this, "pdpBgUrl", void 0),
            l(this, "mobileBannerUrl", void 0),
            l(this, "mobileBgUrl", void 0),
            (this.products = e.products),
            (this.logo = e.logo),
            (this.heroRanking = e.heroRanking),
            (this.pdpBg = e.pdpBg),
            (this.mobileBg = e.mobileBg),
            (this.mobileBanner = e.mobileBanner),
            (this.catalogBannerAsset = e.catalogBannerAsset),
            (this.featuredBlock = e.featuredBlock),
            (this.isOrbsExclusive =
                Array.isArray(e.products) && e.products.length > 0 && void 0 === e.products.find((e) => !(0, a.r1)(e))),
            (this.heroLogo = e.heroLogo),
            (this.heroBannerAsset = e.heroBannerAsset),
            (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig),
            (this.heroBannerDisplayConfig = e.heroBannerDisplayConfig),
            (this.heroBannerUrl = e.heroBannerUrl),
            (this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl),
            (this.heroRiveUrl = e.heroRiveUrl),
            (this.heroLogoUrl = e.heroLogoUrl),
            (this.catalogBannerUrl = e.catalogBannerUrl),
            (this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl),
            (this.featuredBlockUrl = e.featuredBlockUrl),
            (this.logoUrl = e.logoUrl),
            (this.pdpBgUrl = e.pdpBgUrl),
            (this.mobileBannerUrl = e.mobileBannerUrl),
            (this.mobileBgUrl = e.mobileBgUrl);
    }
}
