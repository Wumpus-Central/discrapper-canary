r.d(t, { pq: () => s, vF: () => d });
var n = r(780755),
    i = r(978862);
let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    a = {};
function s(e) {
    if (!("console" in i.O)) return e();
    let t = i.O.console,
        r = {},
        n = Object.keys(a);
    n.forEach((e) => {
        let n = a[e];
        (r[e] = t[e]), (t[e] = n);
    });
    try {
        return e();
    } finally {
        n.forEach((e) => {
            t[e] = r[e];
        });
    }
}
let d = (0, i.B)("logger", function () {
    let e = !1,
        t = {
            enable: () => {
                e = !0;
            },
            disable: () => {
                e = !1;
            },
            isEnabled: () => e,
        };
    return (
        n.T
            ? o.forEach((r) => {
                  t[r] = (...t) => {
                      e &&
                          s(() => {
                              i.O.console[r](`Sentry Logger [${r}]:`, ...t);
                          });
                  };
              })
            : o.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
});
