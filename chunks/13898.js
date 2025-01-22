Object.defineProperty(n, '__esModule', { value: !0 }), (n.flattenNames = void 0);
var i = l(r(426169)),
    a = l(r(320403)),
    o = l(r(667066)),
    s = l(r(681926));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (n.flattenNames = function e() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = [];
    return (
        (0, s.default)(n, function (n) {
            Array.isArray(n)
                ? e(n).map(function (e) {
                      return r.push(e);
                  })
                : (0, o.default)(n)
                  ? (0, a.default)(n, function (e, n) {
                        !0 === e && r.push(n), r.push(n + '-' + e);
                    })
                  : (0, i.default)(n) && r.push(n);
        }),
        r
    );
});
n.default = u;
