n.d(t, { r: () => a });
var r = n(978862),
    i = n(873326);
let o = null;
function a(e) {
    let t = "unhandledrejection";
    (0, i.s5)(t, e), (0, i.AS)(t, s);
}
function s() {
    (o = r.O.onunhandledrejection),
        (r.O.onunhandledrejection = function (e) {
            return (0, i.aj)("unhandledrejection", e), !o || o.apply(this, arguments);
        }),
        (r.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
