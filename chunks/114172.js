Object.defineProperty(t, '__esModule', { value: !0 }), (t.mergeClasses = void 0);
var i = s(n(320403)),
    r = s(n(117806)),
    a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        };
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
var o = (t.mergeClasses = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = (e.default && (0, r.default)(e.default)) || {};
    return (
        t.map(function (t) {
            var r = e[t];
            return (
                r &&
                    (0, i.default)(r, function (e, t) {
                        n[t] || (n[t] = {}), (n[t] = a({}, n[t], r[t]));
                    }),
                t
            );
        }),
        n
    );
});
t.default = o;
