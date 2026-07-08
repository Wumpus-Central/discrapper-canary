t.d(n, { W: () => r });
var a = t(120330);
function r(e, n, t, r, i) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let u = e[n];
    if (void 0 !== u) {
        if ("boolean" !== t && "string" !== t) throw TypeError("invalid type");
        if (
            ("boolean" === t && (u = !!u),
            "string" === t && (u = (0, a.bf)(u)),
            void 0 !== r && !r.filter((e) => e == u).length)
        )
            throw RangeError(`${u} is not within ${r.join(", ")}`);
        return u;
    }
    return i;
}
