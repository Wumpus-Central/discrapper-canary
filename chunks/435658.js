"use strict";
n.d(t, { j: () => r, x: () => s });
var l = n(582128),
    i = n(758445);
function s(e) {
    let { applicationId: t } = e;
    l.useEffect(() => {
        null != t && (0, i.l9)({ applicationId: t });
    }, [t]);
}
function r(e) {
    let { skuIds: t } = e;
    l.useEffect(() => {
        0 !== t.length && (0, i.N4)({ skuIds: t });
    }, [t]);
}
