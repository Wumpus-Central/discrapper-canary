"use strict";
n.d(t, { A: () => r });
var i = n(491301);
function r(e) {
    var t = (function (e, t) {
        if ("object" != (0, i.A)(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != (0, i.A)(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == (0, i.A)(t) ? t : t + "";
}
