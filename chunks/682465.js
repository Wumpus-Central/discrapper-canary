"use strict";
n.d(e, { A: () => i });
var r = n(491301);
function i(t) {
    var e = (function (t, e) {
        if ("object" != (0, r.A)(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != (0, r.A)(i)) return i;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == (0, r.A)(e) ? e : e + "";
}
