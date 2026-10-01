t.d(n, { $: () => r });
var i = t(518375);
function r(e, n, t, r, a, s) {
    let o = (0, i.W)(n, e, "string", r, void 0),
        u = "always";
    void 0 === o &&
        ("digital" === t
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (u = "auto"), (o = a))
            : ((u = "auto"), (o = "numeric" === s || "2-digit" === s ? "numeric" : t)));
    let l = `${e}Display`,
        d = (0, i.W)(n, l, "string", ["always", "auto"], u);
    if ("numeric" === s || "2-digit" === s) {
        if ("numeric" !== o && "2-digit" !== o) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (o = "2-digit"),
            "numeric" === o && "always" === d && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: o, display: d };
}
