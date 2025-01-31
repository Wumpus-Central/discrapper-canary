n.d(e, { Z: () => r });
var i = n(442837),
    s = n(558381),
    t = n(551428);
let r = (0, i.Kb)(t.Z, {
    queryId: (l) => (null != l ? ['storeListing', l] : null),
    get: (l) => (null != l ? t.Z.getForSKU(l) : null),
    load: (l, e) => (null != e ? (0, s.km)(e) : Promise.resolve()),
    useStateHook: i.e7
});
