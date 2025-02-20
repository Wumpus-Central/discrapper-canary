a.d(e, { h: () => _ });
var r = a(899517),
    n = a(578346);
let o = null;
function _(t) {
    let e = 'unhandledrejection';
    (0, n.Hj)(e, t), (0, n.D2)(e, i);
}
function i() {
    (o = r.n.onunhandledrejection),
        (r.n.onunhandledrejection = function (t) {
            return (0, n.rK)('unhandledrejection', t), !o || !!o.__SENTRY_LOADER__ || o.apply(this, arguments);
        }),
        (r.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
