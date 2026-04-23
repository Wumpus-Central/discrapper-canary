n.d(t, { J: () => o });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(780964);
let o = (0, l.zD)(r.X.OVERLAY_RPC_LOGS, {
    useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
    useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
    useValue: () => (0, i.bG)([a.default], () => a.default.isLoggingOverlayEvents),
    setValue: (e) => (0, s.x)({ logOverlayEvents: e }),
});
