n.d(t, { S: () => N });
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
    I = n(106976),
    O = n(689011),
    T = n(55563),
    p = n(981631);
async function N(e) {
    var t, n, i, N, S;
    let { applicationId: f, skuId: m, initialPlanId: A, analyticsLocations: R, analyticsLocationObject: g } = e,
        C = T.Z.get(m);
    if (null == C) {
        let e = (await (0, a.oJ)(f)).find((e) => e.sku.id === m);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === p.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(f, e.id));
    }
    (C = null != C ? C : T.Z.get(m)), l()(null != C && C.applicationId === f, 'SKU must belong to application'), C.type !== p.epS.SUBSCRIPTION || (0, u.a)([C.id]) || (await (0, c.GZ)(C.id));
    let P = (function (e) {
        let t = (0, s.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(f);
    if (C.type !== p.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: f,
                skuId: m,
                analyticsLocationObject: g,
                analyticsLocations: R,
                contextKey: P,
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
    (n = m),
    (i = A),
    (N = g),
    (S = R),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: N,
        analyticsLocations: S,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
