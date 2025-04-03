a.d(e, {
    Cf: () => i,
    LD: () => o,
    RU: () => _,
    kg: () => c
});
var r = a(176984),
    n = a(899517);
let _ = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
    o = {};
function i(t) {
    if (!('console' in n.n)) return t();
    let e = n.n.console,
        a = {},
        r = Object.keys(o);
    r.forEach((t) => {
        let r = o[t];
        (a[t] = e[t]), (e[t] = r);
    });
    try {
        return t();
    } finally {
        r.forEach((t) => {
            e[t] = a[t];
        });
    }
}
let c = (function () {
    let t = !1,
        e = {
            enable: () => {
                t = !0;
            },
            disable: () => {
                t = !1;
            },
            isEnabled: () => t
        };
    return (
        r.X
            ? _.forEach((a) => {
                  e[a] = (...e) => {
                      t &&
                          i(() => {
                              n.n.console[a](`Sentry Logger [${a}]:`, ...e);
                          });
                  };
              })
            : _.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
})();
