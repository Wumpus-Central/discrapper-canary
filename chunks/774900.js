n.d(t, { Z: () => s });
var i = n(369977),
    r = n(335832),
    a = n(299188);
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = i(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        r(e, 'prototype', { writable: !1 }),
        t && (0, a.Z)(e, t);
}
