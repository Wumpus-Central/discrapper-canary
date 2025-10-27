n.d(t, {
    JE: () => f,
    Kd: () => p,
    SQ: () => _,
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
        if (null != e) return "".concat(e, "?width=100&height=195");
    },
    _ = (e) => {
        var t, n;
        let r = null == (t = e.items) ? void 0 : t[0];
        if (null == r) return "";
        if ((0, l.M)(r)) {
            let e = (0, o.NZ)({
                avatarDecoration: r,
                size: 40,
                canAnimate: !1,
            });
            return null != e ? e : "";
        }
        if ((0, u.H)(r)) {
            let e = r.staticFrameSrc,
                t = r.thumbnailPreviewSrc;
            return null != e && "" !== e ? e : null != t && "" !== t && null != (n = f(t)) ? n : "";
        }
        return (0, c.k)(r) ? (0, i.b)("collectibles/".concat(r.asset, "static.png")) : "";
    },
    p = () => {
        let e = (0, a.Z)({ forceFetch: !0 }),
            t = (0, s.vc)(e.endsAt, "L");
        return {
            isLoading: !e.fetched,
            isFractionalPremiumActive: e.isFractionalPremiumActive,
            expiresAt: t,
        };
    };
