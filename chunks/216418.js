"use strict";
n.d(t, { A: () => s, q: () => l });
var i = n(582128),
    r = n(587895),
    a = n(360469);
function s(e) {
    return i.useMemo(() => l(e), [e]);
}
function l(e) {
    return (
        !(null != e && a.xW.includes(e ?? "")) ||
        r.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
}
