"use strict";
n.d(t, { $: () => i });
var r = n(518375);
function i(e, t, n, i, s, a) {
    let o = (0, r.W)(t, e, "string", i, void 0),
        l = "always";
    void 0 === o &&
        ("digital" === n
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (l = "auto"), (o = s))
            : ((l = "auto"), (o = "numeric" === a || "2-digit" === a ? "numeric" : n)));
    let u = `${e}Display`,
        c = (0, r.W)(t, u, "string", ["always", "auto"], l);
    if ("numeric" === a || "2-digit" === a) {
        if ("numeric" !== o && "2-digit" !== o) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (o = "2-digit"),
            "numeric" === o && "always" === c && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: o, display: c };
}
