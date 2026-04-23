"use strict";
n.d(t, { A: () => a, q: () => o });
var r = n(64700),
    i = n(587895),
    s = n(360469);
function a(e) {
    return r.useMemo(() => o(e), [e]);
}
function o(e) {
    return (
        !(null != e && s.xW.includes(e ?? "")) ||
        i.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
