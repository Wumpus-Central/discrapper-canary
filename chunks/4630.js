i.d(t, { openIAPPurchaseModal: () => k });
var n = i(627968);
i(64700);
var l = i(284009),
    o = i.n(l),
    a = i(231723),
    s = i(800342),
    u = i(73825),
    d = i(851907),
    p = i(160946),
    r = i(95250),
    c = i(869146),
    P = i(143582),
    C = i(897904),
    I = i(67480),
    h = i(342098),
    w = i(216678),
    S = i(652215);
async function k(e) {
    var t, i, l, k, U;
    let f,
        O,
        { applicationId: _, skuId: g, initialPlanId: v, analyticsLocations: A, analyticsLocationObject: R } = e,
        T = I.A.get(g);
    if (null == T) {
        let e = (await (0, s.JI)(_)).find((e) => e.sku.id === g);
        o()(null != e, "Could not find store listing for sku"),
            e.sku.type === S.Puh.SUBSCRIPTION_GROUP && (await (0, P.vz)(_, e.id));
    }
    (T = T ?? I.A.get(g)),
        o()(null != T && T.applicationId === _, "SKU must belong to application"),
        T.type !== S.Puh.SUBSCRIPTION || (0, p.B)([T.id]) || (await (0, u.ur)(T.id));
    let m =
        null == (O = null != (f = (0, d.LU)({ applicationId: _ })) ? c.A.getWindow(f) : void 0) || O.closed
            ? a.SY
            : a.KX;
    if (T.type !== S.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, w.q)({
                applicationId: _,
                skuId: g,
                analyticsLocationObject: R,
                analyticsLocations: A,
                contextKey: m,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
                checkoutFlow: r.CL.PREMIUM_APPS_OTP_CHECKOUT,
            });
        });
    await ((t = _),
    (i = g),
    (l = v),
    (k = R),
    (U = A),
    (0, h.l)({
        applicationId: t,
        skuId: i,
        initialPlanId: l,
        analyticsLocationObject: k,
        analyticsLocations: U,
        renderHeader: (e, t, i) => (0, n.jsx)(C.fs, { step: i, onClose: () => t(!1) }),
    }));
}
