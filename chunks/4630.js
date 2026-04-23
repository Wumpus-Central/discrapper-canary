n.d(t, { j: () => f });
var l = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    a = n(231723),
    s = n(800342),
    o = n(73825),
    d = n(851907),
    u = n(160946),
    c = n(589078),
    p = n(869146),
    h = n(143582),
    E = n(490744),
    _ = n(67480),
    S = n(342098),
    A = n(216678),
    C = n(652215);
async function f(e) {
    var t, n, i, f, g;
    let N,
        m,
        { applicationId: T, skuId: I, initialPlanId: L, analyticsLocations: R, analyticsLocationObject: O } = e,
        y = _.A.get(I);
    if (null == y) {
        let e = (await (0, s.JI)(T)).find((e) => e.sku.id === I);
        r()(null != e, "Could not find store listing for sku"),
            e.sku.type === C.Puh.SUBSCRIPTION_GROUP && (await (0, h.vz)(T, e.id));
    }
    (y = y ?? _.A.get(I)),
        r()(null != y && y.applicationId === T, "SKU must belong to application"),
        y.type !== C.Puh.SUBSCRIPTION || (0, u.B)([y.id]) || (await (0, o.ur)(y.id));
    let B =
        null == (m = null != (N = (0, d.LU)({ applicationId: T })) ? p.A.getWindow(N) : void 0) || m.closed
            ? a.SY
            : a.KX;
    if (y.type !== C.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, A.A)({
                applicationId: T,
                skuId: I,
                analyticsLocationObject: O,
                analyticsLocations: R,
                contextKey: B,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
                checkoutFlow: c.CL.PREMIUM_APPS_OTP_CHECKOUT,
            });
        });
    await ((t = T),
    (n = I),
    (i = L),
    (f = O),
    (g = R),
    (0, S.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: f,
        analyticsLocations: g,
        renderHeader: (e, t, n) => (0, l.jsx)(E.fs, { step: n, onClose: () => t(!1) }),
    }));
}
