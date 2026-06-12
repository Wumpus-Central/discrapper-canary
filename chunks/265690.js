"use strict";
n.d(t, { h: () => c, n: () => l });
var i = n(64700),
    r = n(179637),
    s = n(870844);
let { useSyncExternalStoreWithSelector: a } = r,
    o = (e) => e;
function l(e, t = o, n) {
    let r = a(e.subscribe, e.getState, e.getInitialState, t, n);
    return i.useDebugValue(r), r;
}
let u = (e, t) => {
        let n = (0, s.y)(e),
            i = (e, i = t) => l(n, e, i);
        return Object.assign(i, n), i;
    },
    c = (e, t) => (e ? u(e, t) : u);
