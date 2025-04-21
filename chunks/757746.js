l.d(n, { Z: () => a });
var t = l(442837),
    r = l(558381),
    i = l(551428),
    s = l(981631);
let a = (0, t.Kb)(i.Z, {
    queryId: (e) => s.McO.STORE_LISTING(e),
    get: (e) => (null != e ? i.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, r.km)(n) : Promise.resolve()),
    useStateHook: t.e7
});
