n(388685), n(415506), n(35282), n(781311);
var r = n(579092);
n(433517);
let i = new r.Yd("useStateFromStores"),
    o = a();
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60000;
    return e;
}
let s = l();
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
let _ = h(),
    p = null;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
}
_ && (p = setInterval(b, o));
let m = new Map();
function g(e) {
    return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > s);
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
    for (let [o, a] of (i.log("|".padEnd(r, "-") + "|"),
    i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"),
    i.log("|".padEnd(r, "-") + "|"),
    i.log(
        "| ".concat("Function/Component Name".padEnd(e, " ")) +
            "| ".concat("Total Exec Time".padEnd(t, " ")) +
            "| ".concat("Total Exec Count".padEnd(n, " "), "|"),
    ),
    i.log("|".padEnd(r, "-") + "|"),
    m))
        (("" !== d && o === d) || g(a)) &&
            i.log(
                "| ".concat(o.padEnd(e, " ")) +
                    "| ".concat((a.execTime.toFixed(2) + "ms").padEnd(t, " ")) +
                    "| ".concat(a.execCount.toString().padEnd(n, " "), "|"),
            );
    i.log("|".padEnd(r, "-") + "|");
};
