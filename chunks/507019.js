n.d(t, { A: () => s });
var i = n(157559),
    r = n(717398),
    a = n(375708);
function s(e) {
    i.A.show({
        title: a.intl.string(a.t.z2pFjo),
        body: a.intl.formatToPlainString(a.t["0nTvEw"], { incomingRequestCount: e }),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        confirmVariant: "critical-primary",
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: function () {
            r.A.clearPendingRelationships();
        },
    });
}
