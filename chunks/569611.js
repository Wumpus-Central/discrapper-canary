r.d(e, { Hj: () => a }), r(539854), r(415506), r(49124), r(388685), r(583741);
var n = r(427786);
let i = new (r.n(n)())(5000);
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
        i.length > 5000;
    )
        i.shift();
}
