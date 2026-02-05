"use strict";
function r(e, t) {
    return `${e}:${t}`;
}
function i(e) {
    let t = e.split(":");
    if (2 !== t.length) return null;
    let [n, r] = t;
    return { applicationId: n, skuId: r };
}
n.d(t, { L: () => r, u: () => i });
