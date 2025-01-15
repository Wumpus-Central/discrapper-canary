n.d(t, {
    X: function () {
        return l;
    }
});
var i = n(442837),
    r = n(821849),
    s = n(509545),
    a = n(960048);
let l = (0, i.Kb)(s.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? s.Z.getForSKU(e) : []),
    load: (e, t) => (null == t && a.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != t ? (0, r.GZ)(t) : Promise.reject()),
    useStateHook: i.Wu
});
