n.d(t, { Z: () => i });
var r = n(727785);
function i(e, t, n, a) {
    let { length: o } = n,
        s = a,
        l = t;
    if (0 === o) return 0;
    if (null == s) s = l;
    else if (s === l) return l;
    return (l += e === r.a8.UP ? -1 : 1) < 0 || l >= o ? i(e, l < 0 ? o : -1, n, s) : n[l].type === r.h8.HEADER ? i(e, l, n, s) : l;
}
