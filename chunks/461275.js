"use strict";
var r = n(118356);
n(506774);
let i = new r.Vy("useStateFromStores"),
    s = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4;
        return e;
    })(),
    a = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        return e;
    })(),
    o = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return e;
    })(),
    l = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e;
    })();
(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
})() &&
    setInterval(function () {
        for (let [e, t] of ((function () {
            for (let [e, t] of u) if (c(t)) return !0;
            return !1;
        })() || "" !== l
            ? d()
            : i.log("No violators found"),
        u))
            (t.warned = !1), (t.execTime = 0), (t.execCount = 0);
    }, s);
let u = new Map();
function c(e) {
    return "anonymous" !== e.name && ("" === l || e.name === l) && (e.execCount > o || e.execTime > a);
}
let d = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 34,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e + t + n + 6;
    for (let [s, a] of (i.log("|".padEnd(r, "-") + "|"),
    i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"),
    i.log("|".padEnd(r, "-") + "|"),
    i.log(
        `| ${"Function/Component Name".padEnd(e, " ")}| ${"Total Exec Time".padEnd(t, " ")}| ${"Total Exec Count".padEnd(n, " ")}|`,
    ),
    i.log("|".padEnd(r, "-") + "|"),
    u))
        (("" !== l && s === l) || c(a)) &&
            i.log(
                `| ${s.padEnd(e, " ")}| ${(a.execTime.toFixed(2) + "ms").padEnd(t, " ")}| ${a.execCount.toString().padEnd(n, " ")}|`,
            );
    i.log("|".padEnd(r, "-") + "|");
};
