r.d(t, { z: () => a });
var n = r(263449);
function a(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t =
        e ||
        (function () {
            let e = (0, n.s3)();
            return e && e.getOptions();
        })();
    return !!t && (t.enableTracing || "tracesSampleRate" in t || "tracesSampler" in t);
}
