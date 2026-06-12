"use strict";
n.d(t, { A: () => r, v: () => s }), n(321073);
let i = {};
function r(e, t, n) {
    let { shouldWarnLargeObjects: r, logCallback: s } =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i;
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let a = Object.keys(e),
        o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (let i = 0; i < a.length; i++) {
        let r = a[i];
        if (e[r] !== t[r] && (null == n || !n.includes(r))) return !1;
    }
    return !0;
}
function s(e, t) {
    let { logCallback: n, shouldWarnLargeObjects: r } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
    return null != t && e.length === t.length && e.every((e, n) => t[n] === e);
}
