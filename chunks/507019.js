"use strict";
n.d(t, { A: () => a });
var r = n(157559),
    i = n(49229),
    s = n(985018);
function a(e) {
    r.A.show({
        title: s.intl.string(s.t.z2pFjo),
        body: s.intl.formatToPlainString(s.t["0nTvEw"], { incomingRequestCount: e }),
        confirmText: s.intl.string(s.t["cY+Oob"]),
        confirmVariant: "critical-primary",
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onConfirm: () => {
            i.A.clearPendingRelationships();
        },
    });
}
