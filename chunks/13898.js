Object.defineProperty(t, '__esModule', { value: !0 }), (t.flattenNames = void 0);
var i = o(n(426169)),
    r = o(n(320403)),
    a = o(n(667066)),
    s = o(n(681926));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (t.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = [];
    return (
        (0, s.default)(t, function (t) {
            Array.isArray(t)
                ? e(t).map(function (e) {
                      return n.push(e);
                  })
                : (0, a.default)(t)
                  ? (0, r.default)(t, function (e, t) {
                        !0 === e && n.push(t), n.push(t + '-' + e);
                    })
                  : (0, i.default)(t) && n.push(t);
        }),
        n
    );
});
t.default = l;
