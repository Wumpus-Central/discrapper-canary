_.d(e, { R: () => i });
var a = _(263449),
    r = _(452896),
    n = _(163162);
let o = {
        replayIntegration: "replay",
        replayCanvasIntegration: "replay-canvas",
        feedbackIntegration: "feedback",
        feedbackModalIntegration: "feedback-modal",
        feedbackScreenshotIntegration: "feedback-screenshot",
        captureConsoleIntegration: "captureconsole",
        contextLinesIntegration: "contextlines",
        linkedErrorsIntegration: "linkederrors",
        debugIntegration: "debug",
        dedupeIntegration: "dedupe",
        extraErrorDataIntegration: "extraerrordata",
        httpClientIntegration: "httpclient",
        reportingObserverIntegration: "reportingobserver",
        rewriteFramesIntegration: "rewriteframes",
        sessionTimingIntegration: "sessiontiming",
        browserProfilingIntegration: "browserprofiling",
    },
    E = n.m9;
async function i(t) {
    let e = o[t],
        _ = (E.Sentry = E.Sentry || {});
    if (!e) throw Error(`Cannot lazy load integration: ${t}`);
    let i = _[t];
    if ("function" == typeof i) return i;
    let c = (function (t) {
            let e = (0, a.s3)(),
                _ = e && e.getOptions(),
                n = (_ && _.cdnBaseUrl) || "https://browser.sentry-cdn.com";
            return new URL(`/${r.J}/${t}.min.js`, n).toString();
        })(e),
        s = n.m9.document.createElement("script");
    (s.src = c), (s.crossOrigin = "anonymous"), (s.referrerPolicy = "origin");
    let l = new Promise((t, e) => {
        s.addEventListener("load", () => t()), s.addEventListener("error", e);
    });
    n.m9.document.body.appendChild(s);
    try {
        await l;
    } catch (e) {
        throw Error(`Error when loading integration: ${t}`);
    }
    let I = _[t];
    if ("function" != typeof I) throw Error(`Could not load integration: ${t}`);
    return I;
}
