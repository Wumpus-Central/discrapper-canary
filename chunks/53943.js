"use strict";
n.d(t, { As: () => o, IU: () => a, z8: () => s }), n(321073);
var i = n(677623);
let r = new (n.n(i)())(5e3);
function s(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    let s = (function (e) {
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
    })(n);
    for (
        "string" == typeof e
            ? r.push({ time: Date.now(), category: e, message: s })
            : r.push({ time: Date.now(), category: e.name, timing: e.timing, message: s });
        r.length > 5e3;
    )
        r.shift();
}
function a() {
    r.clear();
}
function o(e) {
    return r
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
