n.d(t, { I: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.GATEWAY_LOGS, {
    useTitle: () => "Log Gateway Events",
    useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
    useValue: () => (0, i.bG)([a.default], () => a.default.isLoggingGatewayEvents),
    setValue: (e) => (0, s.x)({ logGatewayEvents: e }),
});
