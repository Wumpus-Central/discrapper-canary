n.d(t, {
    pq: () => l,
    vF: () => u,
});
var r = n(919015),
    i = n(588522);
let a = "Sentry Logger ",
    s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
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

function c() {
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
            ? s.forEach((n) => {
                  t[n] = (...t) => {
                      e &&
                          l(() => {
                              i.O.console[n](`${a}[${n}]:`, ...t);
                          });
                  };
              })
            : s.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
}
let u = (0, i.B)("logger", c);
