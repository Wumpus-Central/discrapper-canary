r.d(t, { I: () => o });
var n = r(64700);
function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function o(e, t) {
    var r,
        o =
            (function (e) {
                if (Array.isArray(e)) return i(e);
            })((r = t || [])) ||
            (function (e) {
                if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                    return Array.from(e);
            })(r) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, void 0);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r))
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, void 0);
                }
            })(r) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })();
    return (
        null == t && "function" != typeof e && o.push(e),
        (0, n.useMemo)(function () {
            return "function" == typeof e ? e() : e;
        }, o)
    );
}
