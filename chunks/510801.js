"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(575593),
    i = n(993408),
    s = n(623373),
    a = n(986630),
    o = n(931772);
let l = (e) => e === r.R.VARIANTS_GROUP || e === r.R.EXTERNAL_SKU;
class u extends o.A {
    products;
    heroRanking;
    unpublishedAt;
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
            (this.unpublishedAt = e.unpublishedAt),
            (this.isOrbsExclusive =
                Array.isArray(e.products) && e.products.length > 0 && void 0 === e.products.find((e) => !(0, s.Ab)(e))),
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
            unpublished_at: n,
            hero_ranking: r,
            hero_logo_display_config: s,
            hero_banner_display_config: o,
            hero_banner_url: c,
            hero_banner_animated_url: d,
            hero_rive_url: _,
            hero_logo_url: f,
            catalog_banner_url: p,
            catalog_banner_animated_url: h,
            catalog_banner_rive_url: m,
            featured_block_url: E,
            logo_url: g,
            pdp_bg_url: A,
            mobile_banner_url: I,
            mobile_bg_url: T,
            ...S
        } = e;
        return new u({
            ...super.fromServer(S),
            products: t.reduce((e, t) => {
                let n = a.A.fromServer(t);
                return (l(n.type) || 0 !== n.items.length) && e.push(n), e;
            }, []),
            unpublishedAt: null != n ? new Date(n) : null,
            heroRanking: r,
            heroBannerUrl: c,
            heroBannerAnimatedUrl: d,
            heroRiveUrl: _,
            heroLogoUrl: f,
            catalogBannerUrl: p,
            catalogBannerAnimatedUrl: h,
            catalogBannerRiveUrl: m,
            featuredBlockUrl: E,
            logoUrl: g,
            pdpBgUrl: A,
            mobileBannerUrl: I,
            mobileBgUrl: T,
            heroLogoDisplayConfig: (0, i.f6)(s),
            heroBannerDisplayConfig: (0, i.f6)(o),
        });
    }
    static fromStorefrontCollectionRecord(e) {
        return new u({
            storeListingId: e.id,
            skuId: e.id,
            name: e.name,
            summary: e.description,
            unpublishedAt: e.unpublishedAt,
            styles: e.styles,
            products: e.products.reduce((e, t) => {
                let n = a.A.fromStorefrontProductRecord(t);
                return null != n && (l(n.type) || 0 !== n.items.length) && e.push(n), e;
            }, []),
            heroRanking: e.heroRanking,
            heroBannerUrl: e.heroBannerUrl,
            heroBannerAnimatedUrl: e.heroBannerAnimatedUrl,
            heroRiveUrl: e.heroRiveUrl,
            heroLogoUrl: e.heroLogoUrl,
            catalogBannerUrl: e.catalogBannerUrl,
            catalogBannerAnimatedUrl: e.catalogBannerAnimatedUrl,
            catalogBannerRiveUrl: e.catalogBannerRiveUrl,
            featuredBlockUrl: e.featuredBlockUrl,
            logoUrl: e.logoUrl,
            pdpBgUrl: e.pdpBgUrl,
            mobileBannerUrl: e.mobileBannerUrl,
            mobileBgUrl: e.mobileBgUrl,
            heroLogoDisplayConfig: e.heroLogoDisplayConfig,
            heroBannerDisplayConfig: e.heroDisplayConfig,
        });
    }
}
