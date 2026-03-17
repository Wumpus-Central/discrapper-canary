n.d(t, { j: () => p });
var i = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    c = n(851907),
    d = n(160946),
    u = n(869146),
    _ = n(143582),
    E = n(490744),
    T = n(67480),
    A = n(342098),
    I = n(216678),
    N = n(652215);
async function p(e) {
    var t, n, l, p, m;
    let R,
        h,
        { applicationId: S, skuId: g, initialPlanId: C, analyticsLocations: O, analyticsLocationObject: y } = e,
        x = T.A.get(g);
    if (null == x) {
        let e = (await (0, a.JI)(S)).find((e) => e.sku.id === g);
        r()(null != e, "Could not find store listing for sku"),
            e.sku.type === N.Puh.SUBSCRIPTION_GROUP && (await (0, _.vz)(S, e.id));
    }
    (x = x ?? T.A.get(g)),
        r()(null != x && x.applicationId === S, "SKU must belong to application"),
        x.type !== N.Puh.SUBSCRIPTION || (0, d.B)([x.id]) || (await (0, o.ur)(x.id));
    let f =
        null == (h = null != (R = (0, c.LU)({ applicationId: S })) ? u.A.getWindow(R) : void 0) || h.closed
            ? s.SYi
            : s.KX8;
    if (x.type !== N.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, I.A)({
                applicationId: S,
                skuId: g,
                analyticsLocationObject: y,
                analyticsLocations: O,
                contextKey: f,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
            });
        });
    await ((t = S),
    (n = g),
    (l = C),
    (p = y),
    (m = O),
    (0, A.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: p,
        analyticsLocations: m,
        renderHeader: (e, t, n) => (0, i.jsx)(E.fs, { step: n, onClose: () => t(!1) }),
    }));
}
