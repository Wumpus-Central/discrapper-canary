"use strict";
var r = n(118356);
n(506774);
let i = new r.Vy("useStateFromStores"),
    a = s();
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4;
    return e;
}
let o = l();
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return e;
}
let u = c();
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
    return e;
}
let d = _();
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e;
}
let f = h(),
    p = null;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
}
f && (p = setInterval(A, a));
let m = new Map();
function g(e) {
    return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > u || e.execTime > o);
}
function E() {
    for (let [e, t] of m) if (g(t)) return !0;
    return !1;
}
function A() {
    for (let [e, t] of (E() || "" !== d ? I() : i.log("No violators found"), m))
        (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
}
let I = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [a, s] of (i.log("|".padEnd(r, "-") + "|"),
    i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"),
    i.log("|".padEnd(r, "-") + "|"),
    i.log(
        `| ${"Function/Component Name".padEnd(e, " ")}| ${"Total Exec Time".padEnd(t, " ")}| ${"Total Exec Count".padEnd(n, " ")}|`,
    ),
    i.log("|".padEnd(r, "-") + "|"),
    m))
        (("" !== d && a === d) || g(s)) &&
            i.log(
                `| ${a.padEnd(e, " ")}| ${(s.execTime.toFixed(2) + "ms").padEnd(t, " ")}| ${s.execCount.toString().padEnd(n, " ")}|`,
            );
    i.log("|".padEnd(r, "-") + "|");
};
