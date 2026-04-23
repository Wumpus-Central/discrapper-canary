n.d(t, { u: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.REQUEST_TRACING, {
    useTitle: () => "Enable Tracing Requests",
    useSubtitle: () => "Force trace all client requests with APM.",
    useValue: () => (0, i.bG)([a.default], () => a.default.isTracingRequests),
    setValue: (e) => (0, s.x)({ trace: e }),
});
