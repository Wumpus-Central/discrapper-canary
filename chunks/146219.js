n.d(t, { t: () => a });
var r = n(473749),
    i = n(812967);
function a(e, t) {
    return r.useSyncExternalStore(
        (e) => i.Z.listenIsSubscribed(e),
        () => null != e && i.Z.isSubscribed(e, t),
    );
}
