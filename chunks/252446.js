var n = r(996533),
    i = r(850361),
    o = r(164133),
    a = r(415169);
function s(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return (
        (e.exports = s =
            function (e) {
                if (null === e || !o(e)) return e;
                if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                if (void 0 !== r) {
                    if (r.has(e)) return r.get(e);
                    r.set(e, t);
                }
                function t() {
                    return a(e, arguments, n(this).constructor);
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
        s(t)
    );
}
(e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
