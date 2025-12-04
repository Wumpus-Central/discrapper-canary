r.d(t, { V: () => o });
var n = r(606093),
    a = r(958209);
let i = null;
function o(e) {
    let t = "error";
    (0, a.Hj)(t, e), (0, a.D2)(t, _);
}
function _() {
    (i = n.n.onerror),
        (n.n.onerror = function (e, t, r, n, o) {
            return (
                (0, a.rK)("error", {
                    column: n,
                    error: o,
                    line: r,
                    msg: e,
                    url: t,
                }),
                !!i && !i.__SENTRY_LOADER__ && i.apply(this, arguments)
            );
        }),
        (n.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
