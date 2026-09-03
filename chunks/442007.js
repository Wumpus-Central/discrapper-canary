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
    isOrbsExclusive;
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
            (this.isOrbsExclusive = e.isOrbsExclusive),
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
                is_orbs_exclusive: u,
                ..._
            } = e,
            E = c.collectibles ?? {};
        return new s({
            ..._,
            applicationId: t,
            products: (_.products ?? []).map(a.A.fromServer),
            isOrbsExclusive: u,
            createdAt: new Date(n),
            updatedAt: new Date(l),
            unpublishedAt: null != o ? new Date(o) : void 0,
            willUnpublishAt: d?.will_unpublish_at != null ? new Date(d.will_unpublish_at) : void 0,
            styles: null != E.styles ? i.A.fromServer(E.styles) : void 0,
            bannerTextColor: E.banner_text_color,
            heroRanking: E.hero_ranking,
            heroDisplayConfig: null != E.hero_display_config ? r.M.fromServer(E.hero_display_config) : void 0,
            heroLogoDisplayConfig:
                null != E.hero_logo_display_config ? r.M.fromServer(E.hero_logo_display_config) : void 0,
            heroUrl: E.hero_url,
            heroRiveUrl: E.hero_rive_url,
            heroAnimatedUrl: E.hero_animated_url,
            heroLogoUrl: E.hero_logo_url,
            heroBannerUrl: E.hero_banner_url,
            heroBannerAnimatedUrl: E.hero_banner_animated_url,
            catalogBannerUrl: E.catalog_banner_url,
            catalogBannerRiveUrl: E.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: E.catalog_banner_animated_url,
            featuredBlockUrl: E.featured_block_url,
            logoUrl: E.logo_url,
            pdpBgUrl: E.pdp_bg_url,
            wideBannerUrl: E.wide_banner_url,
            wideBannerAnimatedUrl: E.wide_banner_animated_url,
            mobileHeroUrl: E.mobile_hero_url,
            mobileHeroAnimatedUrl: E.mobile_hero_animated_url,
            mobileBannerUrl: E.mobile_banner_url,
            mobileBgUrl: E.mobile_bg_url,
            shopButtonBgHoverUrl: E.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: E.upsell_banner_popout_url,
            upsellBannerUrl: E.upsell_banner_url,
            heroBlockTitle: E.hero_block_title,
            featuredBlockBody: E.featured_block_body,
            mobileHeroBlockTitle: E.mobile_hero_block_title,
            mobileProductsTitle: E.mobile_products_title,
            mobileSummary: E.mobile_summary,
            wideBannerTitle: E.wide_banner_title,
            wideBannerBody: E.wide_banner_body,
        });
    }
}
