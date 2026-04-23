"use strict";
n.d(t, { EZ: () => l, Rc: () => o, ao: () => a });
var i = n(635358);
n(205693);
var r = n(531260),
    s = n(58703);
n(753070);
let a = (e, t) => {
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
                e.variantsReturnStyle === i.g.VARIANTS_GROUP && (n.variants_return_style = i.g.VARIANTS_GROUP),
                null != e.shopHomeConfig && (n.shop_home_config = e.shopHomeConfig),
                null != e.skipNumCategories && (n.skip_num_categories = e.skipNumCategories)),
            n
        );
    },
    o = (e) => {
        if (null != e) return `${e}?width=100&height=195`;
    },
    l = () => {
        let e = (0, r.A)({ forceFetch: !0 }),
            t = (0, s.i$)(e.endsAt, "L");
        return { isLoading: !e.fetched, isFractionalPremiumActive: e.isFractionalPremiumActive, expiresAt: t };
    };
