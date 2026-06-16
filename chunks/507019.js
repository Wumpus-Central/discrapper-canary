"use strict";
n.d(t, { A: () => a });
var i = n(157559),
    r = n(717398),
    s = n(375708);
function a(e) {
    i.A.show({
        title: s.intl.string(s.t.z2pFjo),
        body: s.intl.formatToPlainString(s.t["0nTvEw"], { incomingRequestCount: e }),
        confirmText: s.intl.string(s.t["cY+Oob"]),
        confirmVariant: "critical-primary",
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onConfirm: () => {
            r.A.clearPendingRelationships();
        },
    });
}
