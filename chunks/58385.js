n.d(t, { X: () => l });
var r = n(442837),
    i = n(821849),
    a = n(509545),
    o = n(960048),
    s = n(981631);
let l = (0, r.Kb)(a.Z, {
    getQueryId: s.McO.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = a.Z.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && o.Z.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, i.GZ)(e) : Promise.reject()
    ),
});
