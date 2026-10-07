s.d(t, { Q: () => i });
var r = s(291749),
    n = s(801365);
function i(e, t) {
    let s = (0, n.wo)(e, t);
    if (null == s) return;
    let i = (0, n.l0)(e, t);
    return s > 700 * i ? r.i2.TIER_4 : s > 200 * i ? r.i2.TIER_3 : s > 100 * i ? r.i2.TIER_2 : r.i2.TIER_1;
}
