(n.d(t, { Z: () => h }), n(539854));
var r = n(979554),
    i = n(778787),
    a = n(803358),
    o = n(194165),
    s = n(889577);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let p = (e) => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class h extends a.Z {
    static fromServer(e) {
        var { products: t, logo: n, hero_ranking: r, pdp_bg: a, mobile_bg: l, success_modal_bg: u, mobile_banner: f, hero_banner: m, hero_banner_asset: g, featured_block: E, hero_logo: b, banner_text_color: y, hero_banner_config: O, hero_logo_display_config: v } = e,
            I = _(e, ['products', 'logo', 'hero_ranking', 'pdp_bg', 'mobile_bg', 'success_modal_bg', 'mobile_banner', 'hero_banner', 'hero_banner_asset', 'featured_block', 'hero_logo', 'banner_text_color', 'hero_banner_config', 'hero_logo_display_config']);
        return new h(
            d(c({}, super.fromServer(I)), {
                products: t.reduce((e, t) => {
                    let n = i.Z.fromServer(t);
                    return ((p(n.type) || 0 !== n.items.length) && e.push(n), e);
                }, []),
                logo: n,
                heroRanking: r,
                pdpBg: a,
                mobileBg: l,
                successModalBg: u,
                mobileBanner: f,
                heroBanner: m,
                heroBannerAsset: g,
                featuredBlock: E,
                heroLogo: b,
                bannerTextColor: y,
                heroBannerConfig: null != O ? o.Z.fromServer(O) : void 0,
                heroLogoDisplayConfig: null != v ? s.X.fromServer(v) : void 0
            })
        );
    }
    constructor(e) {
        (super(e), l(this, 'products', void 0), l(this, 'logo', void 0), l(this, 'heroRanking', void 0), l(this, 'pdpBg', void 0), l(this, 'mobileBg', void 0), l(this, 'successModalBg', void 0), l(this, 'mobileBanner', void 0), l(this, 'heroBanner', void 0), l(this, 'heroBannerAsset', void 0), l(this, 'featuredBlock', void 0), l(this, 'heroLogo', void 0), l(this, 'bannerTextColor', void 0), l(this, 'heroBannerConfig', void 0), l(this, 'heroLogoDisplayConfig', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock), (this.heroLogo = e.heroLogo), (this.heroBannerAsset = e.heroBannerAsset), (this.bannerTextColor = e.bannerTextColor), (this.heroBannerConfig = e.heroBannerConfig), (this.heroLogoDisplayConfig = e.heroLogoDisplayConfig));
    }
}
