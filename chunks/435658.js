"use strict";
n.d(t, { j: () => a, x: () => s });
var r = n(64700),
    i = n(828596);
function s(e) {
    let { applicationId: t, location: n } = e;
    r.useEffect(() => {
        null != t && (0, i.l9)({ applicationId: t, location: n });
    }, [t, n]);
}
function a(e) {
    let { skuIds: t, location: n } = e;
    r.useEffect(() => {
        0 !== t.length && (0, i.N4)({ skuIds: t, location: n });
    }, [t, n]);
}
