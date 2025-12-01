r.d(t, { R: () => s });
var n = r(263449),
    a = r(452896),
    i = r(163162);
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
    _ = i.m9;
async function s(e) {
    let t = o[e],
        r = (_.Sentry = _.Sentry || {});
    if (!t) throw Error(`Cannot lazy load integration: ${e}`);
    let s = r[e];
    if ("function" == typeof s) return s;
    let c = (function (e) {
            let t = (0, n.s3)(),
                r = t && t.getOptions(),
                i = (r && r.cdnBaseUrl) || "https://browser.sentry-cdn.com";
            return new URL(`/${a.J}/${e}.min.js`, i).toString();
        })(t),
        E = i.m9.document.createElement("script");
    (E.src = c), (E.crossOrigin = "anonymous"), (E.referrerPolicy = "origin");
    let l = new Promise((e, t) => {
        E.addEventListener("load", () => e()), E.addEventListener("error", t);
    });
    i.m9.document.body.appendChild(E);
    try {
        await l;
    } catch (t) {
        throw Error(`Error when loading integration: ${e}`);
    }
    let u = r[e];
    if ("function" != typeof u) throw Error(`Could not load integration: ${e}`);
    return u;
}
