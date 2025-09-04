n.d(t, { t: () => l });
var a = n(647438),
    r = n(812967);
function l(e, t) {
    return a.useSyncExternalStore(
        (e) => r.Z.listenIsSubscribed(e),
        () => null != e && r.Z.isSubscribed(e, t),
    );
}
