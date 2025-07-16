n.d(t, { S: () => S });
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
    O = n(689011),
    p = n(55563),
    T = n(981631);
async function S(e) {
    var t, n, i, S, N;
    let { applicationId: f, skuId: m, initialPlanId: A, analyticsLocations: g, analyticsLocationObject: R } = e,
        C = p.Z.get(m);
    if (null == C) {
        let e = (await (0, o.oJ)(f)).find((e) => e.sku.id === m);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === T.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(f, e.id)));
    }
    ((C = null != C ? C : p.Z.get(m)), l()(null != C && C.applicationId === f, 'SKU must belong to application'), C.type !== T.epS.SUBSCRIPTION || (0, u.a)([C.id]) || (await (0, c.GZ)(C.id)));
    let P = (function (e) {
        let t = (0, s.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(f);
    if (C.type !== T.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: f,
                skuId: m,
                analyticsLocationObject: R,
                analyticsLocations: g,
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
    (S = R),
    (N = g),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: S,
        analyticsLocations: N,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
