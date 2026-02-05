"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(311907),
    a = n(773669);
function s() {
    let e = (0, i.bG)([a.default], () => a.default.locale);
    return r.useMemo(
        () => new Intl.NumberFormat(e, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
        [e],
    );
}
