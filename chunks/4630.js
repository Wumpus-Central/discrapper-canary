e.d(i, { openIAPPurchaseModal: () => w });
var n = e(284009),
    l = e.n(n),
    o = e(231723),
    a = e(800342),
    u = e(73825),
    s = e(851907),
    d = e(160946),
    p = e(529427),
    c = e(869146),
    P = e(143582),
    r = e(67480),
    C = e(342098),
    I = e(216678),
    h = e(652215);
async function w(t) {
    var i, e, n, w, S;
    let k,
        U,
        { applicationId: f, skuId: O, initialPlanId: _, analyticsLocations: g, analyticsLocationObject: A } = t,
        R = r.A.get(O);
    if (null == R) {
        let t = (await (0, a.JI)(f)).find((t) => t.sku.id === O);
        l()(null != t, "Could not find store listing for sku"),
            t.sku.type === h.Puh.SUBSCRIPTION_GROUP && (await (0, P.vz)(f, t.id));
    }
    (R = R ?? r.A.get(O)),
        l()(null != R && R.applicationId === f, "SKU must belong to application"),
        R.type !== h.Puh.SUBSCRIPTION || (0, d.B)([R.id]) || (await (0, u.ur)(R.id));
    let T =
        null == (U = null != (k = (0, s.LU)({ applicationId: f })) ? c.A.getWindow(k) : void 0) || U.closed
            ? o.SY
            : o.KX;
    if (R.type !== h.Puh.SUBSCRIPTION)
        return new Promise((t, i) => {
            (0, I.q)({
                applicationId: f,
                skuId: O,
                analyticsLocationObject: A,
                analyticsLocations: g,
                contextKey: T,
                onComplete: (i) => {
                    t(i?.entitlements ?? []);
                },
                onClose: (t) => {
                    t || i();
                },
                checkoutFlow: p.CL.PREMIUM_APPS_OTP_CHECKOUT,
            });
        });
    await ((i = f),
    (e = O),
    (n = _),
    (w = A),
    (S = g),
    (0, C.l)({ applicationId: i, skuId: e, initialPlanId: n, analyticsLocationObject: w, analyticsLocations: S }));
}
