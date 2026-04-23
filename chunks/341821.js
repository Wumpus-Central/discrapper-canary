"use strict";
n.d(t, { x: () => h });
var i = n(440745),
    r = n.n(i),
    s = n(317097),
    a = n(315069);
class o extends a.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
        super(),
            (this.backgroundColors = e.backgroundColors),
            (this.buttonColors = e.buttonColors),
            (this.confettiColors = e.confettiColors);
    }
    static fromServer(e) {
        let { background_colors: t, button_colors: n, confetti_colors: i } = e;
        return new o({
            backgroundColors: t.map((e) => r()((0, s.Hl)(e))),
            buttonColors: n.map((e) => r()((0, s.Hl)(e))),
            confettiColors: i.map((e) => r()((0, s.Hl)(e))),
        });
    }
}
var l = n(719986),
    d = n(32731);
class _ {
    id;
    skuIds;
    name;
    summary;
    options;
    createdAt;
    updatedAt;
    skus;
    primaryCollectionId;
    primaryCollectionStyles;
    primaryCollectionPdpBgUrl;
    primaryCollectionWillUnpublishAt;
    constructor(e) {
        (this.id = e.id),
            (this.skuIds = e.skuIds),
            (this.name = e.name),
            (this.summary = e.summary),
            (this.options = e.options),
            (this.createdAt = e.createdAt),
            (this.updatedAt = e.updatedAt),
            (this.skus = e.skus),
            (this.primaryCollectionId = e.primaryCollectionId),
            (this.primaryCollectionStyles = e.primaryCollectionStyles),
            (this.primaryCollectionPdpBgUrl = e.primaryCollectionPdpBgUrl),
            (this.primaryCollectionWillUnpublishAt = e.primaryCollectionWillUnpublishAt);
    }
    static fromServer(e) {
        let { sku_ids: t, options: n, created_at: i, updated_at: r, skus: s, tenant_metadata: a, ...l } = e;
        return new _({
            ...l,
            skuIds: t,
            options: n.map((e) => ({ name: e.name, optionValues: e.option_values })),
            createdAt: new Date(i),
            updatedAt: new Date(r),
            skus: s.map((e) => d.A.createFromServer(e)),
            primaryCollectionId: a.collectibles.primary_collection_id,
            primaryCollectionStyles:
                null != a.collectibles.primary_collection_styles
                    ? o.fromServer(a.collectibles.primary_collection_styles)
                    : void 0,
            primaryCollectionPdpBgUrl: a.collectibles.primary_collection_pdp_bg_url,
            primaryCollectionWillUnpublishAt:
                null != a.collectibles.primary_collection_will_unpublish_at
                    ? new Date(a.collectibles.primary_collection_will_unpublish_at)
                    : void 0,
        });
    }
}
class u {
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
            updated_at: i,
            unpublished_at: r,
            unpublish_settings: s,
            tenant_metadata: a,
            ...d
        } = e;
        return new u({
            ...d,
            applicationId: t,
            products: d.products.map(_.fromServer),
            createdAt: new Date(n),
            updatedAt: new Date(i),
            unpublishedAt: null != r ? new Date(r) : void 0,
            willUnpublishAt: s?.will_unpublish_at != null ? new Date(s.will_unpublish_at) : void 0,
            styles: null != a.collectibles.styles ? o.fromServer(a.collectibles.styles) : void 0,
            bannerTextColor: a.collectibles.banner_text_color,
            heroRanking: a.collectibles.hero_ranking,
            heroDisplayConfig:
                null != a.collectibles.hero_display_config
                    ? l.M.fromServer(a.collectibles.hero_display_config)
                    : void 0,
            heroLogoDisplayConfig:
                null != a.collectibles.hero_logo_display_config
                    ? l.M.fromServer(a.collectibles.hero_logo_display_config)
                    : void 0,
            heroUrl: a.collectibles.hero_url,
            heroRiveUrl: a.collectibles.hero_rive_url,
            heroAnimatedUrl: a.collectibles.hero_animated_url,
            heroLogoUrl: a.collectibles.hero_logo_url,
            heroBannerUrl: a.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: a.collectibles.hero_banner_animated_url,
            catalogBannerUrl: a.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: a.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: a.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: a.collectibles.featured_block_url,
            logoUrl: a.collectibles.logo_url,
            pdpBgUrl: a.collectibles.pdp_bg_url,
            wideBannerUrl: a.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: a.collectibles.wide_banner_animated_url,
            mobileHeroUrl: a.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: a.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: a.collectibles.mobile_banner_url,
            mobileBgUrl: a.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: a.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: a.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: a.collectibles.upsell_banner_url,
            heroBlockTitle: a.collectibles.hero_block_title,
            featuredBlockBody: a.collectibles.featured_block_body,
            mobileHeroBlockTitle: a.collectibles.mobile_hero_block_title,
            mobileProductsTitle: a.collectibles.mobile_products_title,
            mobileSummary: a.collectibles.mobile_summary,
            wideBannerTitle: a.collectibles.wide_banner_title,
            wideBannerBody: a.collectibles.wide_banner_body,
        });
    }
}
var c = n(510801),
    E = n(419709);
class h {
    categories;
    collections;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => c.A.fromServer(e))),
            (this.collections = e.collections.map((e) => u.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => E.T.fromServer(e)));
    }
    static fromServer(e) {
        return new h(e);
    }
}
