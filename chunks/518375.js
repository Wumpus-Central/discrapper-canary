t.d(e, { W: () => r });
var a = t(676040);
function r(n, e, t, r, i) {
    if ("object" != typeof n) throw TypeError("Options must be an object");
    let s = n[e];
    if (void 0 !== s) {
        if ("boolean" !== t && "string" !== t) throw TypeError("invalid type");
        if (
            ("boolean" === t && (s = !!s),
            "string" === t && (s = (0, a.bf)(s)),
            void 0 !== r && !r.filter((n) => n == s).length)
        )
            throw RangeError(`${s} is not within ${r.join(", ")}`);
        return s;
    }
    return i;
}
