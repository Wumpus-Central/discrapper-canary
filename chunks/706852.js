n.d(t, { Z: () => i });
var r = n(815995);
function i(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && (0, r.Z)(e, t);
}
