n.d(t, {
    h$: () => er,
    CK: () => Z,
    BX: () => eo,
    JJ: () => ei,
    RE: () => et,
    Or: () => e_,
    ue: () => el,
    Jp: () => ee,
    Sw: () => q,
    Cz: () => Q,
    iJ: () => en,
    RD: () => X,
    gB: () => J,
    T2: () => eE,
    gn: () => z,
    Aq: () => es,
    LX: () => ea,
});
var i,
    a = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    r = n(148803),
    _ = n(635358),
    s = n(636537),
    l = n(228366);
n(398590);
var o = n(845584),
    E = n(865116);
n(250953), n(331103);
var d = n(976860),
    c = n(773669),
    u = n(590180),
    I = n(752447),
    T = n(4227),
    A = n(870216),
    S = n(341821),
    N = n(488430);
class O {
    dismissibleContent;
    version;
    constructor(e) {
        (this.type = N.G.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
    static fromServer(e) {
        return new O({ ...e, dismissibleContent: e.dismissible_content });
    }
}
class R {
    title;
    body;
    asset;
    popoutAsset;
    version;
    revertTextColor;
    constructor(e) {
        (this.type = N.G.BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.asset = e.asset),
            (this.popoutAsset = e.popout_asset),
            (this.version = e.version),
            (this.revertTextColor = e.revert_text_color);
    }
    static fromServer(e) {
        return new R(e);
    }
}
class f {
    title;
    body;
    assetDark;
    assetLight;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    constructor(e) {
        (this.type = N.G.COACHMARK),
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
        return new f({
            ...e,
            assetDark: e.asset_dark,
            assetLight: e.asset_light,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
        });
    }
}
class C {
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
        (this.type = N.G.TAB_TOOLTIP),
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
class p {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new p(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    return n?.type === N.G.BADGE
                        ? [t, O.fromServer(n)]
                        : n?.type === N.G.BANNER
                          ? [t, R.fromServer(n)]
                          : n?.type === N.G.COACHMARK
                            ? [t, f.fromServer(n)]
                            : n?.type === N.G.TAB_TOOLTIP
                              ? [t, C.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
}
var D = n(986630),
    L = n(739380),
    m = n(651162),
    h = n(510801),
    g = n(419709);
class U {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = m.g.COUNTDOWN_TIMER),
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
var b = n(424918);
class P {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = b.u.CATEGORY),
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
class M {
    subblocks;
    constructor(e) {
        (this.type = m.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === b.u.CATEGORY ? P.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new M(e);
    }
}
class G {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = m.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new G(e);
    }
}
var y = n(325595);
class v {
    title;
    categorySkuId;
    categoryStoreListingId;
    rankedSkuIds;
    backgroundImage;
    buttonText;
    constructor(e) {
        (this.type = m.g.FRAMES_PRODUCT_SHELF),
            (this.title = e.title),
            (this.categorySkuId = e.category_sku_id),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.rankedSkuIds = e.ranked_sku_ids ?? []),
            (this.backgroundImage = e.background_image),
            (this.buttonText = e.button_text);
    }
    static fromServer(e) {
        return new v(e);
    }
}
var B = n(993408);
class w {
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
        (this.type = m.g.HERO),
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
            (this.bannerDisplayConfig = (0, B.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, B.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new w(e);
    }
}
class F {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = m.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new F(e);
    }
}
class V {
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
        (this.type = m.g.REWARD_HERO),
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
            (this.logoDisplayConfig = (0, B.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, B.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new V(e);
    }
}
class H {
    name;
    categorySkuId;
    rankedSkuIds;
    constructor(e) {
        (this.type = m.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
    static fromServer(e) {
        return new H(e);
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
        (this.type = m.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
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
var W = n(893998);
class Y {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case m.g.HERO:
                        return w.fromServer(e);
                    case m.g.FEATURED:
                        return M.fromServer(e);
                    case m.g.FEED:
                        return G.fromServer(e);
                    case m.g.WIDE_BANNER:
                        return W.y.fromServer(e);
                    case m.g.SHELF:
                        return H.fromServer(e);
                    case m.g.COUNTDOWN_TIMER:
                        return U.fromServer(e);
                    case m.g.IMMERSIVE_BANNER:
                        return F.fromServer(e);
                    case m.g.REWARD_HERO:
                        return V.fromServer(e);
                    case m.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return k.fromServer(e);
                    case m.g.FRAMES_BANNER:
                        return y.p.fromServer(e);
                    case m.g.FRAMES_PRODUCT_SHELF:
                        return v.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => h.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => g.T.fromServer(e)));
    }
    static fromServer(e) {
        return new Y(e);
    }
}
var x = n(100057),
    K = n(181774),
    j = n(18572);
n(758836);
var $ = n(652215);
n(457421), n(295811);
let Q = (e) => {
        let { tab: t, ...i } = e;
        {
            let { default: e } = n(779733),
                { default: a } = n(408166);
            q(i), e(), a(), (0, d.pX)(null != t ? $.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : $.BVt.COLLECTIBLES_SHOP);
        }
    },
    q = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    X = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
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
    Z = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let i = (0, K.ao)(e),
            a = E.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, x.z)({
                sessionId: n?.sessionId,
                checkpoint: x.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            a && (0, I.l)(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
        try {
            let r = await s.Bo.get({ url: $.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
            e?.logPerf &&
                (0, x.z)({
                    sessionId: n?.sessionId,
                    checkpoint: x.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                a && (0, I.l)(`fetchCollectiblesCategories completed ${r.body.categories.length} categories`),
                l.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: S.x.fromServer(r.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new o.LG(t);
            (0, j.o)(e),
                l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                a && (0, I.l)(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    J = async () => {
        if (T.A.isFetching) return;
        l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let e = E.Ay.get("shop_show_debug_overlay");
        e && (0, I.l)("fetchCollectiblesPurchases started");
        try {
            let t = {
                url: $.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
                query: { variants_return_style: _.g.VARIANTS_GROUP },
            };
            e && (0, I.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
            let n = await s.Bo.get(t);
            e && (0, I.l)(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
                l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(L.A.fromServer) });
        } catch (n) {
            let t = new o.LG(n);
            throw (
                ((0, j.o)(t),
                e && (0, I.l)(`fetchCollectiblesPurchases failed: ${t.message}`),
                l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
                t)
            );
        }
    },
    ee = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e, startedAt: Date.now() });
        try {
            let n = { locale: c.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let i = await s.Bo.get({ url: $.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            l.h.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: D.A.fromServer(i.body),
                endedAt: Date.now(),
            });
        } catch (n) {
            let t = new o.LG(n);
            (0, j.o)(t),
                l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t, endedAt: Date.now() });
        }
    },
    et = async (e, t) => {
        u.A.isFetchingProduct(e) || (await ee(e, t));
    },
    en = async (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await s.Bo.put({ url: $.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(L.A.fromServer) });
        } catch (n) {
            let t = new o.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    ei = async (e, t) => {
        try {
            return (
                await s.Bo.get({
                    url: $.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, j.o)(new o.LG(e)), !1;
        }
    },
    ea = async (e) => {
        let { release: t = r.P.PROD } = e;
        l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: a.DESKTOP };
        t !== r.P.PROD && (n.release = t);
        try {
            let e = await s.Bo.get({ url: $.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: p.fromServer(e.body) });
        } catch (e) {
            (0, j.o)(new o.LG(e)), l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    er = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let i = (0, K.ao)(t, e);
        t?.logPerf &&
            (0, x.z)({
                sessionId: n?.sessionId,
                checkpoint: x.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let a = await s.Bo.get({ url: $.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
            t?.logPerf &&
                (0, x.z)({
                    sessionId: n?.sessionId,
                    checkpoint: x.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: Y.fromServer(a.body) });
        } catch (n) {
            let t = new o.LG(n);
            (0, j.o)(t), l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    e_ = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    es = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    el = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    eo = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await s.Bo.put({
                url: $.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(L.A.fromServer) });
        } catch (n) {
            let e = new o.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    },
    eE = async (e) => {
        let { tab: t, abortSignal: n } = e;
        if (A.A.isFetchingLayout(t)) return;
        let i = A.A.getLayoutFetchError(t);
        if (i?.status !== 404 && i?.status !== 429)
            try {
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
                let e = await s.Bo.get({ url: $.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
                l.h.dispatch({
                    type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS",
                    tab: t,
                    layoutId: e.body.layout_id,
                });
            } catch (n) {
                let e = new o.LG(n);
                throw (l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
            }
    };
