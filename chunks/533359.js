n.d(t, { Z: () => i });
var r = n(22520),
    o = n(655214),
    a = n(302885);
function i(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = r(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        o(e, 'prototype', { writable: !1 }),
        t && (0, a.Z)(e, t);
}
