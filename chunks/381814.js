n.d(t, { U: () => l });
var r = n(73800),
    i = n(648820);
let a = (e) => e;
function o(e, t = a) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        () => t(e.getState()),
        () => t(e.getInitialState())
    );
    return r.useDebugValue(n), n;
}
let s = (e) => {
        let t = (0, i.M)(e),
            n = (e) => o(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? s(e) : s);
