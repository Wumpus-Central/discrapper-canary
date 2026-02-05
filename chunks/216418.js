"use strict";
n.d(t, { A: () => s, q: () => o });
var r = n(64700),
    i = n(587895),
    a = n(360469);
function s(e) {
    return r.useMemo(() => o(e), [e]);
}
function o(e) {
    return (
        !(null != e && a.xW.includes(e ?? "")) ||
        i.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
