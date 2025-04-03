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
    N = n(689011),
    O = n(55563),
    T = n(981631);
async function S(e) {
    var t, n, i, S, p;
    let { applicationId: f, skuId: A, initialPlanId: R, analyticsLocations: P, analyticsLocationObject: C } = e,
        g = O.Z.get(A);
    if (null == g) {
        let e = (await (0, a.oJ)(f)).find((e) => e.sku.id === A);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(f, e.id));
    }
    (g = null != g ? g : O.Z.get(A)), l()(null != g && g.applicationId === f, 'SKU must belong to application'), g.type !== T.epS.SUBSCRIPTION || (0, u.a)([g.id]) || (await (0, s.GZ)(g.id));
    let m = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(f);
    if (g.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, E.Z)({
                applicationId: f,
                skuId: A,
                analyticsLocationObject: C,
                analyticsLocations: P,
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
    await ((t = f),
    (n = A),
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
            (0, r.jsx)(N.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
