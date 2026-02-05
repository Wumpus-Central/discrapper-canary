"use strict";
n.d(t, { $v: () => c, JE: () => d, NQ: () => l, wB: () => u });
var r = n(121894);
let i = new WeakMap(),
    a = new Map(),
    s = new WeakMap();
function o(e) {
    return new e.ResizeObserver((e) => {
        (0, r.r)(() => {
            for (let t of e) {
                let e = t.target,
                    n = i.get(e);
                if (null == n) continue;
                let r = a.get(n);
                null != r && r(t);
            }
        });
    });
}
function l(e, t, n) {
    i.set(t, e), a.set(e, n);
    let r = t.ownerDocument?.defaultView ?? window,
        l = s.get(r);
    return null == l && ((l = o(r)), s.set(r, l)), l;
}
function u(e, t) {
    e.observe(t);
}
function c(e, t) {
    e.unobserve(t);
}
function d(e, t) {
    a.delete(e), null != t && i.delete(t);
}
