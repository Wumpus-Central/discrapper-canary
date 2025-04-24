n.d(t, { S: () => S });
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(481060),
    a = n(558381),
    s = n(821849),
    c = n(531826),
    u = n(15640),
    E = n(724870),
    d = n(87484),
    _ = n(928518),
    I = n(106976),
    O = n(689011),
    T = n(55563),
    N = n(981631);
async function S(e) {
    var t, n, i, S, R;
    let { applicationId: A, skuId: p, initialPlanId: P, analyticsLocations: C, analyticsLocationObject: D } = e,
        f = T.Z.get(p);
    if (null == f) {
        let e = (await (0, a.oJ)(A)).find((e) => e.sku.id === p);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === N.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(A, e.id));
    }
    (f = null != f ? f : T.Z.get(p)), l()(null != f && f.applicationId === A, 'SKU must belong to application'), f.type !== N.epS.SUBSCRIPTION || (0, u.a)([f.id]) || (await (0, s.GZ)(f.id));
    let m = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(A);
    if (f.type !== N.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, d.Z)({
                applicationId: A,
                skuId: p,
                analyticsLocationObject: D,
                analyticsLocations: C,
                contextKey: m,
                onComplete: (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                onClose: (e) => {
                    e || t();
                }
            });
        });
    await ((t = A),
    (n = p),
    (i = P),
    (S = D),
    (R = C),
    (0, E.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: R,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
