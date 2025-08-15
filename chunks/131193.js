n.d(t, {
    F: () => u,
    s: () => l,
});
var r = n(647438),
    i = n(922365),
    a = n(101186);
let { useSyncExternalStoreWithSelector: o } = i,
    s = (e) => e;
function l(e, t = s, n) {
    let i = o(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i;
}
let c = (e, t) => {
        let n = (0, a.M)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r;
    },
    u = (e, t) => (e ? c(e, t) : c);
