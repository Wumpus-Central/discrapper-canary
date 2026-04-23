"use strict";
r.d(e, { A: () => o });
var n = r(491301);
function o(t) {
    var e = (function (t, e) {
        if ("object" != (0, n.A)(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var o = r.call(t, e || "default");
            if ("object" != (0, n.A)(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == (0, n.A)(e) ? e : e + "";
}
