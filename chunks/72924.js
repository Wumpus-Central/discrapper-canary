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
    d = n(724870),
    E = n(87484),
    _ = n(928518),
    I = n(106976),
    O = n(689011),
    N = n(55563),
    T = n(981631);
async function S(e) {
    var t, n, i, S, p;
    let { applicationId: A, skuId: f, initialPlanId: R, analyticsLocations: P, analyticsLocationObject: C } = e,
        D = N.Z.get(f);
    if (null == D) {
        let e = (await (0, a.oJ)(A)).find((e) => e.sku.id === f);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(A, e.id));
    }
    (D = null != D ? D : N.Z.get(f)), l()(null != D && D.applicationId === A, 'SKU must belong to application'), D.type !== T.epS.SUBSCRIPTION || (0, u.a)([D.id]) || (await (0, s.GZ)(D.id));
    let g = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(A);
    if (D.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, E.Z)({
                applicationId: A,
                skuId: f,
                analyticsLocationObject: C,
                analyticsLocations: P,
                contextKey: g,
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
    (n = f),
    (i = R),
    (S = C),
    (p = P),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: p,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
