a.d(e, { h: () => o });
var r = a(899517),
    _ = a(578346);
let n = null;
function o(t) {
    let e = 'unhandledrejection';
    (0, _.Hj)(e, t), (0, _.D2)(e, i);
}
function i() {
    (n = r.n.onunhandledrejection),
        (r.n.onunhandledrejection = function (t) {
            return (0, _.rK)('unhandledrejection', t), !n || !!n.__SENTRY_LOADER__ || n.apply(this, arguments);
        }),
        (r.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
