n.d(t, { Z: () => a });
var r = n(369977),
    i = n(335832),
    o = n(299188);
function a(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = r(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        i(e, 'prototype', { writable: !1 }),
        t && (0, o.Z)(e, t);
}
