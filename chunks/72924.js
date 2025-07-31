n.d(t, { S: () => f });
var i = n(255367);
n(73800);
var r = n(512722),
    l = n.n(r),
    o = n(481060),
    s = n(558381),
    a = n(821849),
    c = n(531826),
    d = n(15640),
    u = n(724870),
    h = n(87484),
    _ = n(928518),
    E = n(106976),
    p = n(689011),
    I = n(55563),
    g = n(981631);
async function f(e) {
    var t, n, r, f, C;
    let { applicationId: O, skuId: T, initialPlanId: S, analyticsLocations: m, analyticsLocationObject: N } = e,
        R = I.Z.get(T);
    if (null == R) {
        let e = (await (0, s.oJ)(O)).find((e) => e.sku.id === T);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === g.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(O, e.id)));
    }
    ((R = null != R ? R : I.Z.get(T)), l()(null != R && R.applicationId === O, 'SKU must belong to application'), R.type !== g.epS.SUBSCRIPTION || (0, d.a)([R.id]) || (await (0, a.GZ)(R.id)));
    let A = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(O);
    if (R.type !== g.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, h.Z)({
                applicationId: O,
                skuId: T,
                analyticsLocationObject: N,
                analyticsLocations: m,
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
    await ((t = O),
    (n = T),
    (r = S),
    (f = N),
    (C = m),
    (0, u.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: f,
        analyticsLocations: C,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(p.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
