"use strict";
n.d(t, { Y: () => l });
var r = n(254326),
    i = n(919301),
    s = n(672541),
    a = n(285871),
    o = n(652215);
let l = {
    [a.C.ORB_CHECKOUT]: {
        flowType: a.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: s.G4,
    },
    [a.C.COLLECTIBLES_CHECKOUT]: {
        flowType: a.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r.OU,
    },
    [a.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: a.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: i.WT,
    },
    [a.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: a.C.PREMIUM_CHECKOUT },
    [a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: a.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
    [a.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: a.C.PREMIUM_APPS_OTP_CHECKOUT },
    [a.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: a.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
    [a.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: a.C.GUILD_PRODUCT_CHECKOUT },
    [a.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: a.C.GUILD_ROLE_CHECKOUT },
    [a.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: a.C.GUILD_BOOST_CHECKOUT },
};
