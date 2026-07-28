"use strict";
n.d(t, { j: () => s, x: () => a });
var i = n(582128),
    r = n(758445);
function a(e) {
    let { applicationId: t } = e;
    i.useEffect(() => {
        null != t && (0, r.l9)({ applicationId: t });
    }, [t]);
}
function s(e) {
    let { skuIds: t } = e;
    i.useEffect(() => {
        0 !== t.length && (0, r.N4)({ skuIds: t });
    }, [t]);
}
