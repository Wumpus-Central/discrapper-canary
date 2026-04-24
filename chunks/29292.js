n.d(t, {
    h$: () => er,
    CK: () => z,
    BX: () => el,
    JJ: () => en,
    RE: () => ee,
    Or: () => ea,
    ue: () => e_,
    Jp: () => Z,
    Sw: () => Q,
    Cz: () => $,
    iJ: () => et,
    RD: () => q,
    gB: () => J,
    T2: () => eo,
    gn: () => X,
    Aq: () => es,
    LX: () => ei,
});
var i,
    r = (((i = {})[(i.DESKTOP = 0)] = "DESKTOP"), (i[(i.MOBILE = 1)] = "MOBILE"), i),
    a = n(148803),
    s = n(635358),
    _ = n(636537),
    l = n(228366);
n(398590);
var o = n(845584),
    E = n(865116);
n(250953), n(331103);
var d = n(976860),
    c = n(773669),
    u = n(590180),
    I = n(752447),
    A = n(4227),
    T = n(870216),
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
var m = n(986630),
    L = n(739380),
    D = n(651162),
    h = n(510801),
    g = n(419709);
class b {
    title;
    body;
    bannerUrl;
    endTime;
    textColor;
    constructor(e) {
        (this.type = D.g.COUNTDOWN_TIMER),
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
var U = n(424918);
class P {
    categoryStoreListingId;
    name;
    unpublishedAt;
    bodyText;
    bannerTextColor;
    bannerUrl;
    assetUrl;
    constructor(e) {
        (this.type = U.u.CATEGORY),
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
        (this.type = D.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === U.u.CATEGORY ? P.fromServer(e) : e)));
    }
    static fromServer(e) {
        return new M(e);
    }
}
class y {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = D.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new y(e);
    }
}
var G = n(325595),
    v = n(993408);
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
    heroBannerUrl;
    heroBannerAnimatedUrl;
    heroRiveUrl;
    heroLogoUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    bannerDisplayConfig;
    logoDisplayConfig;
    constructor(e) {
        (this.type = D.g.HERO),
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
            (this.bannerDisplayConfig = (0, v.f6)(e.banner_display_config)),
            (this.logoDisplayConfig = (0, v.f6)(e.logo_display_config));
    }
    static fromServer(e) {
        return new B(e);
    }
}
class w {
    title;
    body;
    helpCenterUrl;
    textColor;
    endTime;
    bannerUrl;
    bannerAnimatedUrl;
    constructor(e) {
        (this.type = D.g.IMMERSIVE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.helpCenterUrl = e.help_center_url),
            (this.textColor = e.text_color),
            (this.endTime = null != e.end_time ? new Date(e.end_time) : void 0),
            (this.bannerUrl = e.banner_url),
            (this.bannerAnimatedUrl = e.banner_animated_url);
    }
    static fromServer(e) {
        return new w(e);
    }
}
class F {
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
        (this.type = D.g.REWARD_HERO),
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
            (this.logoDisplayConfig = (0, v.f6)(e.logo_display_config)),
            (this.bannerDisplayConfig = (0, v.f6)(e.banner_display_config));
    }
    static fromServer(e) {
        return new F(e);
    }
}
class V {
    name;
    categorySkuId;
    rankedSkuIds;
    constructor(e) {
        (this.type = D.g.SHELF),
            (this.name = e.name),
            (this.categorySkuId = e.category_sku_id),
            (this.rankedSkuIds = e.ranked_sku_ids);
    }
    static fromServer(e) {
        return new V(e);
    }
}
class H {
    applicationId;
    headerText;
    gradientColors;
    gradientAngle;
    skuIds;
    endTime;
    constructor(e) {
        (this.type = D.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER),
            (this.applicationId = e.application_id),
            (this.headerText = e.header_text),
            (this.gradientColors = e.gradient_colors),
            (this.gradientAngle = e.gradient_angle),
            (this.skuIds = e.sku_ids),
            (this.endTime = e.end_time);
    }
    static fromServer(e) {
        return new H(e);
    }
}
var k = n(893998);
class x {
    shopBlocks;
    categories;
    userDiscounts;
    constructor(e) {
        (this.shopBlocks = e.shop_blocks
            .map((e) => {
                switch (e.type) {
                    case D.g.HERO:
                        return B.fromServer(e);
                    case D.g.FEATURED:
                        return M.fromServer(e);
                    case D.g.FEED:
                        return y.fromServer(e);
                    case D.g.WIDE_BANNER:
                        return k.y.fromServer(e);
                    case D.g.SHELF:
                        return V.fromServer(e);
                    case D.g.COUNTDOWN_TIMER:
                        return b.fromServer(e);
                    case D.g.IMMERSIVE_BANNER:
                        return w.fromServer(e);
                    case D.g.REWARD_HERO:
                        return F.fromServer(e);
                    case D.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER:
                        return H.fromServer(e);
                    case D.g.FRAMES_BANNER:
                        return G.p.fromServer(e);
                    default:
                        return;
                }
            })
            .filter((e) => void 0 !== e)),
            (this.categories = e.categories.map((e) => h.A.fromServer(e))),
            (this.userDiscounts = e.user_discounts?.map((e) => g.T.fromServer(e)));
    }
    static fromServer(e) {
        return new x(e);
    }
}
var W = n(100057),
    Y = n(181774),
    j = n(18572);
n(758836);
var K = n(652215);
n(457421), n(295811);
let $ = (e) => {
        let { tab: t, ...i } = e;
        {
            let { default: e } = n(779733),
                { default: r } = n(408166);
            Q(i), e(), r(), (0, d.pX)(null != t ? K.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : K.BVt.COLLECTIBLES_SHOP);
        }
    },
    Q = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    q = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    X = (e, t) =>
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    z = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let i = (0, Y.ao)(e),
            r = E.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, W.z)({
                sessionId: n?.sessionId,
                checkpoint: W.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            r && (0, I.l)(`fetchCollectiblesCategories started: ${JSON.stringify(i, null, 2)}`);
        try {
            let a = await _.Bo.get({ url: K.Rsh.COLLECTIBLES_CATEGORIES_V2, query: i, rejectWithError: !0 });
            e?.logPerf &&
                (0, W.z)({
                    sessionId: n?.sessionId,
                    checkpoint: W.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                r && (0, I.l)(`fetchCollectiblesCategories completed ${a.body.categories.length} categories`),
                l.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: S.x.fromServer(a.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new o.LG(t);
            (0, j.o)(e),
                l.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                r && (0, I.l)(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    J = async () => {
        if (A.A.isFetching) return;
        l.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let e = E.Ay.get("shop_show_debug_overlay");
        e && (0, I.l)("fetchCollectiblesPurchases started");
        try {
            let t = {
                url: K.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
                query: { variants_return_style: s.g.VARIANTS_GROUP },
            };
            e && (0, I.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
            let n = await _.Bo.get(t);
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
    Z = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e });
        try {
            let n = { locale: c.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let i = await _.Bo.get({ url: K.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: e, product: m.A.fromServer(i.body) });
        } catch (n) {
            let t = new o.LG(n);
            (0, j.o)(t), l.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t });
        }
    },
    ee = async (e, t) => {
        u.A.isFetchingProduct(e) || (await Z(e, t));
    },
    et = async (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await _.Bo.put({ url: K.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(L.A.fromServer) });
        } catch (n) {
            let t = new o.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    en = async (e, t) => {
        try {
            return (
                await _.Bo.get({
                    url: K.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, j.o)(new o.LG(e)), !1;
        }
    },
    ei = async (e) => {
        let { release: t = a.P.PROD } = e;
        l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.DESKTOP };
        t !== a.P.PROD && (n.release = t);
        try {
            let e = await _.Bo.get({ url: K.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: p.fromServer(e.body) });
        } catch (e) {
            (0, j.o)(new o.LG(e)), l.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    er = async (e, t, n) => {
        l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let i = (0, Y.ao)(t, e);
        t?.logPerf &&
            (0, W.z)({
                sessionId: n?.sessionId,
                checkpoint: W.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let r = await _.Bo.get({ url: K.Rsh.COLLECTIBLES_SHOP, query: i, rejectWithError: !0 });
            t?.logPerf &&
                (0, W.z)({
                    sessionId: n?.sessionId,
                    checkpoint: W.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS", tab: e, shopHome: x.fromServer(r.body) });
        } catch (n) {
            let t = new o.LG(n);
            (0, j.o)(t), l.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    ea = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    es = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    e_ = (e) => {
        l.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    el = async (e, t) => {
        l.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await _.Bo.put({
                url: K.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(L.A.fromServer) });
        } catch (n) {
            let e = new o.LG(n);
            throw (l.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    },
    eo = async (e) => {
        let { tab: t, abortSignal: n } = e;
        if (T.A.isFetchingLayout(t)) return;
        let i = T.A.getLayoutFetchError(t);
        if (i?.status !== 404 && i?.status !== 429)
            try {
                l.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
                let e = await _.Bo.get({ url: K.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
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
