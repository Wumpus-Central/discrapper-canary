n.d(t, { A: () => s });
var r = n(157559),
    i = n(49229),
    a = n(985018);
function s(e) {
    let t = () => {
        i.A.clearPendingRelationships();
    };
    r.A.show({
        title: a.intl.string(a.t.z2pFjo),
        body: a.intl.formatToPlainString(a.t["0nTvEw"], { incomingRequestCount: e }),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        confirmVariant: "critical-primary",
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: t,
    });
}
