l.d(e, {
    Z: function () {
        return r;
    }
});
var t = l(442837),
    i = l(558381),
    o = l(551428);
let r = (0, t.Kb)(o.Z, {
    queryId: (n) => (null != n ? ['storeListing', n] : null),
    get: (n) => (null != n ? o.Z.getForSKU(n) : null),
    load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
    useStateHook: t.e7
});
