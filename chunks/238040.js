"use strict";
n.d(t, { $v: () => u, JE: () => d, NQ: () => o, wB: () => l });
var r = n(121894);
let i = new WeakMap(),
    s = new Map(),
    a = new WeakMap();
function o(e, t, n) {
    i.set(t, e), s.set(e, n);
    let o = t.ownerDocument?.defaultView ?? window,
        l = a.get(o);
    return (
        null == l &&
            ((l = new o.ResizeObserver((e) => {
                (0, r.r)(() => {
                    for (let t of e) {
                        let e = t.target,
                            n = i.get(e);
                        if (null == n) continue;
                        let r = s.get(n);
                        null != r && r(t);
                    }
                });
            })),
            a.set(o, l)),
        l
    );
}
function l(e, t) {
    e.observe(t);
}
function u(e, t) {
    e.unobserve(t);
}
function d(e, t) {
    s.delete(e), null != t && i.delete(t);
}
