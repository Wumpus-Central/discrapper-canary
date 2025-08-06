n.d(t, { S: () => b });
var r = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(481060),
    s = n(558381),
    l = n(821849),
    c = n(531826),
    u = n(15640),
    d = n(724870),
    f = n(87484),
    _ = n(928518),
    p = n(106976),
    h = n(689011),
    m = n(55563),
    g = n(981631);
function E(e) {
    let t = (0, c.jA)({ applicationId: e }),
        n = null != t ? _.Z.getWindow(t) : void 0;
    return null == n || n.closed ? a.z1l : a.u1M;
}
async function b(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: i, analyticsLocationObject: a } = e,
        c = m.Z.get(n);
    if (null == c) {
        let e = (await (0, s.oJ)(t)).find((e) => e.sku.id === n);
        o()(null != e, "Could not find store listing for sku"),
            e.sku.type === g.epS.SUBSCRIPTION_GROUP && (await (0, p.rx)(t, e.id));
    }
    (c = null != c ? c : m.Z.get(n)),
        o()(null != c && c.applicationId === t, "SKU must belong to application"),
        c.type !== g.epS.SUBSCRIPTION || (0, u.a)([c.id]) || (await (0, l.GZ)(c.id));
    let d = E(t);
    if (c.type !== g.epS.SUBSCRIPTION)
        return new Promise((e, r) => {
            let o = (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                s = (e) => {
                    e || r();
                };
            (0, f.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: a,
                analyticsLocations: i,
                contextKey: d,
                onComplete: o,
                onClose: s,
            });
        });
    await y(t, n, r, a, i);
}
function y(e, t, n, i, o) {
    let a = (e, t, n) =>
        (0, r.jsx)(h.t, {
            step: n,
            onClose: () => t(!1),
        });
    return (0, d.m)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: i,
        analyticsLocations: o,
        renderHeader: a,
    });
}
