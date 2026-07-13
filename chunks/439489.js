"use strict";
r.d(t, { $: () => i });
var n = r(518375);
function i(e, t, r, i, o, a) {
    let s = (0, n.W)(t, e, "string", i, void 0),
        l = "always";
    void 0 === s &&
        ("digital" === r
            ? ("hours" !== e && "minutes" !== e && "seconds" !== e && (l = "auto"), (s = o))
            : ((l = "auto"), (s = "numeric" === a || "2-digit" === a ? "numeric" : r)));
    let u = `${e}Display`,
        c = (0, n.W)(t, u, "string", ["always", "auto"], l);
    if ("numeric" === a || "2-digit" === a) {
        if ("numeric" !== s && "2-digit" !== s) throw RangeError("Can't mix numeric and non-numeric styles");
        if (
            (("minutes" === e || "seconds" === e) && (s = "2-digit"),
            "numeric" === s && "always" === c && ("milliseconds" === e || "microseconds" === e || "nanoseconds" === e))
        )
            throw RangeError("Can't display milliseconds, microseconds, or nanoseconds in numeric format");
    }
    return { style: s, display: c };
}
