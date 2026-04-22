"use strict";
n.d(t, { A: () => i, v: () => s }), n(321073);
let r = {};
function i(e, t, n) {
    let { shouldWarnLargeObjects: i, logCallback: s } =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r;
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let a = Object.keys(e),
        o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (let r = 0; r < a.length; r++) {
        let i = a[r];
        if (e[i] !== t[i] && (null == n || !n.includes(i))) return !1;
    }
    return !0;
}
function s(e, t) {
    let { logCallback: n, shouldWarnLargeObjects: i } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    return null != t && e.length === t.length && e.every((e, n) => t[n] === e);
}
