n.d(t, { S: () => O });
var i = n(255367);
n(73800);
var r = n(512722),
    l = n.n(r),
    o = n(481060),
    s = n(558381),
    a = n(821849),
    c = n(531826),
    u = n(15640),
    d = n(724870),
    _ = n(87484),
    h = n(928518),
    E = n(106976),
    I = n(689011),
    p = n(55563),
    C = n(981631);
async function O(e) {
    var t, n, r, O, T;
    let { applicationId: g, skuId: S, initialPlanId: f, analyticsLocations: N, analyticsLocationObject: R } = e,
        A = p.Z.get(S);
    if (null == A) {
        let e = (await (0, s.oJ)(g)).find((e) => e.sku.id === S);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === C.epS.SUBSCRIPTION_GROUP && (await (0, E.rx)(g, e.id)));
    }
    ((A = null != A ? A : p.Z.get(S)), l()(null != A && A.applicationId === g, 'SKU must belong to application'), A.type !== C.epS.SUBSCRIPTION || (0, u.a)([A.id]) || (await (0, a.GZ)(A.id)));
    let m = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? h.Z.getWindow(t) : void 0;
        return null == n || n.closed ? o.z1l : o.u1M;
    })(g);
    if (A.type !== C.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: g,
                skuId: S,
                analyticsLocationObject: R,
                analyticsLocations: N,
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
    await ((t = g),
    (n = S),
    (r = f),
    (O = R),
    (T = N),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: O,
        analyticsLocations: T,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(I.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
