n.d(t, { V: () => o });
var r = n(606093),
    i = n(958209);
let a = null;
function o(e) {
    let t = "error";
    (0, i.Hj)(t, e), (0, i.D2)(t, _);
}
function _() {
    (a = r.n.onerror),
        (r.n.onerror = function (e, t, n, r, o) {
            return (
                (0, i.rK)("error", {
                    column: r,
                    error: o,
                    line: n,
                    msg: e,
                    url: t,
                }),
                !!a && !a.__SENTRY_LOADER__ && a.apply(this, arguments)
            );
        }),
        (r.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
