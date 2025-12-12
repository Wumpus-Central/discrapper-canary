n.d(t, { z: () => i });
var r = n(509440);
function i(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = (0, r.s3)(),
        n = e || (t && t.getOptions());
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
}
