a.d(e, { R: () => c });
var r = a(263449),
    n = a(452896),
    o = a(163162);
let _ = {
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
    i = o.m9;
async function c(t) {
    let e = _[t],
        a = (i.Sentry = i.Sentry || {});
    if (!e) throw Error(`Cannot lazy load integration: ${t}`);
    let c = a[t];
    if ('function' == typeof c) return c;
    let s = (function (t) {
            let e = (0, r.s3)(),
                a = e && e.getOptions(),
                o = (a && a.cdnBaseUrl) || 'https://browser.sentry-cdn.com';
            return new URL(`/${n.J}/${t}.min.js`, o).toString();
        })(e),
        E = o.m9.document.createElement('script');
    (E.src = s), (E.crossOrigin = 'anonymous'), (E.referrerPolicy = 'origin');
    let l = new Promise((t, e) => {
        E.addEventListener('load', () => t()), E.addEventListener('error', e);
    });
    o.m9.document.body.appendChild(E);
    try {
        await l;
    } catch (e) {
        throw Error(`Error when loading integration: ${t}`);
    }
    let u = a[t];
    if ('function' != typeof u) throw Error(`Could not load integration: ${t}`);
    return u;
}
