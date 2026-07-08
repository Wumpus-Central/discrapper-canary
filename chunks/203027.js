"use strict";
r.d(t, { v: () => a });
var n = r(64700);
let i = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, t, i)),
                        r.forEach((r) => r(t, e));
                }
            },
            i = () => t,
            o = { setState: n, getState: i, getInitialState: () => a, subscribe: (e) => (r.add(e), () => r.delete(e)) },
            a = (t = e(n, i, o));
        return o;
    },
    o = (e) => {
        let t = e ? i(e) : i,
            r = (e) =>
                (function (e, t = (e) => e) {
                    let r = n.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState()),
                    );
                    return n.useDebugValue(r), r;
                })(t, e);
        return Object.assign(r, t), r;
    },
    a = (e) => (e ? o(e) : o);
