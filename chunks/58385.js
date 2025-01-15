n.d(t, {
    X: function () {
        return l;
    }
});
var i = n(442837),
    s = n(821849),
    r = n(509545),
    a = n(960048);
let l = (0, i.Kb)(r.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? r.Z.getForSKU(e) : []),
    load: (e, t) => (null == t && a.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != t ? (0, s.GZ)(t) : Promise.reject()),
    useStateHook: i.Wu
});
