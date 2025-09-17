n.d(t, {
    Kd: () => _,
    SQ: () => f,
    nW: () => d,
});
var r = n(311570);
n(46973);
var i = n(357352),
    a = n(975298),
    o = n(768581),
    s = n(55935),
    l = n(922347),
    c = n(135483),
    u = n(212161);
n(37113);
let d = (e, t) => {
        let n = {};
        return (
            null != t && (n.tab = t),
            null == e ||
                (!0 === e.noCache && (n.no_cache = !0),
                !0 === e.includeUnpublished && (n.include_unpublished = !0),
                !0 === e.includeBundles && (n.include_bundles = !0),
                !0 === e.includePopularPicks && (n.include_popular_picks = !0),
                !0 === e.includeDynamicBlocks && (n.include_dynamic_blocks = !0),
                null != e.countryCode && "" !== e.countryCode && (n.country_code = e.countryCode),
                null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway),
                e.variantsReturnStyle === r.v.VARIANTS_GROUP && (n.variants_return_style = r.v.VARIANTS_GROUP),
                null != e.shopHomeConfig && (n.shop_home_config = e.shopHomeConfig),
                null != e.skipNumCategories && (n.skip_num_categories = e.skipNumCategories),
                !0 === e.includeNameplatesOnMobile && (n.include_nameplates_on_mobile = !0)),
            n
        );
    },
    f = (e) => {
        var t;
        let n = null == (t = e.items) ? void 0 : t[0];
        if (null == n) return "";
        if ((0, l.M)(n)) {
            let e = (0, o.NZ)({
                avatarDecoration: n,
                size: 40,
                canAnimate: !1,
            });
            return null != e ? e : "";
        }
        if ((0, u.H)(n)) {
            let e = n.staticFrameSrc,
                t = n.thumbnailPreviewSrc;
            return null != e && "" !== e ? e : null != t && "" !== t ? t : "";
        }
        return (0, c.k)(n) ? (0, i.b)("collectibles/".concat(n.asset, "static.png")) : "";
    },
    _ = () => {
        let e = (0, a.Z)({ forceFetch: !0 }),
            t = (0, s.vc)(e.endsAt, "L");
        return {
            isLoading: !e.fetched,
            isFractionalPremiumActive: e.isFractionalPremiumActive,
            expiresAt: t,
        };
    };
