n.d(t, { X: () => a });
var i = n(442837),
    s = n(821849),
    l = n(509545),
    r = n(960048);
let a = (0, i.Kb)(l.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? l.Z.getForSKU(e) : []),
    load: (e, t) => (null == t && r.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != t ? (0, s.GZ)(t) : Promise.reject()),
    useStateHook: i.Wu
});
