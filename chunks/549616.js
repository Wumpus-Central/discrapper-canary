n.d(t, { Z: () => _ }), n(539854);
var r = n(979554),
    i = n(778787),
    a = n(803358);
function o(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let f = (e) => e === r.Z.VARIANTS_GROUP || e === r.Z.EXTERNAL_SKU;
class _ extends a.Z {
    static fromServer(e) {
        var { products: t, logo: n, hero_ranking: r, pdp_bg: a, mobile_bg: o, success_modal_bg: l, mobile_banner: d, hero_banner: p, hero_banner_asset: h, featured_block: m, hero_logo: g, banner_text_color: E } = e,
            b = u(e, ['products', 'logo', 'hero_ranking', 'pdp_bg', 'mobile_bg', 'success_modal_bg', 'mobile_banner', 'hero_banner', 'hero_banner_asset', 'featured_block', 'hero_logo', 'banner_text_color']);
        return new _(
            c(s({}, super.fromServer(b)), {
                products: t.reduce((e, t) => {
                    let n = i.Z.fromServer(t);
                    return (f(n.type) || 0 !== n.items.length) && e.push(n), e;
                }, []),
                logo: n,
                heroRanking: r,
                pdpBg: a,
                mobileBg: o,
                successModalBg: l,
                mobileBanner: d,
                heroBanner: p,
                heroBannerAsset: h,
                featuredBlock: m,
                heroLogo: g,
                bannerTextColor: E
            })
        );
    }
    constructor(e) {
        super(e), o(this, 'products', void 0), o(this, 'logo', void 0), o(this, 'heroRanking', void 0), o(this, 'pdpBg', void 0), o(this, 'mobileBg', void 0), o(this, 'successModalBg', void 0), o(this, 'mobileBanner', void 0), o(this, 'heroBanner', void 0), o(this, 'heroBannerAsset', void 0), o(this, 'featuredBlock', void 0), o(this, 'heroLogo', void 0), o(this, 'bannerTextColor', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock), (this.heroLogo = e.heroLogo), (this.heroBannerAsset = e.heroBannerAsset), (this.bannerTextColor = e.bannerTextColor);
    }
}
