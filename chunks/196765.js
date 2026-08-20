"use strict";
r.d(t, { P: () => a, v: () => u });
var n = r(582128),
    i = r(976245);
let o = (e) => e;
function a(e, t = o) {
    let r = n.useSyncExternalStore(
        e.subscribe,
        n.useCallback(() => t(e.getState()), [e, t]),
        n.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return n.useDebugValue(r), r;
}
let s = (e) => {
        let t = (0, i.y)(e),
            r = (e) => a(t, e);
        return Object.assign(r, t), r;
    },
    u = (e) => (e ? s(e) : s);
