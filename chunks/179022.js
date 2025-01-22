r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(824523),
    a = r(664060);
function o(e, n) {
    if (n && ('object' === (0, i.Z)(n) || 'function' == typeof n)) return n;
    if (void 0 !== n) throw TypeError('Derived constructors may only return object or undefined');
    return (0, a.Z)(e);
}
