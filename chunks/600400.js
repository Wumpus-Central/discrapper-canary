r.d(t, { a: () => E });
var n = r(294181),
    a = r(320372),
    i = r(98076),
    o = r(4757),
    _ = r(82255),
    s = r(366000);
let c = !1;
function E() {
    c || ((c = !0), (0, n.V)(l), (0, a.h)(l));
}
function l() {
    let e = (0, _.HN)(),
        t = e && (0, _.Gx)(e);
    if (t) {
        let e = "internal_error";
        o.X && i.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
            t.setStatus({
                code: s.jt,
                message: e,
            });
    }
}
l.tag = "sentry_tracingErrorCallback";
