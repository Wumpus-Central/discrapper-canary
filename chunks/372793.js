n.d(t, {
    F: () => u,
    s: () => l
});
var r = n(192379),
    i = n(582180),
    o = n(684233);
let { useSyncExternalStoreWithSelector: a } = i,
    s = (e) => e;
function l(e, t = s, n) {
    let i = a(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i;
}
let c = (e, t) => {
        let n = (0, o.M)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r;
    },
    u = (e, t) => (e ? c(e, t) : c);
