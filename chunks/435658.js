"use strict";
n.d(t, { j: () => a, x: () => s });
var i = n(64700),
    r = n(894307);
function s(e) {
    let { applicationId: t } = e;
    i.useEffect(() => {
        null != t && (0, r.l9)({ applicationId: t });
    }, [t]);
}
function a(e) {
    let { skuIds: t } = e;
    i.useEffect(() => {
        0 !== t.length && (0, r.N4)({ skuIds: t });
    }, [t]);
}
