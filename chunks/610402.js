var i,
    r =
        588245 == n.j
            ? (((i = {}).COMPLETED = "completed"), (i.CANCELLED = "cancelled"), (i.ERROR = "error"), i)
            : null;
function a(e) {
    let t = window.ReactNativeWebView;
    t?.postMessage(e);
}
n.d(
    t,
    {},
    {
        IA: r,
        Qk: function (e) {
            a(JSON.stringify({ eventType: "Verification.CaptureComplete", interviewId: e }));
        },
        fl: "__DISCORD_APPLY_INCODE_FALLBACK_SESSION__",
        q0: function (e) {
            a(JSON.stringify({ eventType: "Verification.Result", status: e }));
        },
        qm: function (e) {
            a(JSON.stringify({ eventType: "Verification.FallbackRequest", previousInterviewId: e }));
        },
        x2: function () {
            let e = window.__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__;
            if (null == e || "object" != typeof e) return null;
            let { schemaVersion: t, apiUrl: n, sessionToken: i, consentId: r, interviewId: a, theme: l, method: s } = e;
            return (null != t && 2 !== t) ||
                "string" != typeof n ||
                "string" != typeof i ||
                "string" != typeof r ||
                "string" != typeof a ||
                (null != l && "string" != typeof l)
                ? null
                : { apiUrl: n, sessionToken: i, consentId: r, interviewId: a, theme: l ?? null, method: s ?? null };
        },
    },
);
