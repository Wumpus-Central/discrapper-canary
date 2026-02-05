i.d(e, { J: () => u });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(780964);
let u = (0, s.zD)(a.X.OVERLAY_RPC_LOGS, {
    useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
    useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
    useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingOverlayEvents),
    setValue: (t) => (0, l.x)({ logOverlayEvents: t }),
});
