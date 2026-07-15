"use strict";
n.d(t, {
    rh: () => eo,
    CK: () => er,
    h$: () => e_,
    BX: () => eI,
    JJ: () => ec,
    RE: () => el,
    Or: () => eE,
    ue: () => eh,
    Jp: () => es,
    Sw: () => et,
    Cz: () => ee,
    iJ: () => ed,
    RD: () => en,
    gB: () => ea,
    T2: () => ef,
    gn: () => ei,
    Aq: () => eA,
    LX: () => eu,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    a = n(148803),
    s = n(635358),
    l = n(636537),
    o = n(228366);
n(398590);
var d = n(913122),
    c = n(865116),
    u = n(39418);
n(250953);
var _ = n(976860),
    E = n(773669),
    A = n(590180);
let h = (0, n(353640).v)((e) => ({
    logs: [],
    addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
    clearLogs: () => e({ logs: [] }),
}));
function I(e) {
    let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
        n = `[${t}] ${e}`;
    h.getState().addLog(n);
}
var f = n(4227),
    p = n(870216),
    T = n(993408),
    m = n(442007),
    g = n(510801),
    S = n(419709);
class N {
    categories;
    collections;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => g.A.fromServer(e))),
            (this.collections = e.collections.map((e) => m.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => S.T.fromServer(e)));
    }
    static fromServer(e) {
        return new N(e);
    }
}
var C = n(488430);
class R {
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = C.G.BADGE),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.showHoverGradient = e.showHoverGradient);
    }
    static fromServer(e) {
        return new R({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class O {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = C.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new O(e);
    }
}
class L {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    buttonLabel;
    constructor(e) {
        (this.type = C.G.COACHMARK),
            (this.title = e.title),
            (this.body = e.body),
            (this.assetDark = e.assetDark),
            (this.assetLight = e.assetLight),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.buttonLabel = e.buttonLabel);
    }
    static fromServer(e) {
        return new L({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            buttonLabel: e.button_label,
        });
    }
}
class D {
    title;
    body;
    asset;
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = C.G.TAB_TOOLTIP),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.showHoverGradient = e.showHoverGradient);
    }
    static fromServer(e) {
        return new D({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class y {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new y(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    switch (n?.type) {
                        case C.G.BADGE:
                            return [t, R.fromServer(n)];
                        case C.G.BANNER:
                            return [t, O.fromServer(n)];
                        case C.G.COACHMARK:
                            return [t, L.fromServer(n)];
                        case C.G.TAB_TOOLTIP:
                            return [t, D.fromServer(n)];
                        default:
                            return [t, void 0];
                    }
                }),
            ),
        );
    }
}
var v = n(986630),
    b = n(384726),
    M = n(696444),
    P = n(474012),
    U = n(758836),
    w = n(652215);
class G {
    skuId;
    name;
    type;
    premiumType;
    items;
    categorySkuId;
    isCategoryReward;
    prices;
    bundledProducts;
    variants;
    variantGroupStoreListingId;
    googleSkuIds;
    eligibleOffers;
    baseVariantName;
    baseVariantSkuId;
    variantLabel;
    variantValue;
    purchaseType;
    purchasedAt;
    expiresAt;
    constructor(e) {
        (this.skuId = e.skuId),
            (this.name = e.name),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.items = e.items),
            (this.categorySkuId = e.categorySkuId),
            (this.isCategoryReward = e.isCategoryReward),
            (this.prices = e.prices),
            (this.bundledProducts = e.bundledProducts),
            (this.googleSkuIds = e.googleSkuIds),
            (this.variants = e.variants),
            (this.eligibleOffers = e.eligibleOffers),
            (this.baseVariantName = e.baseVariantName),
            (this.baseVariantSkuId = e.baseVariantSkuId),
            (this.variantLabel = e.variantLabel),
            (this.variantValue = e.variantValue),
            (this.purchasedAt = e.purchasedAt),
            (this.purchaseType = e.purchaseType),
            (this.expiresAt = e.expiresAt);
    }
    static fromServer(e) {
        let {
            type: t,
            sku_id: n,
            name: i,
            premium_type: r,
            category_sku_id: a,
            prices: s,
            bundled_products: l,
            variants: o,
            base_variant_name: d,
            base_variant_sku_id: c,
            variant_label: u,
            variant_value: _,
            purchased_at: E,
            purchase_type: A,
            expires_at: h,
            ...I
        } = e;
        return new G({
            type: t,
            name: i,
            skuId: n,
            premiumType: r === w.oA2 ? null : r,
            categorySkuId: a,
            isCategoryReward: U.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, b.A)(s),
            items: (0, P.K)(I.items),
            bundledProducts: l?.map(M.A.fromServer),
            variants: o?.map(v.x.fromServer),
            googleSkuIds: I.google_sku_ids,
            eligibleOffers: I.eligible_offers,
            baseVariantName: d,
            baseVariantSkuId: c,
            variantLabel: u,
            variantValue: _,
            purchaseType: A,
            purchasedAt: null != E ? new Date(E) : E,
            expiresAt: null != h ? new Date(h) : null,
        });
    }
}
var x = n(651162);
class k {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = x.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new k(e);
    }
}
var F = n(424918);
class V {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = F.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url);
    }
    static fromServer(e) {
        return new V(e);
    }
}
class B {
    subblocks;
    constructor(e) {
        (this.type = x.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === F.u.CATEGORY ? V.fromServer(e) : (e.type, e))));
    }
    static fromServer(e) {
        return new B(e);
    }
}
class H {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = x.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new H(e);
    }
}
var j = n(325595);
class W {
    title;
    categorySkuId;
    categoryStoreListingId;
    rankedSkuIds;
    desktopBackgroundImage;
    mobileBackgroundImage;
    buttonText;
    constructor(e) {
        (this.type = x.g.FRAMES_PRODUCT_SHELF),
            (this.title = e.title),
            (this.categorySkuId = e.category_sku_id),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.rankedSkuIds = e.ranked_sku_ids ?? []),
            (this.desktopBackgroundImage = e.desktop_background_image ?? e.background_image),
            (this.mobileBackgroundImage = e.mobile_background_image ?? e.background_image),
            (this.buttonText = e.button_text);
    }
    static fromServer(e) {
        return new W(e);
    }
}
class Y {
    categorySkuId;
    name;
    summary;
    categoryStoreListingId;
    title;
    rankedSkuIds;
    unpublishedAt;
    bannerTextColor;
    mobileTitle;
    mobileSummary;
    mobileProductsTitle;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    bannerDisplayConfig;
    logoDisplayConfig;
    constructor(e) {
        (this.type = x.g.HERO),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.summary = e.summary.trim()),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.title = e.title),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bannerTextColor = e.banner_text_color),
            (this.mobileTitle = e.mobile_title),
            (this.mobileSummary = e.mobile_summary),
            (this.mobileProductsTitle = e.mobile_products_title),
            (this.heroBannerUrl = e.hero_banner_url),
            (this.heroBannerAnimatedUrl = e.hero_banner_animated_url),
            (this.heroRiveUrl = e.hero_rive_url),
            (this.heroLogoUrl = e.hero_logo_url),
            (this.mobileHeroUrl = e.mobile_hero_url),
            (this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url),
            (this.bannerDisplayConfig = (0, T.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, T.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new Y(e);
    }
}
class K {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = x.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new K(e);
    }
}
class $ {
    categorySkuId;
    name;
    summary;
    categoryStoreListingId;
    title;
    rankedSkuIds;
    unpublishedAt;
    bannerTextColor;
    mobileTitle;
    mobileSummary;
    mobileProductsTitle;
    rewardSkuId;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    bannerDisplayConfig;
    logoDisplayConfig;
    constructor(e) {
        (this.type = x.g.REWARD_HERO),
            (this.categorySkuId = e.category_sku_id),
            (this.name = e.name),
            (this.summary = e.summary.trim()),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.title = e.title),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bannerTextColor = e.banner_text_color),
            (this.mobileTitle = e.mobile_title),
            (this.mobileSummary = e.mobile_summary),
            (this.mobileProductsTitle = e.mobile_products_title),
            (this.rewardSkuId = e.reward_sku_id),
            (this.heroBannerUrl = e.hero_banner_url),
            (this.heroBannerAnimatedUrl = e.hero_banner_animated_url),
            (this.heroRiveUrl = e.hero_rive_url),
            (this.heroLogoUrl = e.hero_logo_url),
            (this.mobileHeroUrl = e.mobile_hero_url),
            (this.mobileHeroAnimatedUrl = e.mobile_hero_animated_url),
            (this.logoDisplayConfig = (0, T.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, T.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new $(e);
    }
}
class z {
    name;
    rankedSkuIds;
    categorySkuId;
    showButton;
    buttonText;
    titleColor;
    desktopBackgroundImage;
    mobileBackgroundImage;
    constructor(e) {
        (this.type = x.g.SHELF),
            (this.name = e.name),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.categorySkuId = e.category_sku_id ?? null),
            (this.showButton = !1 !== e.show_button),
            (this.buttonText = e.button_text ?? null),
            (this.titleColor = e.title_color ?? null),
            (this.desktopBackgroundImage = e.desktop_background_image ?? null),
            (this.mobileBackgroundImage = e.mobile_background_image ?? null);
    }
    static fromServer(e) {
        return new z(e);
    }
}
class q {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    ctaType;
    logoUrl;
    constructor(e) {
        (this.type = x.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time),
            (this.ctaType = e.cta_type),
            (this.logoUrl = e.logo_url);
    }
    static fromServer(e) {
        return new q(e);
    }
}
var Z = n(893998);
class X {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case x.g.HERO:
                        return Y.fromServer(e);
                    case x.g.FEATURED:
                        return B.fromServer(e);
                    case x.g.FEED:
                        return H.fromServer(e);
                    case x.g.WIDE_BANNER:
                        return Z.y.fromServer(e);
                    case x.g.SHELF:
                        return z.fromServer(e);
                    case x.g.COUNTDOWN_TIMER:
                        return k.fromServer(e);
                    case x.g.IMMERSIVE_BANNER:
                        return K.fromServer(e);
                    case x.g.REWARD_HERO:
                        return $.fromServer(e);
                    case x.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return q.fromServer(e);
                    case x.g.FRAMES_BANNER:
                        return j.p.fromServer(e);
                    case x.g.FRAMES_PRODUCT_SHELF:
                        return W.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => g.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => S.T.fromServer(e)));
    }
    static fromServer(e) {
        return new X(e);
    }
}
var Q = n(100057),
    J = n(181774);
function ee(e) {
    let { tab: t, ...i } = e;
    {
        let { default: e } = n(830543),
            { default: r } = n(408166);
        et(i), e(), r(), (0, _.pX)(null != t ? w.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : w.BVt.COLLECTIBLES_SHOP);
    }
}
function et(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
}
function en(e) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
}
n(457421), n(295811);
function ei(e, t) {
    return (
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories
    );
}
async function er(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
    let i = (0, J.ao)(e),
        r = c.Ay.get("shop_show_debug_overlay");
    e?.logPerf &&
        (0, Q.z)({
            sessionId: n?.sessionId,
            checkpoint: Q.t.CATEGORIES_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: e?.includeUnpublished,
            cacheDisabled: e?.noCache,
        }),
        r && I(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
    try {
        let a = await l.Bo.get({ url: w.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
        e?.logPerf &&
            (0, Q.z)({
                sessionId: n?.sessionId,
                checkpoint: Q.t.CATEGORIES_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && I(`fetchCollectiblesCategories completed ${a.body.categories.length} categories`),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: N.fromServer(a.body), noOp: t });
    } catch (t) {
        let e = new d.LG(t);
        (0, u.o)(e),
            o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
            r && I(`fetchCollectiblesCategories failed: ${e.message}`);
    }
}
async function ea() {
    if (f.A.isFetching) return;
    o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
    let e = c.Ay.get("shop_show_debug_overlay");
    e && I("fetchCollectiblesPurchases started");
    try {
        let t = {
            url: w.Rsh.COLLECTIBLES_PURCHASES,
            rejectWithError: !0,
            query: { variants_return_style: s.g.VARIANTS_GROUP },
        };
        e && I(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
        let n = await l.Bo.get(t);
        e && I(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(G.fromServer) });
    } catch (n) {
        let t = new d.LG(n);
        throw (
            ((0, u.o)(t),
            e && I(`fetchCollectiblesPurchases failed: ${t.message}`),
            o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
            t)
        );
    }
}
async function es(e, t) {
    o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
    try {
        let n = { locale: E.default.locale };
        t?.countryCode !== null && (n.country_code = t?.countryCode),
            t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
            t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
        let i = await l.Bo.get({ url: w.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
        o.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
            skuId: e,
            product: v.A.fromServer(i.body),
            endedAt: Date.now(),
        });
    } catch (n) {
        let t = new d.LG(n);
        (0, u.o)(t),
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
    }
}
async function el(e, t) {
    A.A.isFetchingProduct(e) || A.A.isProductFetchBackedOff(e) || (await es(e, t));
}
function eo(e) {
    let t = Date.now();
    for (let n of (0, T.XS)([e]))
        null == A.A.getProduct(n.skuId) &&
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: n.skuId, product: n, endedAt: t });
}
async function ed(e) {
    o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
    try {
        let t = await l.Bo.put({ url: w.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(G.fromServer) });
    } catch (n) {
        let t = new d.LG(n);
        throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
    }
}
async function ec(e, t) {
    try {
        return (
            await l.Bo.get({
                url: w.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                query: { sku_id: t, recipient_id: e },
                rejectWithError: !0,
            })
        ).body.valid;
    } catch (e) {
        return (0, u.o)(new d.LG(e)), !1;
    }
}
async function eu(e) {
    let { release: t = a.P.PROD } = e;
    o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    let n = { platform: r.DESKTOP };
    t !== a.P.PROD && (n.release = t);
    try {
        let e = await l.Bo.get({ url: w.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: y.fromServer(e.body) });
    } catch (e) {
        (0, u.o)(new d.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
    }
}
async function e_(e, t, n) {
    o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
    let i = (0, J.ao)(t, e);
    t?.logPerf &&
        (0, Q.z)({
            sessionId: n?.sessionId,
            checkpoint: Q.t.SHOP_HOME_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: t?.includeUnpublished,
            cacheDisabled: t?.noCache,
        });
    try {
        let r = await l.Bo.get({ url: w.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
        t?.logPerf &&
            (0, Q.z)({
                sessionId: n?.sessionId,
                checkpoint: Q.t.SHOP_HOME_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            }),
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: X.fromServer(r.body) });
    } catch (n) {
        let t = new d.LG(n);
        (0, u.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
    }
}
function eE(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
}
function eA(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
}
function eh(e) {
    o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
}
async function eI(e, t) {
    o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
    try {
        let n = await l.Bo.put({
            url: w.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
            body: { category_id: e },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(G.fromServer) });
    } catch (n) {
        let e = new d.LG(n);
        throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
    }
}
async function ef(e) {
    let { tab: t, abortSignal: n } = e;
    if (p.A.isFetchingLayout(t)) return;
    let i = p.A.getLayoutFetchError(t);
    if (i?.status !== 404 && i?.status !== 429)
        try {
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
            let e = await l.Bo.get({ url: w.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
            o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: t, layoutId: e.body.layout_id });
        } catch (n) {
            let e = new d.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
        }
}
