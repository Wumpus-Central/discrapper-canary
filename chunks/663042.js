n.d(t, {
    U: () => l,
    o: () => o,
});
var r = n(473749),
    i = n(343203);
let a = (e) => e;
function o(e, t = a) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        r.useCallback(() => t(e.getState()), [e, t]),
        r.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return r.useDebugValue(n), n;
}
let s = (e) => {
        let t = (0, i.M)(e),
            n = (e) => o(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? s(e) : s);
