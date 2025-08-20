n.d(t, { X: () => l });
var r = n(442837),
    i = n(821849),
    a = n(509545),
    o = n(960048),
    s = n(981631);
let l = (0, r.Kb)(a.Z, {
    queryId: (e) => s.McO.SUBSCRIPTION_PLANS(e),
    get: (e) => (null != e ? a.Z.getForSKU(e) : []),
    load: (e, t) => (
        null == t && o.Z.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != t ? (0, i.GZ)(t) : Promise.reject()
    ),
    useStateHook: r.Wu,
});
