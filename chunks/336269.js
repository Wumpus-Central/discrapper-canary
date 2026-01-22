i.d(e, {
    q: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.ANALYTICS_LOGS, {
    useTitle: () => "Enable Logging of Analytics Events",
    useSubtitle: () => "Logs all analytics events to the developer console.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingAnalyticsEvents),
    setValue: (t) =>
        (0, l.x)({
            logAnalyticsEvents: t,
        }),
});
