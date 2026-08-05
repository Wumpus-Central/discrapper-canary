e.d(r, { A: () => n });
var o = e(491301);
function n(t) {
    var r = (function (t, r) {
        if ("object" != (0, o.A)(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var n = e.call(t, r || "default");
            if ("object" != (0, o.A)(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    })(t, "string");
    return "symbol" == (0, o.A)(r) ? r : r + "";
}
