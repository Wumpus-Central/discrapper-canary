a.d(e, { h: () => o });
var r = a(899517),
    n = a(578346);
let _ = null;
function o(t) {
    let e = 'unhandledrejection';
    (0, n.Hj)(e, t), (0, n.D2)(e, i);
}
function i() {
    (_ = r.n.onunhandledrejection),
        (r.n.onunhandledrejection = function (t) {
            return (0, n.rK)('unhandledrejection', t), !_ || !!_.__SENTRY_LOADER__ || _.apply(this, arguments);
        }),
        (r.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
