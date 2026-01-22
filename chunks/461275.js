n(896048), n(65821), n(747238), n(733351);
var r = n(118356);
n(506774);
let i = new r.Vy("useStateFromStores"),
    a = s();
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60000;
    return e;
}
let o = l();
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return e;
}
let c = u();
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1000;
    return e;
}
let d = f();
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e;
}
let p = h(),
    _ = null;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
}
p && (_ = setInterval(b, a));
let m = new Map();
function g(e) {
    return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > o);
}
function E() {
    for (let [e, t] of m) if (g(t)) return !0;
    return !1;
}
function b() {
    for (let [e, t] of (E() || "" !== d ? y() : i.log("No violators found"), m))
        (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
}
let y = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [a, s] of (i.log("|".padEnd(r, "-") + "|"),
    i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"),
    i.log("|".padEnd(r, "-") + "|"),
    i.log(
        "| ".concat("Function/Component Name".padEnd(e, " ")) +
            "| ".concat("Total Exec Time".padEnd(t, " ")) +
            "| ".concat("Total Exec Count".padEnd(n, " "), "|"),
    ),
    i.log("|".padEnd(r, "-") + "|"),
    m))
        (("" !== d && a === d) || g(s)) &&
            i.log(
                "| ".concat(a.padEnd(e, " ")) +
                    "| ".concat((s.execTime.toFixed(2) + "ms").padEnd(t, " ")) +
                    "| ".concat(s.execCount.toString().padEnd(n, " "), "|"),
            );
    i.log("|".padEnd(r, "-") + "|");
};
