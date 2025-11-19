_.d(e, { h: () => o });
var a = _(899517),
    r = _(578346);
let n = null;
function o(t) {
    let e = "unhandledrejection";
    (0, r.Hj)(e, t), (0, r.D2)(e, E);
}
function E() {
    (n = a.n.onunhandledrejection),
        (a.n.onunhandledrejection = function (t) {
            return (0, r.rK)("unhandledrejection", t), !n || !!n.__SENTRY_LOADER__ || n.apply(this, arguments);
        }),
        (a.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
