n.d(t, { X: () => l });
var r = n(442837),
    i = n(821849),
    s = n(509545),
    a = n(960048);
let l = (0, r.Kb)(s.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? s.Z.getForSKU(e) : []),
    load: (e, t) => (null == t && a.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != t ? (0, i.GZ)(t) : Promise.reject()),
    useStateHook: r.Wu
});
