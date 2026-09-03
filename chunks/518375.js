n.d(t, { W: () => i });
var r = n(120330);
function i(e, t, n, i, a) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let o = e[t];
    if (void 0 !== o) {
        if ("boolean" !== n && "string" !== n) throw TypeError("invalid type");
        if (
            ("boolean" === n && (o = !!o),
            "string" === n && (o = (0, r.bf)(o)),
            void 0 !== i && !i.filter((e) => e == o).length)
        )
            throw RangeError(`${o} is not within ${i.join(", ")}`);
        return o;
    }
    return a;
}
