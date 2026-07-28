"use strict";
n.d(t, { A: () => s });
var i = n(749394),
    r = n(719986),
    a = n(103348);
class s {
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
                updated_at: l,
                unpublished_at: o,
                unpublish_settings: d,
                tenant_metadata: c,
                ...u
            } = e,
            _ = c.collectibles ?? {};
        return new s({
            ...u,
            applicationId: t,
            products: u.products.map(a.A.fromServer),
            createdAt: new Date(n),
            updatedAt: new Date(l),
            unpublishedAt: null != o ? new Date(o) : void 0,
            willUnpublishAt: d?.will_unpublish_at != null ? new Date(d.will_unpublish_at) : void 0,
            styles: null != _.styles ? i.A.fromServer(_.styles) : void 0,
            bannerTextColor: _.banner_text_color,
            heroRanking: _.hero_ranking,
            heroDisplayConfig: null != _.hero_display_config ? r.M.fromServer(_.hero_display_config) : void 0,
            heroLogoDisplayConfig:
                null != _.hero_logo_display_config ? r.M.fromServer(_.hero_logo_display_config) : void 0,
            heroUrl: _.hero_url,
            heroRiveUrl: _.hero_rive_url,
            heroAnimatedUrl: _.hero_animated_url,
            heroLogoUrl: _.hero_logo_url,
            heroBannerUrl: _.hero_banner_url,
            heroBannerAnimatedUrl: _.hero_banner_animated_url,
            catalogBannerUrl: _.catalog_banner_url,
            catalogBannerRiveUrl: _.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: _.catalog_banner_animated_url,
            featuredBlockUrl: _.featured_block_url,
            logoUrl: _.logo_url,
            pdpBgUrl: _.pdp_bg_url,
            wideBannerUrl: _.wide_banner_url,
            wideBannerAnimatedUrl: _.wide_banner_animated_url,
            mobileHeroUrl: _.mobile_hero_url,
            mobileHeroAnimatedUrl: _.mobile_hero_animated_url,
            mobileBannerUrl: _.mobile_banner_url,
            mobileBgUrl: _.mobile_bg_url,
            shopButtonBgHoverUrl: _.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: _.upsell_banner_popout_url,
            upsellBannerUrl: _.upsell_banner_url,
            heroBlockTitle: _.hero_block_title,
            featuredBlockBody: _.featured_block_body,
            mobileHeroBlockTitle: _.mobile_hero_block_title,
            mobileProductsTitle: _.mobile_products_title,
            mobileSummary: _.mobile_summary,
            wideBannerTitle: _.wide_banner_title,
            wideBannerBody: _.wide_banner_body,
        });
    }
}
