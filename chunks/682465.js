"use strict";
r.d(t, { A: () => a });
var n = r(491301);
function a(e) {
    var t = (function (e, t) {
        if ("object" != (0, n.A)(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var a = r.call(e, t || "default");
            if ("object" != (0, n.A)(a)) return a;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == (0, n.A)(t) ? t : t + "";
}
