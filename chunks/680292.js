var r = n(916511),
    i = n(987307),
    s = n(326583),
    a = n(255159);
function o(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (
        (e.exports = o =
            function (e) {
                if (null === e || !s(e)) return e;
                if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                if (void 0 !== n) {
                    if (n.has(e)) return n.get(e);
                    n.set(e, t);
                }
                function t() {
                    return a(e, arguments, r(this).constructor);
                }
                return (
                    (t.prototype = Object.create(e.prototype, {
                        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    i(t, e)
                );
            }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        o(t)
    );
}
(e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
