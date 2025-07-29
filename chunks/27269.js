a.d(e, { R: () => c });
var r = a(263449),
    _ = a(452896),
    n = a(163162);
let o = {
        replayIntegration: 'replay',
        replayCanvasIntegration: 'replay-canvas',
        feedbackIntegration: 'feedback',
        feedbackModalIntegration: 'feedback-modal',
        feedbackScreenshotIntegration: 'feedback-screenshot',
        captureConsoleIntegration: 'captureconsole',
        contextLinesIntegration: 'contextlines',
        linkedErrorsIntegration: 'linkederrors',
        debugIntegration: 'debug',
        dedupeIntegration: 'dedupe',
        extraErrorDataIntegration: 'extraerrordata',
        httpClientIntegration: 'httpclient',
        reportingObserverIntegration: 'reportingobserver',
        rewriteFramesIntegration: 'rewriteframes',
        sessionTimingIntegration: 'sessiontiming',
        browserProfilingIntegration: 'browserprofiling'
    },
    i = n.m9;
async function c(t) {
    let e = o[t],
        a = (i.Sentry = i.Sentry || {});
    if (!e) throw Error(`Cannot lazy load integration: ${t}`);
    let c = a[t];
    if ('function' == typeof c) return c;
    let E = (function (t) {
            let e = (0, r.s3)(),
                a = e && e.getOptions(),
                n = (a && a.cdnBaseUrl) || 'https://browser.sentry-cdn.com';
            return new URL(`/${_.J}/${t}.min.js`, n).toString();
        })(e),
        s = n.m9.document.createElement('script');
    ((s.src = E), (s.crossOrigin = 'anonymous'), (s.referrerPolicy = 'origin'));
    let l = new Promise((t, e) => {
        (s.addEventListener('load', () => t()), s.addEventListener('error', e));
    });
    n.m9.document.body.appendChild(s);
    try {
        await l;
    } catch (e) {
        throw Error(`Error when loading integration: ${t}`);
    }
    let u = a[t];
    if ('function' != typeof u) throw Error(`Could not load integration: ${t}`);
    return u;
}
