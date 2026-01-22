n.d(t, {
    A: () => h,
}),
    n(321073);
var r = n(575593),
    i = n(993408),
    a = n(623373),
    s = n(986630),
    o = n(931772);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = (e) => e === r.R.VARIANTS_GROUP || e === r.R.EXTERNAL_SKU;
class h extends o.A {
    static fromServer(e) {
        let {
                products: t,
                hero_ranking: n,
                hero_logo_display_config: r,
                hero_banner_display_config: a,
                hero_banner_url: o,
                hero_banner_animated_url: l,
                hero_rive_url: u,
                hero_logo_url: p,
                catalog_banner_url: m,
                catalog_banner_animated_url: g,
                catalog_banner_rive_url: E,
                featured_block_url: b,
                logo_url: y,
                pdp_bg_url: O,
                mobile_banner_url: A,
                mobile_bg_url: v,
            } = e,
            S = f(e, [
                "products",
                "hero_ranking",
                "hero_logo_display_config",
                "hero_banner_display_config",
                "hero_banner_url",
                "hero_banner_animated_url",
                "hero_rive_url",
                "hero_logo_url",
                "catalog_banner_url",
                "catalog_banner_animated_url",
                "catalog_banner_rive_url",
                "featured_block_url",
                "logo_url",
                "pdp_bg_url",
                "mobile_banner_url",
                "mobile_bg_url",
            ]);
        return new h(
            d(c({}, super.fromServer(S)), {
                products: t.reduce((e, t) => {
                    let n = s.A.fromServer(t);
                    return (_(n.type) || 0 !== n.items.length) && e.push(n), e;
                }, []),
                heroRanking: n,
                heroBannerUrl: o,
                heroBannerAnimatedUrl: l,
                heroRiveUrl: u,
                heroLogoUrl: p,
                catalogBannerUrl: m,
                catalogBannerAnimatedUrl: g,
                catalogBannerRiveUrl: E,
                featuredBlockUrl: b,
                logoUrl: y,
                pdpBgUrl: O,
                mobileBannerUrl: A,
                mobileBgUrl: v,
                heroLogoDisplayConfig: (0, i.f6)(r),
                heroBannerDisplayConfig: (0, i.f6)(a),
            }),
        );
    }
    constructor(e) {
        super(e),
            l(this, "products", void 0),
            l(this, "heroRanking", void 0),
            l(this, "isOrbsExclusive", void 0),
            l(this, "heroBannerUrl", void 0),
            l(this, "heroBannerAnimatedUrl", void 0),
            l(this, "heroRiveUrl", void 0),
            l(this, "heroLogoUrl", void 0),
            l(this, "catalogBannerUrl", void 0),
            l(this, "catalogBannerAnimatedUrl", void 0),
            l(this, "catalogBannerRiveUrl", void 0),
            l(this, "featuredBlockUrl", void 0),
            l(this, "logoUrl", void 0),
            l(this, "pdpBgUrl", void 0),
            l(this, "mobileBannerUrl", void 0),
            l(this, "mobileBgUrl", void 0),
            l(this, "heroLogoDisplayConfig", void 0),
            l(this, "heroBannerDisplayConfig", void 0),
            (this.products = e.products),
            (this.heroRanking = e.heroRanking),
            (this.isOrbsExclusive =
                Array.isArray(e.products) && e.products.length > 0 && void 0 === e.products.find((e) => !(0, a.Ab)(e))),
            (this.heroBannerUrl = e.heroBannerUrl),
            (this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl),
            (this.heroRiveUrl = e.heroRiveUrl),
            (this.heroLogoUrl = e.heroLogoUrl),
            (this.catalogBannerUrl = e.catalogBannerUrl),
            (this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl),
            (this.catalogBannerRiveUrl = e.catalogBannerRiveUrl),
            (this.featuredBlockUrl = e.featuredBlockUrl),
            (this.logoUrl = e.logoUrl),
            (this.pdpBgUrl = e.pdpBgUrl),
            (this.mobileBannerUrl = e.mobileBannerUrl),
            (this.mobileBgUrl = e.mobileBgUrl),
            (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig),
            (this.heroBannerDisplayConfig = e.heroBannerDisplayConfig);
    }
}
