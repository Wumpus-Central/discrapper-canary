t.d(e, { $: () => r });
var a = t(518375);
function r(n, e, t, r, i, s) {
    let u = (0, a.W)(e, n, "string", r, void 0),
        o = "always";
    void 0 === u &&
        ("digital" === t
            ? ("hours" !== n && "minutes" !== n && "seconds" !== n && (o = "auto"), (u = i))
            : ((o = "auto"), (u = "numeric" === s || "2-digit" === s ? "numeric" : t)));
    let d = `${n}Display`,
        l = (0, a.W)(e, d, "string", ["always", "auto"], o);
    if ("numeric" === s || "2-digit" === s) {
        if ("numeric" !== u && "2-digit" !== u) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === n || "seconds" === n) && (u = "2-digit"),
            "numeric" === u && "always" === l && ("milliseconds" === n || "microseconds" === n || "nanoseconds" === n))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: u, display: l };
}
