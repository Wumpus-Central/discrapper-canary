n.d(t, { Z: () => r });
var i = n(727785);
function r(e, t, n, a) {
    let { length: s } = n,
        o = a,
        l = t;
    if (0 === s) return 0;
    if (null == o) o = l;
    else if (o === l) return l;
    return (l += e === i.a8.UP ? -1 : 1) < 0 || l >= s ? r(e, l < 0 ? s : -1, n, o) : n[l].type === i.h8.HEADER ? r(e, l, n, o) : l;
}
