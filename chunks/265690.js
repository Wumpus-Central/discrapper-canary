"use strict";
n.d(t, { h: () => c, n: () => l });
var r = n(64700),
    i = n(179637),
    a = n(870844);
let { useSyncExternalStoreWithSelector: s } = i,
    o = (e) => e;
function l(e, t = o, n) {
    let i = s(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i;
}
let u = (e, t) => {
        let n = (0, a.y)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r;
    },
    c = (e, t) => (e ? u(e, t) : u);
