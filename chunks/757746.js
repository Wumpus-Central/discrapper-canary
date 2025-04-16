t.d(n, { Z: () => s });
var r = t(442837),
    l = t(558381),
    a = t(551428),
    o = t(981631);
let s = (0, r.Kb)(a.Z, {
    queryId: (e) => o.McO.STORE_LISTING(e),
    get: (e) => (null != e ? a.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
    useStateHook: r.e7
});
