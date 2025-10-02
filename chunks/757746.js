n.d(t, { Z: () => s });
var r = n(442837),
    i = n(558381),
    a = n(551428),
    o = n(981631);
let s = (0, r.Kb)(a.Z, {
    getQueryId: o.McO.STORE_LISTING,
    get: (e) => {
        var t;
        return null != e && null != (t = a.Z.getForSKU(e)) ? t : null;
    },
    load: (e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
    getIsLoading: (e) => null != e && a.Z.isFetchingForSKU(e),
});
