r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(724458);
var a = r(653041);
var o = r(979554),
    s = r(778787),
    l = r(803358);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class c extends l.Z {
    static fromServer(e) {
        let { products: n, logo: r, hero_ranking: i, pdp_bg: a, mobile_bg: l, success_modal_bg: u, mobile_banner: d, hero_banner: f, hero_banner_asset: p, featured_block: h, hero_logo: _, ...m } = e;
        return new c({
            ...super.fromServer(m),
            products: n.reduce((e, n) => {
                let r = s.Z.fromServer(n);
                return 0 === (r.type !== o.Z.VARIANTS_GROUP && r.items.length) ? e : (e.push(r), e);
            }, []),
            logo: r,
            heroRanking: i,
            pdpBg: a,
            mobileBg: l,
            successModalBg: u,
            mobileBanner: d,
            heroBanner: f,
            heroBannerAsset: p,
            featuredBlock: h,
            heroLogo: _
        });
    }
    constructor(e) {
        super(e), u(this, 'products', void 0), u(this, 'logo', void 0), u(this, 'heroRanking', void 0), u(this, 'pdpBg', void 0), u(this, 'mobileBg', void 0), u(this, 'successModalBg', void 0), u(this, 'mobileBanner', void 0), u(this, 'heroBanner', void 0), u(this, 'heroBannerAsset', void 0), u(this, 'featuredBlock', void 0), u(this, 'heroLogo', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock), (this.heroLogo = e.heroLogo), (this.heroBannerAsset = e.heroBannerAsset);
    }
}
