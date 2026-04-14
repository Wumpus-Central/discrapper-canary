"use strict";
n.d(t, { A: () => a });
var r = n(749394),
    i = n(719986),
    s = n(103348);
class a {
    id;
    applicationId;
    name;
    description;
    products;
    createdAt;
    updatedAt;
    unpublishedAt;
    willUnpublishAt;
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
            (this.unpublishedAt = e.unpublishedAt),
            (this.willUnpublishAt = e.willUnpublishAt),
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
            application_id: t,
            created_at: n,
            updated_at: o,
            unpublished_at: l,
            unpublish_settings: u,
            tenant_metadata: c,
            ...d
        } = e;
        return new a({
            ...d,
            applicationId: t,
            products: d.products.map(s.A.fromServer),
            createdAt: new Date(n),
            updatedAt: new Date(o),
            unpublishedAt: null != l ? new Date(l) : void 0,
            willUnpublishAt: u?.will_unpublish_at != null ? new Date(u.will_unpublish_at) : void 0,
            styles: null != c.collectibles.styles ? r.A.fromServer(c.collectibles.styles) : void 0,
            bannerTextColor: c.collectibles.banner_text_color,
            heroRanking: c.collectibles.hero_ranking,
            heroDisplayConfig:
                null != c.collectibles.hero_display_config
                    ? i.M.fromServer(c.collectibles.hero_display_config)
                    : void 0,
            heroLogoDisplayConfig:
                null != c.collectibles.hero_logo_display_config
                    ? i.M.fromServer(c.collectibles.hero_logo_display_config)
                    : void 0,
            heroUrl: c.collectibles.hero_url,
            heroRiveUrl: c.collectibles.hero_rive_url,
            heroAnimatedUrl: c.collectibles.hero_animated_url,
            heroLogoUrl: c.collectibles.hero_logo_url,
            heroBannerUrl: c.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: c.collectibles.hero_banner_animated_url,
            catalogBannerUrl: c.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: c.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: c.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: c.collectibles.featured_block_url,
            logoUrl: c.collectibles.logo_url,
            pdpBgUrl: c.collectibles.pdp_bg_url,
            wideBannerUrl: c.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: c.collectibles.wide_banner_animated_url,
            mobileHeroUrl: c.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: c.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: c.collectibles.mobile_banner_url,
            mobileBgUrl: c.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: c.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: c.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: c.collectibles.upsell_banner_url,
            heroBlockTitle: c.collectibles.hero_block_title,
            featuredBlockBody: c.collectibles.featured_block_body,
            mobileHeroBlockTitle: c.collectibles.mobile_hero_block_title,
            mobileProductsTitle: c.collectibles.mobile_products_title,
            mobileSummary: c.collectibles.mobile_summary,
            wideBannerTitle: c.collectibles.wide_banner_title,
            wideBannerBody: c.collectibles.wide_banner_body,
        });
    }
}
