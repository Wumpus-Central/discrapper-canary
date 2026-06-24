"use strict";
n.d(t, {
    rh: () => el,
    CK: () => er,
    h$: () => e_,
    BX: () => eE,
    JJ: () => ec,
    RE: () => eo,
    Or: () => eh,
    ue: () => ep,
    Jp: () => ea,
    Sw: () => et,
    Cz: () => ee,
    iJ: () => eu,
    RD: () => en,
    gB: () => es,
    T2: () => em,
    gn: () => ei,
    Aq: () => ef,
    LX: () => ed,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    s = n(148803),
    a = n(635358),
    o = n(636537),
    l = n(228366);
n(398590);
var u = n(913122),
    c = n(865116);
n(250953);
var d = n(976860),
    _ = n(773669),
    h = n(590180);
let f = (0, n(353640).v)((e) => ({
    logs: [],
    addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
    clearLogs: () => e({ logs: [] }),
}));
function p(e) {
    let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
        n = `[${t}] ${e}`;
    f.getState().addLog(n);
}
var E = n(4227),
    m = n(870216),
    g = n(993408),
    A = n(442007),
    I = n(510801),
    T = n(419709);
class S {
    categories;
    collections;
    userDiscounts;
    constructor(e) {
        (this.categories = e.categories.map((e) => I.A.fromServer(e))),
            (this.collections = e.collections.map((e) => A.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => T.T.fromServer(e)));
    }
    static fromServer(e) {
        return new S(e);
    }
}
var y = n(488430);
class C {
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    showHoverGradient;
    constructor(e) {
        (this.type = y.G.BADGE),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText),
            (this.showHoverGradient = e.showHoverGradient);
    }
    static fromServer(e) {
        return new C({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
            showHoverGradient: e.show_hover_gradient,
        });
    }
}
class N {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = y.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new N(e);
    }
}
class v {
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
        (this.type = y.G.COACHMARK),
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
        return new v({
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
class R {
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
        (this.type = y.G.TAB_TOOLTIP),
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
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new O(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    switch (n?.type) {
                        case y.G.BADGE:
                            return [t, C.fromServer(n)];
                        case y.G.BANNER:
                            return [t, N.fromServer(n)];
                        case y.G.COACHMARK:
                            return [t, v.fromServer(n)];
                        case y.G.TAB_TOOLTIP:
                            return [t, R.fromServer(n)];
                        default:
                            return [t, void 0];
                    }
                }),
            ),
        );
    }
}
var b = n(986630),
    D = n(384726),
    L = n(696444),
    w = n(474012),
    M = n(758836),
    P = n(652215);
class x {
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
            category_sku_id: s,
            prices: a,
            bundled_products: o,
            variants: l,
            base_variant_name: u,
            base_variant_sku_id: c,
            variant_label: d,
            variant_value: _,
            purchased_at: h,
            purchase_type: f,
            expires_at: p,
            ...E
        } = e;
        return new x({
            type: t,
            name: i,
            skuId: n,
            premiumType: r === P.oA2 ? null : r,
            categorySkuId: s,
            isCategoryReward: M.MS.some((e) => {
                let { rewardSkuId: t } = e;
                return t === n;
            }),
            prices: (0, D.A)(a),
            items: (0, w.K)(E.items),
            bundledProducts: o?.map(L.A.fromServer),
            variants: l?.map(b.x.fromServer),
            googleSkuIds: E.google_sku_ids,
            eligibleOffers: E.eligible_offers,
            baseVariantName: u,
            baseVariantSkuId: c,
            variantLabel: d,
            variantValue: _,
            purchaseType: f,
            purchasedAt: null != h ? new Date(h) : h,
            expiresAt: null != p ? new Date(p) : null,
        });
    }
}
var k = n(651162);
class U {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = k.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new U(e);
    }
}
var G = n(424918);
class F {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = G.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url);
    }
    static fromServer(e) {
        return new F(e);
    }
}
class V {
    subblocks;
    constructor(e) {
        (this.type = k.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === G.u.CATEGORY ? F.fromServer(e) : (e.type, e))));
    }
    static fromServer(e) {
        return new V(e);
    }
}
class B {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = k.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new B(e);
    }
}
var j = n(325595);
class H {
    title;
    categorySkuId;
    categoryStoreListingId;
    rankedSkuIds;
    desktopBackgroundImage;
    mobileBackgroundImage;
    buttonText;
    constructor(e) {
        (this.type = k.g.FRAMES_PRODUCT_SHELF),
            (this.title = e.title),
            (this.categorySkuId = e.category_sku_id),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.rankedSkuIds = e.ranked_sku_ids ?? []),
            (this.desktopBackgroundImage = e.desktop_background_image ?? e.background_image),
            (this.mobileBackgroundImage = e.mobile_background_image ?? e.background_image),
            (this.buttonText = e.button_text);
    }
    static fromServer(e) {
        return new H(e);
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
        (this.type = k.g.HERO),
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
            (this.bannerDisplayConfig = (0, g.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, g.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new Y(e);
    }
}
class W {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = k.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new W(e);
    }
}
class K {
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
        (this.type = k.g.REWARD_HERO),
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
            (this.logoDisplayConfig = (0, g.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, g.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new K(e);
    }
}
class $ {
    name;
    rankedSkuIds;
    categorySkuId;
    showButton;
    buttonText;
    titleColor;
    desktopBackgroundImage;
    mobileBackgroundImage;
    constructor(e) {
        (this.type = k.g.SHELF),
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
        return new $(e);
    }
}
class z {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    ctaType;
    logoUrl;
    constructor(e) {
        (this.type = k.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
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
        return new z(e);
    }
}
var q = n(893998);
class Z {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case k.g.HERO:
                        return Y.fromServer(e);
                    case k.g.FEATURED:
                        return V.fromServer(e);
                    case k.g.FEED:
                        return B.fromServer(e);
                    case k.g.WIDE_BANNER:
                        return q.y.fromServer(e);
                    case k.g.SHELF:
                        return $.fromServer(e);
                    case k.g.COUNTDOWN_TIMER:
                        return U.fromServer(e);
                    case k.g.IMMERSIVE_BANNER:
                        return W.fromServer(e);
                    case k.g.REWARD_HERO:
                        return K.fromServer(e);
                    case k.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return z.fromServer(e);
                    case k.g.FRAMES_BANNER:
                        return j.p.fromServer(e);
                    case k.g.FRAMES_PRODUCT_SHELF:
                        return H.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => I.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => T.T.fromServer(e)));
    }
    static fromServer(e) {
        return new Z(e);
    }
}
var X = n(100057),
    Q = n(181774),
    J = n(18572);
function ee(e) {
    let { tab: t, ...i } = e;
    {
        let { default: e } = n(830543),
            { default: r } = n(408166);
        et(i), e(), r(), (0, d.pX)(null != t ? P.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : P.BVt.COLLECTIBLES_SHOP);
    }
}
function et(e) {
    l.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
}
function en(e) {
    l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
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
    l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
    let i = (0, Q.ao)(e),
        r = c.Ay.get("shop_show_debug_overlay");
    e?.logPerf &&
        (0, X.z)({
            sessionId: n?.sessionId,
            checkpoint: X.t.CATEGORIES_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: e?.includeUnpublished,
            cacheDisabled: e?.noCache,
        }),
        r && p(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
    try {
        let s = await o.Bo.get({ url: P.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
        e?.logPerf &&
            (0, X.z)({
                sessionId: n?.sessionId,
                checkpoint: X.t.CATEGORIES_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && p(`fetchCollectiblesCategories completed ${s.body.categories.length} categories`),
            l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS", categories: S.fromServer(s.body), noOp: t });
    } catch (t) {
        let e = new u.LG(t);
        (0, J.o)(e),
            l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
            r && p(`fetchCollectiblesCategories failed: ${e.message}`);
    }
}
async function es() {
    if (E.A.isFetching) return;
    l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
    let e = c.Ay.get("shop_show_debug_overlay");
    e && p("fetchCollectiblesPurchases started");
    try {
        let t = {
            url: P.Rsh.COLLECTIBLES_PURCHASES,
            rejectWithError: !0,
            query: { variants_return_style: a.g.VARIANTS_GROUP },
        };
        e && p(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
        let n = await o.Bo.get(t);
        e && p(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
            l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(x.fromServer) });
    } catch (n) {
        let t = new u.LG(n);
        throw (
            ((0, J.o)(t),
            e && p(`fetchCollectiblesPurchases failed: ${t.message}`),
            l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
            t)
        );
    }
}
async function ea(e, t) {
    l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
    try {
        let n = { locale: _.default.locale };
        t?.countryCode !== null && (n.country_code = t?.countryCode),
            t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
            t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
        let i = await o.Bo.get({ url: P.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
        l.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
            skuId: e,
            product: b.A.fromServer(i.body),
            endedAt: Date.now(),
        });
    } catch (n) {
        let t = new u.LG(n);
        (0, J.o)(t),
            l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
    }
}
async function eo(e, t) {
    h.A.isFetchingProduct(e) || (await ea(e, t));
}
function el(e) {
    let t = Date.now();
    for (let n of (0, g.XS)([e]))
        null == h.A.getProduct(n.skuId) &&
            l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: n.skuId, product: n, endedAt: t });
}
async function eu(e) {
    l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
    try {
        let t = await o.Bo.put({ url: P.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(x.fromServer) });
    } catch (n) {
        let t = new u.LG(n);
        throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
    }
}
async function ec(e, t) {
    try {
        return (
            await o.Bo.get({
                url: P.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                query: { sku_id: t, recipient_id: e },
                rejectWithError: !0,
            })
        ).body.valid;
    } catch (e) {
        return (0, J.o)(new u.LG(e)), !1;
    }
}
async function ed(e) {
    let { release: t = s.P.PROD } = e;
    l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
    let n = { platform: r.DESKTOP };
    t !== s.P.PROD && (n.release = t);
    try {
        let e = await o.Bo.get({ url: P.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
        l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: O.fromServer(e.body) });
    } catch (e) {
        (0, J.o)(new u.LG(e)), l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
    }
}
async function e_(e, t, n) {
    l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
    let i = (0, Q.ao)(t, e);
    t?.logPerf &&
        (0, X.z)({
            sessionId: n?.sessionId,
            checkpoint: X.t.SHOP_HOME_FETCH_STARTED,
            tab: n?.tab,
            unpublishedCategoriesShown: t?.includeUnpublished,
            cacheDisabled: t?.noCache,
        });
    try {
        let r = await o.Bo.get({ url: P.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
        t?.logPerf &&
            (0, X.z)({
                sessionId: n?.sessionId,
                checkpoint: X.t.SHOP_HOME_FETCH_COMPLETED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            }),
            l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: Z.fromServer(r.body) });
    } catch (n) {
        let t = new u.LG(n);
        (0, J.o)(t), l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
    }
}
function eh(e) {
    l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
}
function ef(e) {
    l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
}
function ep(e) {
    l.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
}
async function eE(e, t) {
    l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
    try {
        let n = await o.Bo.put({
            url: P.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
            body: { category_id: e },
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(x.fromServer) });
    } catch (n) {
        let e = new u.LG(n);
        throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
    }
}
async function em(e) {
    let { tab: t, abortSignal: n } = e;
    if (m.A.isFetchingLayout(t)) return;
    let i = m.A.getLayoutFetchError(t);
    if (i?.status !== 404 && i?.status !== 429)
        try {
            l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
            let e = await o.Bo.get({ url: P.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
            l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS", tab: t, layoutId: e.body.layout_id });
        } catch (n) {
            let e = new u.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
        }
}
