"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(575593),
    i = n(993408),
    a = n(623373),
    s = n(986630),
    o = n(931772);
let l = (e) => e === r.R.VARIANTS_GROUP || e === r.R.EXTERNAL_SKU;
class u extends o.A {
    products;
    heroRanking;
    isOrbsExclusive;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    catalogBannerUrl;
    catalogBannerAnimatedUrl;
    catalogBannerRiveUrl;
    featuredBlockUrl;
    logoUrl;
    pdpBgUrl;
    mobileBannerUrl;
    mobileBgUrl;
    heroLogoDisplayConfig;
    heroBannerDisplayConfig;
    constructor(e) {
        super(e),
            (this.products = e.products),
            (this.heroRanking = e.heroRanking),
            (this.isOrbsExclusive =
                Array.isArray(e.products) && e.products.length > 0 && void 0 === e.products.find((e) => !(0, a.Ab)(e))),
            (this.heroBannerUrl = e.heroBannerUrl),
            (this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl),
            (this.heroRiveUrl = e.heroRiveUrl),
            (this.heroLogoUrl = e.heroLogoUrl),
            (this.catalogBannerUrl = e.catalogBannerUrl),
            (this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl),
            (this.catalogBannerRiveUrl = e.catalogBannerRiveUrl),
            (this.featuredBlockUrl = e.featuredBlockUrl),
            (this.logoUrl = e.logoUrl),
            (this.pdpBgUrl = e.pdpBgUrl),
            (this.mobileBannerUrl = e.mobileBannerUrl),
            (this.mobileBgUrl = e.mobileBgUrl),
            (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig),
            (this.heroBannerDisplayConfig = e.heroBannerDisplayConfig);
    }
    static fromServer(e) {
        let {
            products: t,
            hero_ranking: n,
            hero_logo_display_config: r,
            hero_banner_display_config: a,
            hero_banner_url: o,
            hero_banner_animated_url: c,
            hero_rive_url: d,
            hero_logo_url: _,
            catalog_banner_url: f,
            catalog_banner_animated_url: p,
            catalog_banner_rive_url: h,
            featured_block_url: m,
            logo_url: g,
            pdp_bg_url: E,
            mobile_banner_url: A,
            mobile_bg_url: I,
            ...T
        } = e;
        return new u({
            ...super.fromServer(T),
            products: t.reduce((e, t) => {
                let n = s.A.fromServer(t);
                return (l(n.type) || 0 !== n.items.length) && e.push(n), e;
            }, []),
            heroRanking: n,
            heroBannerUrl: o,
            heroBannerAnimatedUrl: c,
            heroRiveUrl: d,
            heroLogoUrl: _,
            catalogBannerUrl: f,
            catalogBannerAnimatedUrl: p,
            catalogBannerRiveUrl: h,
            featuredBlockUrl: m,
            logoUrl: g,
            pdpBgUrl: E,
            mobileBannerUrl: A,
            mobileBgUrl: I,
            heroLogoDisplayConfig: (0, i.f6)(r),
            heroBannerDisplayConfig: (0, i.f6)(a),
        });
    }
}
