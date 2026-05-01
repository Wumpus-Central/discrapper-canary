n.d(t, {
    h$: () => er,
    CK: () => X,
    BX: () => ed,
    JJ: () => ei,
    RE: () => et,
    Or: () => es,
    ue: () => eo,
    Jp: () => ee,
    Sw: () => q,
    Cz: () => Z,
    iJ: () => en,
    RD: () => Q,
    gB: () => J,
    T2: () => ec,
    gn: () => z,
    Aq: () => el,
    LX: () => ea,
});
var i,
    a = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    r = n(148803),
    s = n(635358),
    l = n(636537),
    o = n(228366);
n(398590);
var d = n(845584),
    c = n(865116);
n(250953), n(331103);
var _ = n(976860),
    E = n(773669),
    u = n(590180),
    A = n(752447),
    I = n(4227),
    T = n(870216),
    h = n(341821),
    S = n(488430);
class N {
    dismissibleContent;
    version;
    constructor(e) {
        (this.type = S.G.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
    static fromServer(e) {
        return new N({ ...e, dismissibleContent: e.dismissible_content });
    }
}
class f {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = S.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new f(e);
    }
}
class p {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    constructor(e) {
        (this.type = S.G.COACHMARK),
            (this.title = e.title),
            (this.body = e.body),
            (this.assetDark = e.assetDark),
            (this.assetLight = e.assetLight),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText);
    }
    static fromServer(e) {
        return new p({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
        });
    }
}
class m {
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
        (this.type = S.G.TAB_TOOLTIP),
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
        return new m({
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
                    return n?.type === S.G.BADGE
                        ? [t, N.fromServer(n)]
                        : n?.type === S.G.BANNER
                          ? [t, f.fromServer(n)]
                          : n?.type === S.G.COACHMARK
                            ? [t, p.fromServer(n)]
                            : n?.type === S.G.TAB_TOOLTIP
                              ? [t, m.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
}
var C = n(986630),
    R = n(739380),
    g = n(651162),
    L = n(510801),
    D = n(419709);
class b {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = g.g.COUNTDOWN_TIMER),
            (this.title = e.title),
            (this.body = e.body),
            (this.bannerUrl = e.banner_url),
            (this.endTime = new Date(e.end_time)),
            (this.textColor = e.text_color);
    }
    static fromServer(e) {
        return new b(e);
    }
}
var M = n(424918);
class P {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = M.u.CATEGORY),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.name = e.name),
            (this.unpublishedAt = null != e.unpublished_at ? new Date(e.unpublished_at) : null),
            (this.bodyText = e.body_text),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerUrl = e.banner_url),
            (this.assetUrl = e.asset_url);
    }
    static fromServer(e) {
        return new P(e);
    }
}
class U {
    subblocks;
    constructor(e) {
        (this.type = g.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === M.u.CATEGORY ? P.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new U(e);
    }
}
class v {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = g.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new v(e);
    }
}
var y = n(325595);
class G {
    title;
    categorySkuId;
    categoryStoreListingId;
    rankedSkuIds;
    backgroundImage;
    buttonText;
    constructor(e) {
        (this.type = g.g.FRAMES_PRODUCT_SHELF),
            (this.title = e.title),
            (this.categorySkuId = e.category_sku_id),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.rankedSkuIds = e.ranked_sku_ids ?? []),
            (this.backgroundImage = e.background_image),
            (this.buttonText = e.button_text);
    }
    static fromServer(e) {
        return new G(e);
    }
}
var w = n(993408);
class x {
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
        (this.type = g.g.HERO),
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
            (this.bannerDisplayConfig = (0, w.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, w.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new x(e);
    }
}
class V {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = g.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new V(e);
    }
}
class B {
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
        (this.type = g.g.REWARD_HERO),
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
            (this.logoDisplayConfig = (0, w.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, w.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new B(e);
    }
}
class F {
    name;
    categorySkuId;
    rankedSkuIds;
    constructor(e) {
        (this.type = g.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
    static fromServer(e) {
        return new F(e);
    }
}
class k {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    constructor(e) {
        (this.type = g.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time);
    }
    static fromServer(e) {
        return new k(e);
    }
}
var H = n(893998);
class j {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case g.g.HERO:
                        return x.fromServer(e);
                    case g.g.FEATURED:
                        return U.fromServer(e);
                    case g.g.FEED:
                        return v.fromServer(e);
                    case g.g.WIDE_BANNER:
                        return H.y.fromServer(e);
                    case g.g.SHELF:
                        return F.fromServer(e);
                    case g.g.COUNTDOWN_TIMER:
                        return b.fromServer(e);
                    case g.g.IMMERSIVE_BANNER:
                        return V.fromServer(e);
                    case g.g.REWARD_HERO:
                        return B.fromServer(e);
                    case g.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return k.fromServer(e);
                    case g.g.FRAMES_BANNER:
                        return y.p.fromServer(e);
                    case g.g.FRAMES_PRODUCT_SHELF:
                        return G.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => L.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => D.T.fromServer(e)));
    }
    static fromServer(e) {
        return new j(e);
    }
}
var Y = n(100057),
    W = n(181774),
    K = n(18572);
n(758836);
var $ = n(652215);
n(457421), n(295811);
let Z = (e) => {
        let { tab: t, ...i } = e;
        {
            let { default: e } = n(779733),
                { default: a } = n(408166);
            q(i), e(), a(), (0, _.pX)(null != t ? $.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : $.BVt.COLLECTIBLES_SHOP);
        }
    },
    q = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    Q = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    z = (e, t) =>
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    X = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let i = (0, W.ao)(e),
            a = c.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, Y.z)({
                sessionId: n?.sessionId,
                checkpoint: Y.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            a && (0, A.l)(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
        try {
            let r = await l.Bo.get({ url: $.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
            e?.logPerf &&
                (0, Y.z)({
                    sessionId: n?.sessionId,
                    checkpoint: Y.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                a && (0, A.l)(`fetchCollectiblesCategories completed ${r.body.categories.length} categories`),
                o.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: h.x.fromServer(r.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new d.LG(t);
            (0, K.o)(e),
                o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                a && (0, A.l)(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    J = async () => {
        if (I.A.isFetching) return;
        o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let e = c.Ay.get("shop_show_debug_overlay");
        e && (0, A.l)("fetchCollectiblesPurchases started");
        try {
            let t = {
                url: $.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
                query: { variants_return_style: s.g.VARIANTS_GROUP },
            };
            e && (0, A.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
            let n = await l.Bo.get(t);
            e && (0, A.l)(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(R.A.fromServer) });
        } catch (n) {
            let t = new d.LG(n);
            throw (
                ((0, K.o)(t),
                e && (0, A.l)(`fetchCollectiblesPurchases failed: ${t.message}`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
                t)
            );
        }
    },
    ee = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
        try {
            let n = { locale: E.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let i = await l.Bo.get({ url: $.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            o.h.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: C.A.fromServer(i.body),
                endedAt: Date.now(),
            });
        } catch (n) {
            let t = new d.LG(n);
            (0, K.o)(t),
                o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
        }
    },
    et = async (e, t) => {
        u.A.isFetchingProduct(e) || (await ee(e, t));
    },
    en = async (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await l.Bo.put({ url: $.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(R.A.fromServer) });
        } catch (n) {
            let t = new d.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    ei = async (e, t) => {
        try {
            return (
                await l.Bo.get({
                    url: $.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, K.o)(new d.LG(e)), !1;
        }
    },
    ea = async (e) => {
        let { release: t = r.P.PROD } = e;
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: a.DESKTOP };
        t !== r.P.PROD && (n.release = t);
        try {
            let e = await l.Bo.get({ url: $.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: O.fromServer(e.body) });
        } catch (e) {
            (0, K.o)(new d.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    er = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let i = (0, W.ao)(t, e);
        t?.logPerf &&
            (0, Y.z)({
                sessionId: n?.sessionId,
                checkpoint: Y.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let a = await l.Bo.get({ url: $.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
            t?.logPerf &&
                (0, Y.z)({
                    sessionId: n?.sessionId,
                    checkpoint: Y.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: j.fromServer(a.body) });
        } catch (n) {
            let t = new d.LG(n);
            (0, K.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    es = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    el = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    eo = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    ed = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await l.Bo.put({
                url: $.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(R.A.fromServer) });
        } catch (n) {
            let e = new d.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    },
    ec = async (e) => {
        let { tab: t, abortSignal: n } = e;
        if (T.A.isFetchingLayout(t)) return;
        let i = T.A.getLayoutFetchError(t);
        if (i?.status !== 404 && i?.status !== 429)
            try {
                o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
                let e = await l.Bo.get({ url: $.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
                o.h.dispatch({
                    type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS",
                    tab: t,
                    layoutId: e.body.layout_id,
                });
            } catch (n) {
                let e = new d.LG(n);
                throw (o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
            }
    };
