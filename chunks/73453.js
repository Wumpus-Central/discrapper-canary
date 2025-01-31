a.d(e, { z: () => n });
var r = a(263449);
function n(t) {
    if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let e =
        t ||
        (function () {
            let t = (0, r.s3)();
            return t && t.getOptions();
        })();
    return !!e && (e.enableTracing || 'tracesSampleRate' in e || 'tracesSampler' in e);
}
