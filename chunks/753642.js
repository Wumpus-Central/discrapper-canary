r.d(t, { h: () => o });
var n = r(899517),
    a = r(578346);
let i = null;
function o(e) {
    let t = "unhandledrejection";
    (0, a.Hj)(t, e), (0, a.D2)(t, _);
}
function _() {
    (i = n.n.onunhandledrejection),
        (n.n.onunhandledrejection = function (e) {
            return (0, a.rK)("unhandledrejection", e), !i || !!i.__SENTRY_LOADER__ || i.apply(this, arguments);
        }),
        (n.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
