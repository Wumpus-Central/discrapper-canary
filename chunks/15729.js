n.d(t, { U: () => l });
var i = n(192379),
    r = n(5907);
let a = (e) => e;
function s(e, t = a) {
    let n = i.useSyncExternalStore(
        e.subscribe,
        () => t(e.getState()),
        () => t(e.getInitialState())
    );
    return i.useDebugValue(n), n;
}
let o = (e) => {
        let t = (0, r.M)(e),
            n = (e) => s(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? o(e) : o);
