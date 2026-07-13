"use strict";
n.d(e, { pq: () => s, vF: () => c });
var r = n(780755),
    i = n(978862);
let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    a = {};
function s(t) {
    if (!("console" in i.O)) return t();
    let e = i.O.console,
        n = {},
        r = Object.keys(a);
    r.forEach((t) => {
        let r = a[t];
        (n[t] = e[t]), (e[t] = r);
    });
    try {
        return t();
    } finally {
        r.forEach((t) => {
            e[t] = n[t];
        });
    }
}
let c = (0, i.B)("logger", function () {
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
        r.T
            ? o.forEach((n) => {
                  e[n] = (...e) => {
                      t &&
                          s(() => {
                              i.O.console[n](`Sentry Logger [${n}]:`, ...e);
                          });
                  };
              })
            : o.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
});
