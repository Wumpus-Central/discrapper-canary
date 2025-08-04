n.d(t, { S: () => f });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(481060),
    o = n(558381),
    s = n(821849),
    c = n(531826),
    u = n(15640),
    d = n(724870),
    _ = n(87484),
    E = n(928518),
    p = n(106976),
    I = n(689011),
    O = n(55563),
    S = n(981631);
async function f(e) {
    var t, n, i, f, h;
    let { applicationId: T, skuId: m, initialPlanId: g, analyticsLocations: N, analyticsLocationObject: R } = e,
        y = O.Z.get(m);
    if (null == y) {
        let e = (await (0, o.oJ)(T)).find((e) => e.sku.id === m);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === S.epS.SUBSCRIPTION_GROUP && (await (0, p.rx)(T, e.id)));
    }
    ((y = null != y ? y : O.Z.get(m)), l()(null != y && y.applicationId === T, 'SKU must belong to application'), y.type !== S.epS.SUBSCRIPTION || (0, u.a)([y.id]) || (await (0, s.GZ)(y.id)));
    let A = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(T);
    if (y.type !== S.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: T,
                skuId: m,
                analyticsLocationObject: R,
                analyticsLocations: N,
                contextKey: A,
                onComplete: (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                onClose: (e) => {
                    e || t();
                }
            });
        });
    await ((t = T),
    (n = m),
    (i = g),
    (f = R),
    (h = N),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: f,
        analyticsLocations: h,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
