"use strict";
n.d(t, { $: () => i });
var r = n(518375);
function i(e, t, n, i, a, u) {
    let o = (0, r.W)(t, e, "string", i, void 0),
        s = "always";
    void 0 === o &&
        ("digital" === n
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (s = "auto"), (o = a))
            : ((s = "auto"), (o = "numeric" === u || "2-digit" === u ? "numeric" : n)));
    let l = `${e}Display`,
        d = (0, r.W)(t, l, "string", ["always", "auto"], s);
    if ("numeric" === u || "2-digit" === u) {
        if ("numeric" !== o && "2-digit" !== o) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (o = "2-digit"),
            "numeric" === o && "always" === d && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: o, display: d };
}
