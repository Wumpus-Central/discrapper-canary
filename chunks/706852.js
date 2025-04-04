r.d(t, { Z: () => n });
var a = r(815995);
function n(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && (0, a.Z)(e, t);
}
