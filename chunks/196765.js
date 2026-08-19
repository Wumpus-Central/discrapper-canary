"use strict";
n.d(t, { P: () => o, v: () => u });
var r = n(582128),
    i = n(976245);
let a = (e) => e;
function o(e, t = a) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        r.useCallback(() => t(e.getState()), [e, t]),
        r.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return r.useDebugValue(n), n;
}
let s = (e) => {
        let t = (0, i.y)(e),
            n = (e) => o(t, e);
        return Object.assign(n, t), n;
    },
    u = (e) => (e ? s(e) : s);
