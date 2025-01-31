n.d(t, { Z: () => a });
var i = !0,
    r = 'Invariant failed';
function a(e, t) {
    if (!e) {
        if (i) throw Error(r);
        var n = 'function' == typeof t ? t() : t;
        throw Error(n ? ''.concat(r, ': ').concat(n) : r);
    }
}
