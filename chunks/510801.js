"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(575593),
    r = n(993408),
    a = n(623373),
    s = n(986630),
    l = n(931772);
function o(e) {
    return e === i.R.VARIANTS_GROUP || e === i.R.EXTERNAL_SKU;
}
class d extends l.A {
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
                e.isOrbsExclusive ??
                (Array.isArray(e.products) &&
                    e.products.length > 0 &&
                    void 0 === e.products.find((e) => !(0, a.Ab)(e)))),
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
            hero_ranking: i,
            hero_logo_display_config: a,
            hero_banner_display_config: l,
            hero_banner_url: c,
            hero_banner_animated_url: u,
            hero_rive_url: _,
            hero_logo_url: E,
            catalog_banner_url: A,
            catalog_banner_animated_url: h,
            catalog_banner_rive_url: I,
            featured_block_url: f,
            logo_url: p,
            pdp_bg_url: T,
            mobile_banner_url: m,
            mobile_bg_url: g,
            ...S
        } = e;
        return new d({
            ...super.fromServer(S),
            products: t.reduce((e, t) => {
                let n = s.A.fromServer(t);
                return (o(n.type) || 0 !== n.items.length) && e.push(n), e;
            }, []),
            unpublishedAt: null != n ? new Date(n) : null,
            heroRanking: i,
            heroBannerUrl: c,
            heroBannerAnimatedUrl: u,
            heroRiveUrl: _,
            heroLogoUrl: E,
            catalogBannerUrl: A,
            catalogBannerAnimatedUrl: h,
            catalogBannerRiveUrl: I,
            featuredBlockUrl: f,
            logoUrl: p,
            pdpBgUrl: T,
            mobileBannerUrl: m,
            mobileBgUrl: g,
            heroLogoDisplayConfig: (0, r.f6)(a),
            heroBannerDisplayConfig: (0, r.f6)(l),
        });
    }
    static fromStorefrontCollectionRecord(e) {
        return new d({
            storeListingId: e.id,
            skuId: e.id,
            name: e.name,
            summary: e.description,
            unpublishedAt: e.unpublishedAt,
            isOrbsExclusive: e.isOrbsExclusive,
            styles: e.styles,
            products: e.products.reduce((e, t) => {
                let n = s.A.fromStorefrontProductRecord(t);
                return null != n && (o(n.type) || 0 !== n.items.length) && e.push(n), e;
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
