l.d(t, { openIAPPurchaseModal: () => v });
var a = l(627968);
l(64700);
var n = l(284009),
    r = l.n(n),
    i = l(231723),
    o = l(800342),
    s = l(73825),
    d = l(851907),
    c = l(160946),
    u = l(226991),
    p = l(869146),
    m = l(143582),
    b = l(490744),
    h = l(67480),
    x = l(342098),
    y = l(216678),
    g = l(652215);
async function v(e) {
    var t, l, n, v, f;
    let _,
        E,
        { applicationId: C, skuId: S, initialPlanId: j, analyticsLocations: T, analyticsLocationObject: P } = e,
        I = h.A.get(S);
    if (null == I) {
        let e = (await (0, o.JI)(C)).find((e) => e.sku.id === S);
        r()(null != e, "Could not find store listing for sku"),
            e.sku.type === g.Puh.SUBSCRIPTION_GROUP && (await (0, m.vz)(C, e.id));
    }
    (I = I ?? h.A.get(S)),
        r()(null != I && I.applicationId === C, "SKU must belong to application"),
        I.type !== g.Puh.SUBSCRIPTION || (0, c.B)([I.id]) || (await (0, s.ur)(I.id));
    let A =
        null == (E = null != (_ = (0, d.LU)({ applicationId: C })) ? p.A.getWindow(_) : void 0) || E.closed
            ? i.SY
            : i.KX;
    if (I.type !== g.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, y.A)({
                applicationId: C,
                skuId: S,
                analyticsLocationObject: P,
                analyticsLocations: T,
                contextKey: A,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
                checkoutFlow: u.CL.PREMIUM_APPS_OTP_CHECKOUT,
            });
        });
    await ((t = C),
    (l = S),
    (n = j),
    (v = P),
    (f = T),
    (0, x.l)({
        applicationId: t,
        skuId: l,
        initialPlanId: n,
        analyticsLocationObject: v,
        analyticsLocations: f,
        renderHeader: (e, t, l) => (0, a.jsx)(b.fs, { step: l, onClose: () => t(!1) }),
    }));
}
