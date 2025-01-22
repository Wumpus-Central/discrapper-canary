r.d(n, {
    U: function () {
        return u;
    }
});
var i = r(192379),
    a = r(5907);
let o = (e) => e;
function s(e, n = o) {
    let r = i.useSyncExternalStore(
        e.subscribe,
        () => n(e.getState()),
        () => n(e.getInitialState())
    );
    return i.useDebugValue(r), r;
}
let l = (e) => {
        let n = (0, a.M)(e),
            r = (e) => s(n, e);
        return Object.assign(r, n), r;
    },
    u = (e) => (e ? l(e) : l);
