_.d(e, { z: () => r });
var a = _(263449);
function r(t) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let e =
        t ||
        (function () {
            let t = (0, a.s3)();
            return t && t.getOptions();
        })();
    return !!e && (e.enableTracing || "tracesSampleRate" in e || "tracesSampler" in e);
}
