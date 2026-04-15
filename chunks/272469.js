"use strict";
n.d(t, { pq: () => l, vF: () => c });
var r = n(780755),
    i = n(978862);
let s = "Sentry Logger ",
    a = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    o = {};
function l(e) {
    if (!("console" in i.O)) return e();
    let t = i.O.console,
        n = {},
        r = Object.keys(o);
    r.forEach((e) => {
        let r = o[e];
        (n[e] = t[e]), (t[e] = r);
    });
    try {
        return e();
    } finally {
        r.forEach((e) => {
            t[e] = n[e];
        });
    }
}
function u() {
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
        r.T
            ? a.forEach((n) => {
                  t[n] = (...t) => {
                      e &&
                          l(() => {
                              i.O.console[n](`${s}[${n}]:`, ...t);
                          });
                  };
              })
            : a.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
}
let c = (0, i.B)("logger", u);
