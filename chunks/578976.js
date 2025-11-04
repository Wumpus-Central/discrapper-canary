n.d(t, {
    JE: () => s,
    Kd: () => l,
    nW: () => o,
});
var r = n(311570);
n(46973), n(357352);
var i = n(975298);
n(768581);
var a = n(55935);
n(922347), n(135483), n(212161), n(37113);
let o = (e, t) => {
        let n = {};
        return (
            null != t && (n.tab = t),
            null == e ||
                (!0 === e.noCache && (n.no_cache = !0),
                !0 === e.includeUnpublished && (n.include_unpublished = !0),
                !0 === e.includeBundles && (n.include_bundles = !0),
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
    s = (e) => {
        if (null != e) return "".concat(e, "?width=100&height=195");
    },
    l = () => {
        let e = (0, i.Z)({ forceFetch: !0 }),
            t = (0, a.vc)(e.endsAt, "L");
        return {
            isLoading: !e.fetched,
            isFractionalPremiumActive: e.isFractionalPremiumActive,
            expiresAt: t,
        };
    };
