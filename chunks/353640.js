"use strict";
n.d(t, { P: () => s, v: () => l });
var r = n(64700),
    i = n(870844);
let a = (e) => e;
function s(e, t = a) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        r.useCallback(() => t(e.getState()), [e, t]),
        r.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return r.useDebugValue(n), n;
}
let o = (e) => {
        let t = (0, i.y)(e),
            n = (e) => s(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? o(e) : o);
