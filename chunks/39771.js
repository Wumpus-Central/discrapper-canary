n.d(t, { j: () => m });
var i = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    c = n(851907),
    u = n(160946),
    d = n(589078),
    _ = n(869146),
    E = n(143582),
    T = n(490744),
    A = n(67480),
    I = n(342098),
    p = n(216678),
    N = n(652215);
async function m(e) {
    var t, n, l, m, R;
    let h,
        S,
        { applicationId: g, skuId: C, initialPlanId: O, analyticsLocations: y, analyticsLocationObject: x } = e,
        f = A.A.get(C);
    if (null == f) {
        let e = (await (0, a.JI)(g)).find((e) => e.sku.id === C);
        r()(null != e, "Could not find store listing for sku"),
            e.sku.type === N.Puh.SUBSCRIPTION_GROUP && (await (0, E.vz)(g, e.id));
    }
    (f = f ?? A.A.get(C)),
        r()(null != f && f.applicationId === g, "SKU must belong to application"),
        f.type !== N.Puh.SUBSCRIPTION || (0, u.B)([f.id]) || (await (0, o.ur)(f.id));
    let P =
        null == (S = null != (h = (0, c.LU)({ applicationId: g })) ? _.A.getWindow(h) : void 0) || S.closed
            ? s.SYi
            : s.KX8;
    if (f.type !== N.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, p.A)({
                applicationId: g,
                skuId: C,
                analyticsLocationObject: x,
                analyticsLocations: y,
                contextKey: P,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
                checkoutFlow: d.CL.PREMIUM_APPS_OTP_CHECKOUT,
            });
        });
    await ((t = g),
    (n = C),
    (l = O),
    (m = x),
    (R = y),
    (0, I.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: m,
        analyticsLocations: R,
        renderHeader: (e, t, n) => (0, i.jsx)(T.fs, { step: n, onClose: () => t(!1) }),
    }));
}
