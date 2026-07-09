"use strict";
n.d(e, { pq: () => s, vF: () => l });
var i = n(780755),
    r = n(978862);
let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    a = {};
function s(t) {
    if (!("console" in r.O)) return t();
    let e = r.O.console,
        n = {},
        i = Object.keys(a);
    i.forEach((t) => {
        let i = a[t];
        (n[t] = e[t]), (e[t] = i);
    });
    try {
        return t();
    } finally {
        i.forEach((t) => {
            e[t] = n[t];
        });
    }
}
let l = (0, r.B)("logger", function () {
    let t = !1,
        e = {
            enable: () => {
                t = !0;
            },
            disable: () => {
                t = !1;
            },
            isEnabled: () => t,
        };
    return (
        i.T
            ? o.forEach((n) => {
                  e[n] = (...e) => {
                      t &&
                          s(() => {
                              r.O.console[n](`Sentry Logger [${n}]:`, ...e);
                          });
                  };
              })
            : o.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
});
