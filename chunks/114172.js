Object.defineProperty(n, '__esModule', { value: !0 }), (n.mergeClasses = void 0);
var i = s(r(320403)),
    a = s(r(117806)),
    o =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        };
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (n.mergeClasses = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = (e.default && (0, a.default)(e.default)) || {};
    return (
        n.map(function (n) {
            var a = e[n];
            return (
                a &&
                    (0, i.default)(a, function (e, n) {
                        !r[n] && (r[n] = {}), (r[n] = o({}, r[n], a[n]));
                    }),
                n
            );
        }),
        r
    );
});
n.default = l;
