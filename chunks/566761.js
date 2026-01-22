i.d(e, {
    u: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.REQUEST_TRACING, {
    useTitle: () => "Enable Tracing Requests",
    useSubtitle: () => "Force trace all client requests with APM.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isTracingRequests),
    setValue: (t) =>
        (0, l.x)({
            trace: t,
        }),
});
