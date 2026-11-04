var o = n(284009),
    e = n.n(o),
    l = n(231723),
    u = n(800342),
    a = n(73825),
    p = n(851907),
    s = n(160946),
    d = n(589078),
    c = n(869146),
    P = n(143582),
    r = n(67480),
    C = n(342098),
    I = n(216678),
    h = n(652215);
n.d(
    i,
    {},
    {
        openIAPPurchaseModal: async function (t) {
            var i, n, o, w, S;
            let f,
                k,
                { applicationId: U, skuId: O, initialPlanId: _, analyticsLocations: g, analyticsLocationObject: A } = t,
                R = r.A.get(O);
            if (null == R) {
                let t = (await (0, u.JI)(U)).find((t) => t.sku.id === O);
                (e()(null != t, "Could not find store listing for sku"),
                    t.sku.type === h.Puh.SUBSCRIPTION_GROUP && (await (0, P.vz)(U, t.id)));
            }
            ((R = R ?? r.A.get(O)),
                e()(null != R && R.applicationId === U, "SKU must belong to application"),
                R.type !== h.Puh.SUBSCRIPTION || (0, s.B)([R.id]) || (await (0, a.ur)(R.id)));
            let T =
                null == (k = null != (f = (0, p.LU)({ applicationId: U })) ? c.A.getWindow(f) : void 0) || k.closed
                    ? l.SY
                    : "popout";
            if (R.type !== h.Puh.SUBSCRIPTION)
                return new Promise((t, i) => {
                    (0, I.q)({
                        applicationId: U,
                        skuId: O,
                        analyticsLocationObject: A,
                        analyticsLocations: g,
                        contextKey: T,
                        onComplete: function (i) {
                            t(i?.entitlements ?? []);
                        },
                        onClose: function (t) {
                            t || i();
                        },
                        checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT,
                    });
                });
            await ((i = U),
            (n = O),
            (o = _),
            (w = A),
            (S = g),
            (0, C.l)({
                applicationId: i,
                skuId: n,
                initialPlanId: o,
                analyticsLocationObject: w,
                analyticsLocations: S,
            }));
        },
    },
);
