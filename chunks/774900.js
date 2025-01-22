r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(369977),
    a = r(335832),
    o = r(299188);
function s(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = i(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        a(e, 'prototype', { writable: !1 }),
        n && (0, o.Z)(e, n);
}
