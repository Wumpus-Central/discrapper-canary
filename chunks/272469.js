"use strict";
r.d(t, { pq: () => s, vF: () => l });
var n = r(780755),
    a = r(978862);
let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    i = {};
function s(e) {
    if (!("console" in a.O)) return e();
    let t = a.O.console,
        r = {},
        n = Object.keys(i);
    n.forEach((e) => {
        let n = i[e];
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
let l = (0, a.B)("logger", function () {
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
                              a.O.console[r](`Sentry Logger [${r}]:`, ...t);
                          });
                  };
              })
            : o.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
});
