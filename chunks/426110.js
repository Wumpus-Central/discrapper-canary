r.d(t, { Pk: () => a, Qn: () => l });
var s = r(440703),
    n = r(291749),
    i = r(801365);
function l(e) {
    return u((0, i._Z)(e));
}
function a(e) {
    let t = (0, i.sn)(e);
    if (t?.type === s.l.VIRTUAL_CURRENCY) return u(t.orbQuantity);
}
function u(e) {
    if (null != e) return e > 700 ? n.i2.TIER_4 : e > 200 ? n.i2.TIER_3 : e > 100 ? n.i2.TIER_2 : n.i2.TIER_1;
}
