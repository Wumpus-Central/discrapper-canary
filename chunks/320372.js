n.d(t, { h: () => o });
var r = n(606093),
    i = n(958209);
let a = null;
function o(e) {
    let t = "unhandledrejection";
    (0, i.Hj)(t, e), (0, i.D2)(t, _);
}
function _() {
    (a = r.n.onunhandledrejection),
        (r.n.onunhandledrejection = function (e) {
            return (0, i.rK)("unhandledrejection", e), !a || !!a.__SENTRY_LOADER__ || a.apply(this, arguments);
        }),
        (r.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
