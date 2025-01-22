l.d(e, {
    Z: function () {
        return o;
    }
});
var t = l(442837),
    i = l(558381),
    r = l(551428);
let o = (0, t.Kb)(r.Z, {
    queryId: (n) => (null != n ? ['storeListing', n] : null),
    get: (n) => (null != n ? r.Z.getForSKU(n) : null),
    load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
    useStateHook: t.e7
});
