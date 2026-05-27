"use strict";
n.d(t, { pq: () => o, vF: () => l });
var i = n(780755),
    r = n(978862);
let s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    a = {};
function o(e) {
    if (!("console" in r.O)) return e();
    let t = r.O.console,
        n = {},
        i = Object.keys(a);
    i.forEach((e) => {
        let i = a[e];
        (n[e] = t[e]), (t[e] = i);
    });
    try {
        return e();
    } finally {
        i.forEach((e) => {
            t[e] = n[e];
        });
    }
}
let l = (0, r.B)("logger", function () {
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
        i.T
            ? s.forEach((n) => {
                  t[n] = (...t) => {
                      e &&
                          o(() => {
                              r.O.console[n](`Sentry Logger [${n}]:`, ...t);
                          });
                  };
              })
            : s.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
});
