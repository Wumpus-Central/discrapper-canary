t.d(n, { W: () => r });
var i = t(120330);
function r(e, n, t, r, a) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let s = e[n];
    if (void 0 !== s) {
        if ("boolean" !== t && "string" !== t) throw TypeError("invalid type");
        if (
            ("boolean" === t && (s = !!s),
            "string" === t && (s = (0, i.bf)(s)),
            void 0 !== r && !r.filter((e) => e == s).length)
        )
            throw RangeError(`${s} is not within ${r.join(", ")}`);
        return s;
    }
    return a;
}
