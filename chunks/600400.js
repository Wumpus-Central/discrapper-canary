n.d(t, { a: () => E });
var r = n(294181),
    i = n(320372),
    a = n(98076),
    o = n(4757),
    _ = n(82255),
    s = n(366000);
let c = !1;
function E() {
    c || ((c = !0), (0, r.V)(l), (0, i.h)(l));
}
function l() {
    let e = (0, _.HN)(),
        t = e && (0, _.Gx)(e);
    if (t) {
        let e = "internal_error";
        o.X && a.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
            t.setStatus({
                code: s.jt,
                message: e,
            });
    }
}
l.tag = "sentry_tracingErrorCallback";
