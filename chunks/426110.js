r.d(t, { Q: () => i });
var s = r(291749),
    n = r(801365);
function i(e, t) {
    let r = (0, n.wo)(e, t);
    if (null == r) return;
    let i = (0, n.l0)(e, t);
    return r > 700 * i ? s.i2.TIER_4 : r > 200 * i ? s.i2.TIER_3 : r > 100 * i ? s.i2.TIER_2 : s.i2.TIER_1;
}
