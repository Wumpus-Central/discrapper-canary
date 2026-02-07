"use strict";
r.d(e, { pq: () => a, vF: () => c });
var n = r(919015),
    i = r(588522);
let s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    o = {};
function a(t) {
    if (!("console" in i.O)) return t();
    let e = i.O.console,
        r = {},
        n = Object.keys(o);
    n.forEach((t) => {
        let n = o[t];
        (r[t] = e[t]), (e[t] = n);
    });
    try {
        return t();
    } finally {
        n.forEach((t) => {
            e[t] = r[t];
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
        n.T
            ? s.forEach((r) => {
                  e[r] = (...e) => {
                      t &&
                          a(() => {
                              i.O.console[r](`Sentry Logger [${r}]:`, ...e);
                          });
                  };
              })
            : s.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
});
