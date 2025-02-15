a.d(e, { R: () => c });
var r = a(263449),
    n = a(452896),
    _ = a(163162);
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
    i = _.m9;
async function c(t) {
    let e = o[t],
        a = (i.Sentry = i.Sentry || {});
    if (!e) throw Error(`Cannot lazy load integration: ${t}`);
    let c = a[t];
    if ('function' == typeof c) return c;
    let s = (function (t) {
            let e = (0, r.s3)(),
                a = e && e.getOptions(),
                _ = (a && a.cdnBaseUrl) || 'https://browser.sentry-cdn.com';
            return new URL(`/${n.J}/${t}.min.js`, _).toString();
        })(e),
        E = _.m9.document.createElement('script');
    (E.src = s), (E.crossOrigin = 'anonymous'), (E.referrerPolicy = 'origin');
    let l = new Promise((t, e) => {
        E.addEventListener('load', () => t()), E.addEventListener('error', e);
    });
    _.m9.document.body.appendChild(E);
    try {
        await l;
    } catch (e) {
        throw Error(`Error when loading integration: ${t}`);
    }
    let u = a[t];
    if ('function' != typeof u) throw Error(`Could not load integration: ${t}`);
    return u;
}
