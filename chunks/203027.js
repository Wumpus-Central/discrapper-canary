"use strict";
r.d(t, { v: () => i });
var n = r(64700);
let a = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let a = "function" == typeof e ? e(t) : e;
                if (!Object.is(a, t)) {
                    let e = t;
                    (t = (null != n ? n : "object" != typeof a || null === a) ? a : Object.assign({}, t, a)),
                        r.forEach((r) => r(t, e));
                }
            },
            a = () => t,
            s = { setState: n, getState: a, getInitialState: () => i, subscribe: (e) => (r.add(e), () => r.delete(e)) },
            i = (t = e(n, a, s));
        return s;
    },
    s = (e) => {
        let t = e ? a(e) : a,
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
    i = (e) => (e ? s(e) : s);
