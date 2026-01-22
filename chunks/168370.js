i.d(e, {
    J: () => a,
});
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(780964);
let a = (0, s.zD)(u.X.OVERLAY_RPC_LOGS, {
    useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
    useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingOverlayEvents),
    setValue: (t) =>
        (0, l.x)({
            logOverlayEvents: t,
        }),
});
