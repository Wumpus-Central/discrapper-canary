"use strict";
n.d(t, { T: () => a, e: () => i });
let r = new Map();
function i(e, t) {
    let n = r.get(e);
    return null == n && ((n = new Set()), r.set(e, n)), n.add(t), () => n?.delete(t);
}
function a(e, t, n) {
    let i = r.get(e);
    if (null != i) for (let e of i) e(t, n);
}
