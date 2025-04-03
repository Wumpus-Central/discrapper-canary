s.d(e, {
    Cf: () => a,
    kg: () => c
});
var n = s(176984),
    i = s(899517);
let r = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
    o = {};
function a(t) {
    if (!('console' in i.n)) return t();
    let e = i.n.console,
        s = {},
        n = Object.keys(o);
    n.forEach((t) => {
        let n = o[t];
        (s[t] = e[t]), (e[t] = n);
    });
    try {
        return t();
    } finally {
        n.forEach((t) => {
            e[t] = s[t];
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
        n.X
            ? r.forEach((s) => {
                  e[s] = (...e) => {
                      t &&
                          a(() => {
                              i.n.console[s](`Sentry Logger [${s}]:`, ...e);
                          });
                  };
              })
            : r.forEach((t) => {
                  e[t] = () => void 0;
              }),
        e
    );
})();
