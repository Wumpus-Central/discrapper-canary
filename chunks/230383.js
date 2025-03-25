n.d(t, { U: () => l });
var r = n(192379),
    i = n(684233);
let o = (e) => e;
function a(e, t = o) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        () => t(e.getState()),
        () => t(e.getInitialState())
    );
    return r.useDebugValue(n), n;
}
let s = (e) => {
        let t = (0, i.M)(e),
            n = (e) => a(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? s(e) : s);
