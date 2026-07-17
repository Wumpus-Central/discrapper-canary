n.d(t, { IA: () => a, Qk: () => c, fl: () => r, q0: () => o, qm: () => u, x2: () => l });
let r = "__DISCORD_APPLY_INCODE_FALLBACK_SESSION__";
var i,
    a = 88245 == n.j ? (((i = {}).COMPLETED = "completed"), (i.CANCELLED = "cancelled"), (i.ERROR = "error"), i) : null;
function l() {
    let e = window.__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__;
    if (null == e || "object" != typeof e) return null;
    let { schemaVersion: t, apiUrl: n, sessionToken: r, consentId: i, interviewId: a, theme: l, method: s } = e;
    return (null != t && 2 !== t) ||
        "string" != typeof n ||
        "string" != typeof r ||
        "string" != typeof i ||
        "string" != typeof a ||
        (null != l && "string" != typeof l)
        ? null
        : { apiUrl: n, sessionToken: r, consentId: i, interviewId: a, theme: l ?? null, method: s ?? null };
}
function s(e) {
    let t = window.ReactNativeWebView;
    t?.postMessage(e);
}
function o(e) {
    s(JSON.stringify({ eventType: "Verification.Result", status: e }));
}
function c(e) {
    s(JSON.stringify({ eventType: "Verification.CaptureComplete", interviewId: e }));
}
function u(e) {
    s(JSON.stringify({ eventType: "Verification.FallbackRequest", previousInterviewId: e }));
}
