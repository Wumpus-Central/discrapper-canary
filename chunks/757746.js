l.d(n, { Z: () => a });
var t = l(442837),
    r = l(558381),
    s = l(551428),
    i = l(981631);
let a = (0, t.Kb)(s.Z, {
    queryId: (e) => i.McO.STORE_LISTING(e),
    get: (e) => (null != e ? s.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, r.km)(n) : Promise.resolve()),
    useStateHook: t.e7
});
