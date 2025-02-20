Object.defineProperty(t, '__esModule', { value: !0 }), (t.mergeClasses = void 0);
var r = a(n(320403)),
    i = a(n(117806)),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
var s = (t.mergeClasses = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = (e.default && (0, i.default)(e.default)) || {};
    return (
        t.map(function (t) {
            var i = e[t];
            return (
                i &&
                    (0, r.default)(i, function (e, t) {
                        n[t] || (n[t] = {}), (n[t] = o({}, n[t], i[t]));
                    }),
                t
            );
        }),
        n
    );
});
t.default = s;
