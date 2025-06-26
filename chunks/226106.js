n.d(t, { Z: () => o });
var r = n(668781),
    i = n(194359),
    a = n(388032);
function o(e) {
    let t = () => {
        i.Z.clearPendingRelationships();
    };
    r.Z.show({
        title: a.intl.string(a.t.z2pFjo),
        body: a.intl.formatToPlainString(a.t['0nTvEx'], { incomingRequestCount: e }),
        confirmText: a.intl.string(a.t['cY+Ooa']),
        confirmVariant: 'critical-primary',
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: t
    });
}
