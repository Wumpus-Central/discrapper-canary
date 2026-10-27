s.d(t, { Q: () => n });
var r = s(291749),
    i = s(801365);
function n(e, t) {
    let s = (0, i.wo)(e, t);
    if (null == s) return;
    let n = (0, i.l0)(e, t);
    return s > 700 * n ? r.i2.TIER_4 : s > 200 * n ? r.i2.TIER_3 : s > 100 * n ? r.i2.TIER_2 : r.i2.TIER_1;
}
