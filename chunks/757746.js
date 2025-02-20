t.d(r, { Z: () => o });
var n = t(442837),
    l = t(558381),
    s = t(551428);
let o = (0, n.Kb)(s.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? s.Z.getForSKU(e) : null),
    load: (e, r) => (null != r ? (0, l.km)(r) : Promise.resolve()),
    useStateHook: n.e7
});
