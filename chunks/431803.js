n.d(t, { Z: () => o });
var r = !0,
    i = 'Invariant failed';
function o(e, t) {
    if (!e) {
        if (r) throw Error(i);
        var n = 'function' == typeof t ? t() : t,
            o = n ? ''.concat(i, ': ').concat(n) : i;
        throw Error(o);
    }
}
