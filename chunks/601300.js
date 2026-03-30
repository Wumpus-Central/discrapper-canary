var r = n(949499).default;
(e.exports = function (e) {
    if (null != e) {
        var t = e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
            n = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length))
            return {
                next: function () {
                    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                },
            };
    }
    throw TypeError(r(e) + " is not iterable");
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
