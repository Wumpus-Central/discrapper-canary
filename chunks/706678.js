n(388685), n(415506), n(35282), n(781311);
var r = n(579092);
n(433517);
let i = new r.Yd("useStateFromStores"),
    a = o();
function o() {
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
let p = m(),
    _ = null;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
}
p && (_ = setInterval(b, a));
let h = new Map();
function g(e) {
    return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > s);
}
function E() {
    for (let [e, t] of h) if (g(t)) return !0;
    return !1;
}
function b() {
    for (let [e, t] of (E() || "" !== d ? y() : i.log("No violators found"), h))
        (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
}
let y = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [a, o] of (i.log("|".padEnd(r, "-") + "|"),
    i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"),
    i.log("|".padEnd(r, "-") + "|"),
    i.log(
        "| ".concat("Function/Component Name".padEnd(e, " ")) +
            "| ".concat("Total Exec Time".padEnd(t, " ")) +
            "| ".concat("Total Exec Count".padEnd(n, " "), "|"),
    ),
    i.log("|".padEnd(r, "-") + "|"),
    h))
        (("" !== d && a === d) || g(o)) &&
            i.log(
                "| ".concat(a.padEnd(e, " ")) +
                    "| ".concat((o.execTime.toFixed(2) + "ms").padEnd(t, " ")) +
                    "| ".concat(o.execCount.toString().padEnd(n, " "), "|"),
            );
    i.log("|".padEnd(r, "-") + "|");
};
