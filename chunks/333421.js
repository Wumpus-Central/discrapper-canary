"use strict";
n.d(t, { AG: () => s, my: () => i, uJ: () => a });
let r = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function i(e) {
    return r.test(e);
}
function s(e) {
    let t = e.match(r);
    return null == t || null == t[1] ? null : t[1];
}
function a(e) {
    let t = e.match(r);
    return null == t ? null : (t[3] ?? null);
}
