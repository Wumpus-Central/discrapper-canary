t.d(n, { Z: () => i });
var l = t(442837),
    r = t(558381),
    a = t(551428),
    o = t(981631);
let i = (0, l.Kb)(a.Z, {
    queryId: (e) => o.McO.STORE_LISTING(e),
    get: (e) => (null != e ? a.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, r.km)(n) : Promise.resolve()),
    useStateHook: l.e7
});
