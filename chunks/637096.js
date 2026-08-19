"use strict";
r.d(t, { b: () => o });
var n = r(709157);
function o(e, t) {
    let { id: r, "aria-label": o, "aria-labelledby": i } = e;
    return (
        (r = (0, n.Bi)(r)),
        i && o
            ? (i = [...new Set([r, ...i.trim().split(/\s+/)])].join(" "))
            : i && (i = i.trim().split(/\s+/).join(" ")),
        o || i || !t || (o = t),
        { id: r, "aria-label": o, "aria-labelledby": i }
    );
}
