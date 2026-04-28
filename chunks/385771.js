"use strict";
n.d(t, { A: () => a });
var l = n(64700),
    i = n(17928),
    s = n(773669);
function a() {
    let e = (0, i.bG)([s.default], () => s.default.locale);
    return l.useMemo(
        () => new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
        [e],
    );
}
