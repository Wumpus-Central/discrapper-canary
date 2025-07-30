n.d(t, { S: () => h });
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
    f = n(55563),
    I = n(981631);
async function h(e) {
    var t, n, i, h, T;
    let { applicationId: S, skuId: m, initialPlanId: g, analyticsLocations: N, analyticsLocationObject: R } = e,
        b = f.Z.get(m);
    if (null == b) {
        let e = (await (0, o.oJ)(S)).find((e) => e.sku.id === m);
        (l()(null != e, 'Could not find store listing for sku'), e.sku.type === I.epS.SUBSCRIPTION_GROUP && (await (0, p.rx)(S, e.id)));
    }
    ((b = null != b ? b : f.Z.get(m)), l()(null != b && b.applicationId === S, 'SKU must belong to application'), b.type !== I.epS.SUBSCRIPTION || (0, u.a)([b.id]) || (await (0, s.GZ)(b.id)));
    let y = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? E.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(S);
    if (b.type !== I.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, _.Z)({
                applicationId: S,
                skuId: m,
                analyticsLocationObject: R,
                analyticsLocations: N,
                contextKey: y,
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
    (n = m),
    (i = g),
    (h = R),
    (T = N),
    (0, d.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: i,
        analyticsLocationObject: h,
        analyticsLocations: T,
        renderHeader: (e, t, n) =>
            (0, r.jsx)(O.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
