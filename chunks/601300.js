var n = r(949499).default;
(e.exports = function (e) {
    if (null != e) {
        var t = e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
            r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length))
            return {
                next: function () {
                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                },
            };
    }
    throw TypeError(n(e) + " is not iterable");
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
