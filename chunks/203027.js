"use strict";
r.d(t, { v: () => o });
var n = r(64700);
let s = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let s = "function" == typeof e ? e(t) : e;
                if (!Object.is(s, t)) {
                    let e = t;
                    (t = (null != n ? n : "object" != typeof s || null === s) ? s : Object.assign({}, t, s)),
                        r.forEach((r) => r(t, e));
                }
            },
            s = () => t,
            a = { setState: n, getState: s, getInitialState: () => o, subscribe: (e) => (r.add(e), () => r.delete(e)) },
            o = (t = e(n, s, a));
        return a;
    },
    a = (e) => {
        let t = e ? s(e) : s,
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
    o = (e) => (e ? a(e) : a);
