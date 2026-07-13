"use strict";
n.d(e, { A: () => r });
var i = n(491301);
function r(t) {
    var e = (function (t, e) {
        if ("object" != (0, i.A)(t) || !t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != (0, i.A)(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == (0, i.A)(e) ? e : e + "";
}
