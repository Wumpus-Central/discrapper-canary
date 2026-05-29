"use strict";
n.d(t, { I: () => s });
var i = n(64700);
function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function s(e, t) {
    var n,
        s =
            (function (e) {
                if (Array.isArray(e)) return r(e);
            })((n = t || [])) ||
            (function (e) {
                if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                    return Array.from(e);
            })(n) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return r(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, void 0);
                }
            })(n) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })();
    return (
        null == t && "function" != typeof e && s.push(e),
        (0, i.useMemo)(function () {
            return "function" == typeof e ? e() : e;
        }, s)
    );
}
