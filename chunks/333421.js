"use strict";
n.d(t, { AG: () => s, my: () => i, uJ: () => r });
let l = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function i(e) {
    return l.test(e);
}
function s(e) {
    let t = e.match(l);
    return null == t || null == t[1] ? null : t[1];
}
function r(e) {
    let t = e.match(l);
    return null == t ? null : (t[3] ?? null);
}
