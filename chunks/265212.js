"use strict";
l.d(t, { A: () => i });
var r = l(749394),
    a = l(719986),
    n = l(19945);
class i {
    id;
    applicationId;
    name;
    description;
    products;
    createdAt;
    updatedAt;
    styles;
    bannerTextColor;
    heroRanking;
    heroDisplayConfig;
    heroLogoDisplayConfig;
    heroUrl;
    heroRiveUrl;
    heroAnimatedUrl;
    heroLogoUrl;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    catalogBannerUrl;
    catalogBannerRiveUrl;
    catalogBannerAnimatedUrl;
    featuredBlockUrl;
    logoUrl;
    pdpBgUrl;
    wideBannerUrl;
    wideBannerAnimatedUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    mobileBannerUrl;
    mobileBgUrl;
    shopButtonBgHoverUrl;
    upsellBannerPopoutUrl;
    upsellBannerUrl;
    heroBlockTitle;
    featuredBlockBody;
    mobileHeroBlockTitle;
    mobileProductsTitle;
    mobileSummary;
    wideBannerTitle;
    wideBannerBody;
    constructor(e) {
        (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.name = e.name),
            (this.description = e.description),
            (this.products = e.products),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.styles = e.styles),
            (this.bannerTextColor = e.bannerTextColor),
            (this.heroRanking = e.heroRanking),
            (this.heroDisplayConfig = e.heroDisplayConfig),
            (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig),
            (this.heroUrl = e.heroUrl),
            (this.heroRiveUrl = e.heroRiveUrl),
            (this.heroAnimatedUrl = e.heroAnimatedUrl),
            (this.heroLogoUrl = e.heroLogoUrl),
            (this.heroBannerUrl = e.heroBannerUrl),
            (this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl),
            (this.catalogBannerUrl = e.catalogBannerUrl),
            (this.catalogBannerRiveUrl = e.catalogBannerRiveUrl),
            (this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl),
            (this.featuredBlockUrl = e.featuredBlockUrl),
            (this.logoUrl = e.logoUrl),
            (this.pdpBgUrl = e.pdpBgUrl),
            (this.wideBannerUrl = e.wideBannerUrl),
            (this.wideBannerAnimatedUrl = e.wideBannerAnimatedUrl),
            (this.mobileHeroUrl = e.mobileHeroUrl),
            (this.mobileHeroAnimatedUrl = e.mobileHeroAnimatedUrl),
            (this.mobileBannerUrl = e.mobileBannerUrl),
            (this.mobileBgUrl = e.mobileBgUrl),
            (this.shopButtonBgHoverUrl = e.shopButtonBgHoverUrl),
            (this.upsellBannerPopoutUrl = e.upsellBannerPopoutUrl),
            (this.upsellBannerUrl = e.upsellBannerUrl),
            (this.heroBlockTitle = e.heroBlockTitle),
            (this.featuredBlockBody = e.featuredBlockBody),
            (this.mobileHeroBlockTitle = e.mobileHeroBlockTitle),
            (this.mobileProductsTitle = e.mobileProductsTitle),
            (this.mobileSummary = e.mobileSummary),
            (this.wideBannerTitle = e.wideBannerTitle),
            (this.wideBannerBody = e.wideBannerBody);
    }
    static fromServer(e) {
        let {
            collection: { application_id: t, created_at: l, updated_at: s, tenant_metadata: o, ...d },
            products: c,
        } = e;
        return new i({
            ...d,
            applicationId: t,
            products: c.map((e) => n.A.fromServer(e)),
            createdAt: new Date(l),
            updatedAt: new Date(s),
            styles: null != o.collectibles.styles ? r.A.fromServer(o.collectibles.styles) : void 0,
            bannerTextColor: o.collectibles.banner_text_color,
            heroRanking: o.collectibles.hero_ranking,
            heroDisplayConfig:
                null != o.collectibles.hero_display_config
                    ? a.M.fromServer(o.collectibles.hero_display_config)
                    : void 0,
            heroLogoDisplayConfig:
                null != o.collectibles.hero_logo_display_config
                    ? a.M.fromServer(o.collectibles.hero_logo_display_config)
                    : void 0,
            heroUrl: o.collectibles.hero_url,
            heroRiveUrl: o.collectibles.hero_rive_url,
            heroAnimatedUrl: o.collectibles.hero_animated_url,
            heroLogoUrl: o.collectibles.hero_logo_url,
            heroBannerUrl: o.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: o.collectibles.hero_banner_animated_url,
            catalogBannerUrl: o.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: o.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: o.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: o.collectibles.featured_block_url,
            logoUrl: o.collectibles.logo_url,
            pdpBgUrl: o.collectibles.pdp_bg_url,
            wideBannerUrl: o.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: o.collectibles.wide_banner_animated_url,
            mobileHeroUrl: o.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: o.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: o.collectibles.mobile_banner_url,
            mobileBgUrl: o.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: o.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: o.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: o.collectibles.upsell_banner_url,
            heroBlockTitle: o.collectibles.hero_block_title,
            featuredBlockBody: o.collectibles.featured_block_body,
            mobileHeroBlockTitle: o.collectibles.mobile_hero_block_title,
            mobileProductsTitle: o.collectibles.mobile_products_title,
            mobileSummary: o.collectibles.mobile_summary,
            wideBannerTitle: o.collectibles.wide_banner_title,
            wideBannerBody: o.collectibles.wide_banner_body,
        });
    }
}
