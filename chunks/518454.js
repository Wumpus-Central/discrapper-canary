n.d(t, { Z: () => i });
var r = n(727785);
function i(e, t, n, o) {
    let { length: a } = n,
        s = o,
        l = t;
    if (0 === a) return 0;
    if (null == s) s = l;
    else if (s === l) return l;
    return (l += e === r.a8.UP ? -1 : 1) < 0 || l >= a ? i(e, l < 0 ? a : -1, n, s) : n[l].type === r.h8.HEADER ? i(e, l, n, s) : l;
}
