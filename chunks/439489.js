"use strict";
n.d(t, { $: () => i });
var r = n(518375);
function i(e, t, n, i, a, o) {
    let u = (0, r.W)(t, e, "string", i, void 0),
        s = "always";
    void 0 === u &&
        ("digital" === n
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (s = "auto"), (u = a))
            : ((s = "auto"), (u = "numeric" === o || "2-digit" === o ? "numeric" : n)));
    let l = `${e}Display`,
        d = (0, r.W)(t, l, "string", ["always", "auto"], s);
    if ("numeric" === o || "2-digit" === o) {
        if ("numeric" !== u && "2-digit" !== u) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (u = "2-digit"),
            "numeric" === u && "always" === d && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: u, display: d };
}
