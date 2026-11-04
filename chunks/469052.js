var r = n(978862),
    i = n(873326);
let o = null;
function a() {
    ((o = r.O.onerror),
        (r.O.onerror = function (e, t, n, r, a) {
            return (
                (0, i.aj)("error", { column: r, error: a, line: n, msg: e, url: t }), !!o && o.apply(this, arguments)
            );
        }),
        (r.O.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
n.d(
    t,
    {},
    {
        L: function (e) {
            let t = "error";
            ((0, i.s5)(t, e), (0, i.AS)(t, a));
        },
    },
);
