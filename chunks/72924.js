n.d(t, { S: () => N });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(481060),
    o = n(558381),
    c = n(821849),
    s = n(531826),
    u = n(15640),
    d = n(724870),
    _ = n(87484),
    E = n(928518),
    I = n(106976),
    T = n(689011),
    O = n(55563),
    p = n(981631);
async function N(e) {
    var t, n, i, N, f;
    let { applicationId: S, skuId: m, initialPlanId: R, analyticsLocations: A, analyticsLocationObject: g } = e,
        P = O.Z.get(m);
    if (null == P) {
        let e = (await (0, o.oJ)(S)).find((e) => e.sku.id === m);
        l()(null != e, "Could not find store listing for sku"),
            e.sku.type === p.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(S, e.id));
    }
    (P = null != P ? P : O.Z.get(m)),
        l()(null != P && P.applicationId === S, "SKU must belong to application"),
        P.type !== p.epS.SUBSCRIPTION || (0, u.a)([P.id]) || (await (0, c.GZ)(P.id));
    let C = (function (e) {
        let t = (0, s.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(S);
    if (P.type !== p.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: S,
                skuId: m,
                analyticsLocationObject: g,
                analyticsLocations: A,
                contextKey: C,
                onComplete: (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                onClose: (e) => {
                    e || t();
                },
            });
        });
    await ((t = S),
    (n = m),
    (i = R),
    (N = g),
    (f = A),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: N,
        analyticsLocations: f,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(T.t, {
                step: n,
                onClose: () => t(!1),
            }),
    }));
}
