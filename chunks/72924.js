n.d(t, { S: () => S });
var r = n(255367);
n(73800);
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
    O = n(106976),
    I = n(689011),
    T = n(55563),
    N = n(981631);
async function S(e) {
    var t, n, i, S, p;
    let { applicationId: R, skuId: A, initialPlanId: f, analyticsLocations: P, analyticsLocationObject: C } = e,
        D = T.Z.get(A);
    if (null == D) {
        let e = (await (0, a.oJ)(R)).find((e) => e.sku.id === A);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === N.epS.SUBSCRIPTION_GROUP && (await (0, O.rx)(R, e.id));
    }
    (D = null != D ? D : T.Z.get(A)), l()(null != D && D.applicationId === R, 'SKU must belong to application'), D.type !== N.epS.SUBSCRIPTION || (0, u.a)([D.id]) || (await (0, s.GZ)(D.id));
    let g = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(R);
    if (D.type !== N.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, E.Z)({
                applicationId: R,
                skuId: A,
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
    await ((t = R),
    (n = A),
    (i = f),
    (S = C),
    (p = P),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: p,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
