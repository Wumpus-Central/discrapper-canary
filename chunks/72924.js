n.d(t, { S: () => S });
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(481060),
    s = n(558381),
    o = n(821849),
    c = n(531826),
    u = n(15640),
    E = n(724870),
    d = n(87484),
    _ = n(928518),
    I = n(106976),
    T = n(689011),
    N = n(55563),
    A = n(981631);
async function S(e) {
    var t, n, l, S, R;
    let { applicationId: C, skuId: O, initialPlanId: P, analyticsLocations: D, analyticsLocationObject: m } = e,
        p = N.Z.get(O);
    if (null == p) {
        let e = (await (0, s.oJ)(C)).find((e) => e.sku.id === O);
        r()(null != e, 'Could not find store listing for sku'), e.sku.type === A.epS.SUBSCRIPTION_GROUP && (await (0, I.rx)(C, e.id));
    }
    (p = null != p ? p : N.Z.get(O)), r()(null != p && p.applicationId === C, 'SKU must belong to application'), p.type !== A.epS.SUBSCRIPTION || (0, u.a)([p.id]) || (await (0, o.GZ)(p.id));
    let h = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? _.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.z1l : a.u1M;
    })(C);
    if (p.type !== A.epS.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, d.Z)({
                applicationId: C,
                skuId: O,
                analyticsLocationObject: m,
                analyticsLocations: D,
                contextKey: h,
                onComplete: (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: (e) => {
                    e || t();
                }
            });
        });
    await ((t = C),
    (n = O),
    (l = P),
    (S = m),
    (R = D),
    (0, E.m)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: S,
        analyticsLocations: R,
        renderHeader: (e, t, n) =>
            (0, i.jsx)(T.t, {
                step: n,
                onClose: () => t(!1)
            })
    }));
}
