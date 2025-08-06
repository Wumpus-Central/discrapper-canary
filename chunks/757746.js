n.d(t, { Z: () => s });
var r = n(442837),
    i = n(558381),
    o = n(551428),
    a = n(981631);
let s = (0, r.Kb)(o.Z, {
    queryId: (e) => a.McO.STORE_LISTING(e),
    get: (e) => (null != e ? o.Z.getForSKU(e) : null),
    load: (e, t) => (null != t ? (0, i.km)(t) : Promise.resolve()),
    useStateHook: r.e7
});
