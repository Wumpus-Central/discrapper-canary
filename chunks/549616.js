(n.d(t, { Z: () => p }), n(539854));
var r = n(979554),
    i = n(778787),
    a = n(803358),
    o = n(194165);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
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
let _ = (e) => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class p extends a.Z {
    static fromServer(e) {
        var { products: t, logo: n, hero_ranking: r, pdp_bg: a, mobile_bg: s, success_modal_bg: c, mobile_banner: f, hero_banner: h, hero_banner_asset: m, featured_block: g, hero_logo: E, banner_text_color: b, hero_banner_config: y } = e,
            O = d(e, ['products', 'logo', 'hero_ranking', 'pdp_bg', 'mobile_bg', 'success_modal_bg', 'mobile_banner', 'hero_banner', 'hero_banner_asset', 'featured_block', 'hero_logo', 'banner_text_color', 'hero_banner_config']);
        return new p(
            u(l({}, super.fromServer(O)), {
                products: t.reduce((e, t) => {
                    let n = i.Z.fromServer(t);
                    return ((_(n.type) || 0 !== n.items.length) && e.push(n), e);
                }, []),
                logo: n,
                heroRanking: r,
                pdpBg: a,
                mobileBg: s,
                successModalBg: c,
                mobileBanner: f,
                heroBanner: h,
                heroBannerAsset: m,
                featuredBlock: g,
                heroLogo: E,
                bannerTextColor: b,
                heroBannerConfig: null != y ? o.Z.fromServer(y) : void 0
            })
        );
    }
    constructor(e) {
        (super(e), s(this, 'products', void 0), s(this, 'logo', void 0), s(this, 'heroRanking', void 0), s(this, 'pdpBg', void 0), s(this, 'mobileBg', void 0), s(this, 'successModalBg', void 0), s(this, 'mobileBanner', void 0), s(this, 'heroBanner', void 0), s(this, 'heroBannerAsset', void 0), s(this, 'featuredBlock', void 0), s(this, 'heroLogo', void 0), s(this, 'bannerTextColor', void 0), s(this, 'heroBannerConfig', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock), (this.heroLogo = e.heroLogo), (this.heroBannerAsset = e.heroBannerAsset), (this.bannerTextColor = e.bannerTextColor), (this.heroBannerConfig = e.heroBannerConfig));
    }
}
