n.d(t, { Z: () => s });
var r = n(442837),
    i = n(558381),
    a = n(551428),
    o = n(981631);
let s = (0, r.Kb)(a.Z, {
    queryId: (e) => o.McO.STORE_LISTING(e),
    get: (e) => (null != e ? a.Z.getForSKU(e) : null),
    load: (e, t) => (null != t ? (0, i.km)(t) : Promise.resolve()),
    useStateHook: r.e7
});
