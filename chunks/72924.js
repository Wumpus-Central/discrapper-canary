n.d(t, { S: () => T });
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
    _ = n(87484),
    E = n(928518),
    h = n(106976),
    I = n(689011),
    p = n(55563),
    C = n(981631);
async function T(e) {
    var t, n, r, T, g;
    let { applicationId: O, skuId: S, initialPlanId: N, analyticsLocations: f, analyticsLocationObject: A } = e,
        R = p.Z.get(S);
    if (null == R) {
        let e = (await (0, s.oJ)(O)).find((e) => e.sku.id === S);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === C.epS.SUBSCRIPTION_GROUP && (await (0, h.rx)(O, e.id)));
    }
    ((R = null != R ? R : p.Z.get(S)), l()(null != R && R.applicationId === O, 'SKU must belong to application'), R.type !== C.epS.SUBSCRIPTION || (0, d.a)([R.id]) || (await (0, a.GZ)(R.id)));
    let m = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(O);
    if (R.type !== C.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: O,
                skuId: S,
                analyticsLocationObject: A,
                analyticsLocations: f,
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
    await ((t = O),
    (n = S),
    (r = N),
    (T = A),
    (g = f),
    (0, u.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: T,
        analyticsLocations: g,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
