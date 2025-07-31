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
    O = n(689011),
    S = n(55563),
    I = n(981631);
async function f(e) {
    var t, n, i, f, h;
    let { applicationId: T, skuId: m, initialPlanId: g, analyticsLocations: N, analyticsLocationObject: y } = e,
        R = S.Z.get(m);
    if (null == R) {
        let e = (await (0, o.oJ)(T)).find((e) => e.sku.id === m);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === I.epS.SUBSCRIPTION_GROUP && (await (0, p.rx)(T, e.id)));
    }
    ((R = null != R ? R : S.Z.get(m)), l()(null != R && R.applicationId === T, 'SKU must belong to application'), R.type !== I.epS.SUBSCRIPTION || (0, u.a)([R.id]) || (await (0, s.GZ)(R.id)));
    let A = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(T);
    if (R.type !== I.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: T,
                skuId: m,
                analyticsLocationObject: y,
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
    (f = y),
    (h = N),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: f,
        analyticsLocations: h,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
