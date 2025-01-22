n.d(t, {
    S: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(481060),
    o = n(558381),
    s = n(821849),
    c = n(531826),
    u = n(15640),
    d = n(724870),
    m = n(87484),
    h = n(928518),
    f = n(106976),
    p = n(689011),
    _ = n(55563),
    g = n(981631);
async function E(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: E, analyticsLocationObject: C } = e,
        I = _.Z.get(n);
    if (null == I) {
        let e = (await (0, o.oJ)(t)).find((e) => e.sku.id === n);
        l()(null != e, 'Could not find store listing for sku'), e.sku.type === g.epS.SUBSCRIPTION_GROUP && (await (0, f.rx)(t, e.id));
    }
    (I = null != I ? I : _.Z.get(n)), l()(null != I && I.applicationId === t, 'SKU must belong to application'), I.type === g.epS.SUBSCRIPTION && !(0, u.a)([I.id]) && (await (0, s.GZ)(I.id));
    let x = (function (e) {
        let t = (0, c.jA)({ applicationId: e }),
            n = null != t ? h.Z.getWindow(t) : void 0;
        return null == n || n.closed ? a.DEFAULT_MODAL_CONTEXT : a.POPOUT_MODAL_CONTEXT;
    })(t);
    if (I.type !== g.epS.SUBSCRIPTION)
        return new Promise((e, i) => {
            (0, m.Z)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: C,
                analyticsLocations: E,
                contextKey: x,
                onComplete: (t) => {
                    var n;
                    e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : []);
                },
                onClose: (e) => {
                    !e && i();
                }
            });
        });
    await (function (e, t, n, r, l) {
        return (0, d.m)({
            applicationId: e,
            skuId: t,
            initialPlanId: n,
            analyticsLocationObject: r,
            analyticsLocations: l,
            renderHeader: (e, t, n) =>
                (0, i.jsx)(p.t, {
                    step: n,
                    onClose: () => t(!1)
                })
        });
    })(t, n, r, C, E);
}
