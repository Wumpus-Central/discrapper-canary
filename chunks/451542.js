r.d(t, { z: () => a });
var n = r(509440);
function a(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = (0, n.s3)(),
        r = e || (t && t.getOptions());
    return !!r && (r.enableTracing || "tracesSampleRate" in r || "tracesSampler" in r);
}
