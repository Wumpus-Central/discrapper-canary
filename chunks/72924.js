n.d(t, { S: () => g });
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
async function g(e) {
    var t, n, r, g, T;
    let { applicationId: O, skuId: S, initialPlanId: N, analyticsLocations: f, analyticsLocationObject: R } = e,
        m = p.Z.get(S);
    if (null == m) {
        let e = (await (0, s.oJ)(O)).find((e) => e.sku.id === S);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === C.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(O, e.id)));
    }
    ((m = null != m ? m : p.Z.get(S)), l()(null != m && m.applicationId === O, 'SKU must belong to application'), m.type !== C.epS.SUBSCRIPTION || (0, d.a)([m.id]) || (await (0, a.GZ)(m.id)));
    let A = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? h.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(O);
    if (m.type !== C.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: O,
                skuId: S,
                analyticsLocationObject: R,
                analyticsLocations: f,
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
    (n = S),
    (r = N),
    (g = R),
    (T = f),
    (0, u.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: g,
        analyticsLocations: T,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
