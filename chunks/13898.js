Object.defineProperty(t, '__esModule', { value: !0 }), (t.flattenNames = void 0);
var r = s(n(426169)),
    i = s(n(320403)),
    o = s(n(667066)),
    a = s(n(681926));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (t.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = [];
    return (
        (0, a.default)(t, function (t) {
            Array.isArray(t)
                ? e(t).map(function (e) {
                      return n.push(e);
                  })
                : (0, o.default)(t)
                  ? (0, i.default)(t, function (e, t) {
                        !0 === e && n.push(t), n.push(t + '-' + e);
                    })
                  : (0, r.default)(t) && n.push(t);
        }),
        n
    );
});
t.default = l;
