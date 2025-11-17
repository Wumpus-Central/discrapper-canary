e.d(n, { w: () => i });
var r = e(473749);
function o(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
    return r;
}
function i(t, n) {
    var e,
        i =
            (function (t) {
                if (Array.isArray(t)) return o(t);
            })((e = n || [])) ||
            (function (t) {
                if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
                    return Array.from(t);
            })(e) ||
            (function (t, n) {
                if (t) {
                    if ("string" == typeof t) return o(t, void 0);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    if (("Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e))
                        return Array.from(t);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return o(t, n);
                }
            })(e) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })();
    return (
        null == n && "function" != typeof t && i.push(t),
        (0, r.useMemo)(function () {
            return "function" == typeof t ? t() : t;
        }, i)
    );
}
