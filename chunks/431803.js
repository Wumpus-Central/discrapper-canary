n.d(t, { Z: () => a });
var r = !0,
    i = 'Invariant failed';
function a(e, t) {
    if (!e) {
        if (r) throw Error(i);
        var n = 'function' == typeof t ? t() : t,
            a = n ? ''.concat(i, ': ').concat(n) : i;
        throw Error(a);
    }
}
