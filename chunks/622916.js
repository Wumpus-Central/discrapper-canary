n.d(t, {
    Cf: () => l,
    kg: () => c
});
var r = n(176984),
    i = n(899517);
let o = 'Sentry Logger ',
    a = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
    s = {};
function l(e) {
    if (!('console' in i.n)) return e();
    let t = i.n.console,
        n = {},
        r = Object.keys(s);
    r.forEach((e) => {
        let r = s[e];
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
let c = (function () {
    let e = !1,
        t = {
            enable: () => {
                e = !0;
            },
            disable: () => {
                e = !1;
            },
            isEnabled: () => e
        };
    return (
        r.X
            ? a.forEach((n) => {
                  t[n] = (...t) => {
                      e &&
                          l(() => {
                              i.n.console[n](`${o}[${n}]:`, ...t);
                          });
                  };
              })
            : a.forEach((e) => {
                  t[e] = () => void 0;
              }),
        t
    );
})();
