"use strict";
r.d(e, { Qd: () => i, Qg: () => s });
let n = Object.prototype.toString;
function i(t) {
    return "[object Object]" === n.call(t);
}
function s(t) {
    return !!(t && t.then && "function" == typeof t.then);
}
