r.d(n, {
    Z: function () {
        return o;
    }
});
var i = !0,
    a = 'Invariant failed';
function o(e, n) {
    if (!e) {
        if (i) throw Error(a);
        var r = 'function' == typeof n ? n() : n;
        throw Error(r ? ''.concat(a, ': ').concat(r) : a);
    }
}
