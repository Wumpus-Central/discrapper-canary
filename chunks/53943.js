"use strict";
n.d(t, { As: () => c, IU: () => l, z8: () => o }), n(321073);
var r = n(677623),
    i = n.n(r);
let s = 5e3,
    a = new (i())(s);
function o(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let i = u(n);
    for (
        "string" == typeof e
            ? a.push({ time: Date.now(), category: e, message: i })
            : a.push({ time: Date.now(), category: e.name, timing: e.timing, message: i });
        a.length > s;
    )
        a.shift();
}
function l() {
    a.clear();
}
function u(e) {
    let t = "";
    for (let n of e) {
        let e = typeof n;
        "string" === e || "number" === e || "boolean" === e
            ? (t += n + " ")
            : n instanceof Error
              ? (t += n.message + "\n" + n.stack + " ")
              : (t += JSON.stringify(n) + " ");
    }
    return t;
}
function c(e) {
    return a
        .toArray()
        .filter((t) => null == e || e.includes(t.category))
        .map((e) => {
            let t = [];
            return (
                t.push(new Date(e.time).toISOString()),
                null != e.timing && t.push(e.timing),
                t.push(e.category, e.message),
                t.join(" -> ")
            );
        })
        .join("\n");
}
