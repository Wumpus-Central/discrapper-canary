n.d(t, { Z: () => a });
var r = n(668781),
    i = n(194359),
    o = n(388032);
function a(e) {
    let t = () => {
        i.Z.clearPendingRelationships();
    };
    r.Z.show({
        title: o.intl.string(o.t.z2pFjo),
        body: o.intl.formatToPlainString(o.t["0nTvEx"], { incomingRequestCount: e }),
        confirmText: o.intl.string(o.t["cY+Ooa"]),
        confirmVariant: "critical-primary",
        cancelText: o.intl.string(o.t["ETE/oK"]),
        onConfirm: t,
    });
}
