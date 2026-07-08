t.d(n, { $: () => r });
var a = t(518375);
function r(e, n, t, r, i, u) {
    let s = (0, a.W)(n, e, "string", r, void 0),
        o = "always";
    void 0 === s &&
        ("digital" === t
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (o = "auto"), (s = i))
            : ((o = "auto"), (s = "numeric" === u || "2-digit" === u ? "numeric" : t)));
    let l = `${e}Display`,
        d = (0, a.W)(n, l, "string", ["always", "auto"], o);
    if ("numeric" === u || "2-digit" === u) {
        if ("numeric" !== s && "2-digit" !== s) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (s = "2-digit"),
            "numeric" === s && "always" === d && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: s, display: d };
}
