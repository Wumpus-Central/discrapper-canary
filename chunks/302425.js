n.d(t, { Y: () => o });
var l = n(254326),
    r = n(919301),
    i = n(672541),
    s = n(285871),
    a = n(652215);
let o = {
    [s.C.ORB_CHECKOUT]: {
        flowType: s.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: a.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: i.G4,
    },
    [s.C.COLLECTIBLES_CHECKOUT]: {
        flowType: s.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: a.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: l.OU,
    },
    [s.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: s.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: a.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r.WT,
    },
    [s.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: s.C.PREMIUM_CHECKOUT },
    [s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: s.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
    [s.C.PREMIUM_APPS_OTP_CHECKOUT]: { implemented: !1, flowType: s.C.PREMIUM_APPS_OTP_CHECKOUT },
    [s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: s.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
    [s.C.GUILD_PRODUCT_CHECKOUT]: { implemented: !1, flowType: s.C.GUILD_PRODUCT_CHECKOUT },
    [s.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: s.C.GUILD_ROLE_CHECKOUT },
    [s.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: s.C.GUILD_BOOST_CHECKOUT },
};
