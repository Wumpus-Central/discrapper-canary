n.d(t, { S: () => S });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    o = n(481060),
    a = n(558381),
    c = n(821849),
    s = n(531826),
    u = n(15640),
    d = n(724870),
    _ = n(87484),
    E = n(928518),
    O = n(106976),
    I = n(689011),
    T = n(55563),
    p = n(981631);
async function S(e) {
    var t, n, i, S, N;
    let { applicationId: f, skuId: A, initialPlanId: m, analyticsLocations: R, analyticsLocationObject: g } = e,
        P = T.Z.get(A);
    if (null == P) {
        let e = (await (0, a.oJ)(f)).find((e) => e.sku.id === A);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === p.epS.SUBSCRIPTION_GROUP && (await (0, O.rx)(f, e.id)));
    }
    ((P = null != P ? P : T.Z.get(A)), l()(null != P && P.applicationId === f, 'SKU must belong to application'), P.type !== p.epS.SUBSCRIPTION || (0, u.a)([P.id]) || (await (0, c.GZ)(P.id)));
    let C = (function (e) {
        let t = (0, s.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(f);
    if (P.type !== p.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: f,
                skuId: A,
                analyticsLocationObject: g,
                analyticsLocations: R,
                contextKey: C,
                onComplete: (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                onClose: (e) => {
                    e || t();
                }
            });
        });
    await ((t = f),
    (n = A),
    (i = m),
    (S = g),
    (N = R),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: N,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
