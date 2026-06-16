"use strict";
n.d(t, { A: () => a, q: () => o });
var i = n(64700),
    r = n(587895),
    s = n(360469);
function a(e) {
    return i.useMemo(() => o(e), [e]);
}
function o(e) {
    return (
        !(null != e && s.xW.includes(e ?? "")) ||
        r.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
