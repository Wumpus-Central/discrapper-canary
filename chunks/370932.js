"use strict";
n.d(t, { w: () => i });
var r = n(630449);
function i(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = (0, r.KU)(),
        n = e || (t && t.getOptions());
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
}
