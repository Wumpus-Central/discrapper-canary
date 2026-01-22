n.d(t, { A: () => i });
var r = n(926140);
function i(e, t, n, a) {
    let { length: s } = n,
        o = a,
        l = t;
    if (0 === s) return 0;
    if (null == o) o = l;
    else if (o === l) return l;
    return (l += e === r.vB.UP ? -1 : 1) < 0 || l >= s
        ? i(e, l < 0 ? s : -1, n, o)
        : n[l].type === r.rD.HEADER
          ? i(e, l, n, o)
          : l;
}
