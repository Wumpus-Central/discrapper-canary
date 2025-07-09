n.d(t, { X: () => o });
var i = n(442837),
    r = n(821849),
    s = n(509545),
    a = n(960048),
    l = n(981631);
let o = (0, i.Kb)(s.Z, {
    queryId: (e) => l.McO.SUBSCRIPTION_PLANS(e),
    get: (e) => (null != e ? s.Z.getForSKU(e) : []),
    load: (e, t) => (null == t && a.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != t ? (0, r.GZ)(t) : Promise.reject()),
    useStateHook: i.Wu
});
