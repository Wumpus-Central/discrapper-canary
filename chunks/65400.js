n.d(t, {
    F: () => c,
    s: () => l
});
var i = n(192379),
    r = n(584171),
    a = n(5907);
let { useSyncExternalStoreWithSelector: s } = r,
    o = (e) => e;
function l(e, t = o, n) {
    let r = s(e.subscribe, e.getState, e.getInitialState, t, n);
    return i.useDebugValue(r), r;
}
let u = (e, t) => {
        let n = (0, a.M)(e),
            i = (e, i = t) => l(n, e, i);
        return Object.assign(i, n), i;
    },
    c = (e, t) => (e ? u(e, t) : u);
