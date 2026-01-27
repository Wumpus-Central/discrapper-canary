r.d(e, {
    pq: () => a,
    vF: () => c,
});
var n = r(919015),
    s = r(588522);
let i = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    o = {};

function a(t) {
    if (!("console" in s.O)) return t();
    let e = s.O.console,
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
let c = (0, s.B)("logger", function () {
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
            ? i.forEach((r) => {
                  e[r] = (...e) => {
                      t &&
                          a(() => {
                              s.O.console[r](`Sentry Logger [${r}]:`, ...e);
                          });
                  };
              })
            : i.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
});
