t.d(l, { A: () => a });
var r = t(749394),
    o = t(719986),
    n = t(19945);
class a {
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
            collection: { application_id: l, created_at: t, updated_at: i, tenant_metadata: d, ...c },
            products: s,
        } = e;
        return new a({
            ...c,
            applicationId: l,
            products: s.map((e) => n.A.fromServer(e)),
            createdAt: new Date(t),
            updatedAt: new Date(i),
            styles: null != d.collectibles.styles ? r.A.fromServer(d.collectibles.styles) : void 0,
            bannerTextColor: d.collectibles.banner_text_color,
            heroRanking: d.collectibles.hero_ranking,
            heroDisplayConfig:
                null != d.collectibles.hero_display_config
                    ? o.M.fromServer(d.collectibles.hero_display_config)
                    : void 0,
            heroLogoDisplayConfig:
                null != d.collectibles.hero_logo_display_config
                    ? o.M.fromServer(d.collectibles.hero_logo_display_config)
                    : void 0,
            heroUrl: d.collectibles.hero_url,
            heroRiveUrl: d.collectibles.hero_rive_url,
            heroAnimatedUrl: d.collectibles.hero_animated_url,
            heroLogoUrl: d.collectibles.hero_logo_url,
            heroBannerUrl: d.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: d.collectibles.hero_banner_animated_url,
            catalogBannerUrl: d.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: d.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: d.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: d.collectibles.featured_block_url,
            logoUrl: d.collectibles.logo_url,
            pdpBgUrl: d.collectibles.pdp_bg_url,
            wideBannerUrl: d.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: d.collectibles.wide_banner_animated_url,
            mobileHeroUrl: d.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: d.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: d.collectibles.mobile_banner_url,
            mobileBgUrl: d.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: d.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: d.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: d.collectibles.upsell_banner_url,
            heroBlockTitle: d.collectibles.hero_block_title,
            featuredBlockBody: d.collectibles.featured_block_body,
            mobileHeroBlockTitle: d.collectibles.mobile_hero_block_title,
            mobileProductsTitle: d.collectibles.mobile_products_title,
            mobileSummary: d.collectibles.mobile_summary,
            wideBannerTitle: d.collectibles.wide_banner_title,
            wideBannerBody: d.collectibles.wide_banner_body,
        });
    }
}
