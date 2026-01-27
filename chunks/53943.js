r.d(e, {
    z8: () => a,
}),
    r(321073),
    r(65821),
    r(457529),
    r(896048),
    r(264879);
var n = r(677623);
let i = new (r.n(n)())(5e3);

function a(t) {
    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    let a = (function (t) {
        let e = "";
        for (let r of t) {
            let t = typeof r;
            "string" === t || "number" === t || "boolean" === t
                ? (e += r + " ")
                : r instanceof Error
                  ? (e += r.message + "\n" + r.stack + " ")
                  : (e += JSON.stringify(r) + " ");
        }
        return e;
    })(r);
    for (
        "string" == typeof t
            ? i.push({
                  time: Date.now(),
                  category: t,
                  message: a,
              })
            : i.push({
                  time: Date.now(),
                  category: t.name,
                  timing: t.timing,
                  message: a,
              });
        i.length > 5e3;
    )
        i.shift();
}
