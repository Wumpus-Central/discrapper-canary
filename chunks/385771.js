"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(17928),
    s = n(773669);
function a() {
    let e = (0, r.bG)([s.default], () => s.default.locale);
    return i.useMemo(
        () => new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
        [e],
    );
}
