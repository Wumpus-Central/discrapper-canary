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
    N = n(106976),
    I = n(689011),
    T = n(55563),
    O = n(981631);
async function S(e) {
    var t, n, i, S, P;
    let { applicationId: p, skuId: A, initialPlanId: R, analyticsLocations: C, analyticsLocationObject: f } = e,
        D = T.Z.get(A);
    if (null == D) {
        let e = (await (0, a.oJ)(p)).find((e) => e.sku.id === A);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === O.epS.SUBSCRIPTION_GROUP && (await (0, N.rx)(p, e.id));
    }
    (D = null != D ? D : T.Z.get(A)), l()(null != D && D.applicationId === p, 'SKU must belong to application'), D.type !== O.epS.SUBSCRIPTION || (0, u.a)([D.id]) || (await (0, s.GZ)(D.id));
    let m = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(p);
    if (D.type !== O.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, d.Z)({
                applicationId: p,
                skuId: A,
                analyticsLocationObject: f,
                analyticsLocations: C,
                contextKey: m,
                onComplete: (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: (e) => {
                    e || t();
                }
            });
        });
    await ((t = p),
    (n = A),
    (i = R),
    (S = f),
    (P = C),
    (0, E.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: P,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
