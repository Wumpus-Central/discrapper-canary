"use strict";
function r(e, t) {
    let n = t?.replace(/-/g, "_")?.toUpperCase();
    if (null != n && n in e) return e[n];
}
n.d(t, { A: () => r });
