Object.defineProperty(t, '__esModule', { value: !0 }), (t.mergeClasses = void 0);
var n = i(r(320403)),
    o = i(r(117806)),
    a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        };
function i(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (t.mergeClasses = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = (e.default && (0, o.default)(e.default)) || {};
    return (
        t.map(function (t) {
            var o = e[t];
            return (
                o &&
                    (0, n.default)(o, function (e, t) {
                        r[t] || (r[t] = {}), (r[t] = a({}, r[t], o[t]));
                    }),
                t
            );
        }),
        r
    );
});
t.default = l;
