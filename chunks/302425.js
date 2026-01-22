n.d(t, {
    Y: () => l,
});
var r = n(254326),
    i = n(919301),
    a = n(672541),
    s = n(285871),
    o = n(652215);
let l = {
    [s.C.ORB_CHECKOUT]: {
        flowType: s.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: a.G4,
    },
    [s.C.COLLECTIBLES_CHECKOUT]: {
        flowType: s.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r.OU,
    },
    [s.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: s.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: o.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: i.WT,
    },
    [s.C.PREMIUM_CHECKOUT]: {
        implemented: !1,
        flowType: s.C.PREMIUM_CHECKOUT,
    },
};
