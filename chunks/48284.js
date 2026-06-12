"use strict";
n.d(t, { b: () => r });
var i = n(985620);
function r(e, t) {
    let { id: n, "aria-label": r, "aria-labelledby": s } = e;
    return (
        (n = (0, i.Bi)(n)),
        s && r
            ? (s = [...new Set([n, ...s.trim().split(/\s+/)])].join(" "))
            : s && (s = s.trim().split(/\s+/).join(" ")),
        r || s || !t || (r = t),
        { id: n, "aria-label": r, "aria-labelledby": s }
    );
}
