n.d(t, {
    As: () => u,
    IU: () => l,
    z8: () => o,
}),
    n(321073),
    n(65821),
    n(457529),
    n(896048),
    n(264879);
var r = n(677623),
    i = n.n(r);
let a = 5000,
    s = new (i())(a);
function o(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let i = c(n);
    for (
        "string" == typeof e
            ? s.push({
                  time: Date.now(),
                  category: e,
                  message: i,
              })
            : s.push({
                  time: Date.now(),
                  category: e.name,
                  timing: e.timing,
                  message: i,
              });
        s.length > a;
    )
        s.shift();
}
function l() {
    s.clear();
}
function c(e) {
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
function u(e) {
    return s
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
