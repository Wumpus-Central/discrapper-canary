n.d(t, { S: () => O });
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
    h = n(928518),
    E = n(106976),
    I = n(689011),
    p = n(55563),
    C = n(981631);
async function O(e) {
    var t, n, r, O, g;
    let { applicationId: S, skuId: T, initialPlanId: f, analyticsLocations: N, analyticsLocationObject: m } = e,
        R = p.Z.get(T);
    if (null == R) {
        let e = (await (0, s.oJ)(S)).find((e) => e.sku.id === T);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === C.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(S, e.id)));
    }
    ((R = null != R ? R : p.Z.get(T)), l()(null != R && R.applicationId === S, 'SKU must belong to application'), R.type !== C.epS.SUBSCRIPTION || (0, d.a)([R.id]) || (await (0, a.GZ)(R.id)));
    let A = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? h.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(S);
    if (R.type !== C.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: S,
                skuId: T,
                analyticsLocationObject: m,
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
    await ((t = S),
    (n = T),
    (r = f),
    (O = m),
    (g = N),
    (0, u.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: O,
        analyticsLocations: g,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
