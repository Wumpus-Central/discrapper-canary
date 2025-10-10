n.d(t, { t: () => s });
var i = n(647438),
    r = n(812967);
function s(e, t) {
    return i.useSyncExternalStore(
        (e) => r.Z.listenIsSubscribed(e),
        () => null != e && r.Z.isSubscribed(e, t),
    );
}
