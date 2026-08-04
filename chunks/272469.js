s.d(e, { pq: () => a, vF: () => c });
var i = s(780755),
    n = s(978862);
let r = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    o = {};
function a(t) {
    if (!("console" in n.O)) return t();
    let e = n.O.console,
        s = {},
        i = Object.keys(o);
    i.forEach((t) => {
        let i = o[t];
        (s[t] = e[t]), (e[t] = i);
    });
    try {
        return t();
    } finally {
        i.forEach((t) => {
            e[t] = s[t];
        });
    }
}
let c = (0, n.B)("logger", function () {
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
            ? r.forEach((s) => {
                  e[s] = (...e) => {
                      t &&
                          a(() => {
                              n.O.console[s](`Sentry Logger [${s}]:`, ...e);
                          });
                  };
              })
            : r.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
});
