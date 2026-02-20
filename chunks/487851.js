"use strict";
function r(e, t, n = 2) {
    if (!t || "object" != typeof t || n <= 0) return t;
    if (e && t && 0 === Object.keys(t).length) return e;
    let i = { ...e };
    for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = r(i[e], t[e], n - 1));
    return i;
}
n.d(t, { h: () => r });
