"use strict";
n.d(t, { L: () => a });
var r = n(978862),
    i = n(873326);
let o = null;
function a(e) {
    let t = "error";
    (0, i.s5)(t, e), (0, i.AS)(t, s);
}
function s() {
    (o = r.O.onerror),
        (r.O.onerror = function (e, t, n, r, a) {
            return (
                (0, i.aj)("error", { column: r, error: a, line: n, msg: e, url: t }), !!o && o.apply(this, arguments)
            );
        }),
        (r.O.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
