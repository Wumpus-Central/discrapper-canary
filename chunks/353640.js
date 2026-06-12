"use strict";
n.d(t, { P: () => a, v: () => l });
var i = n(64700),
    r = n(870844);
let s = (e) => e;
function a(e, t = s) {
    let n = i.useSyncExternalStore(
        e.subscribe,
        i.useCallback(() => t(e.getState()), [e, t]),
        i.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return i.useDebugValue(n), n;
}
let o = (e) => {
        let t = (0, r.y)(e),
            n = (e) => a(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? o(e) : o);
