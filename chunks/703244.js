r.d(t, { cf: () => i });
var s = r(626584);
let n = (0, r(945810).mj)({
        name: "2025-10-gif-providers-multi-treatment",
        kind: "user",
        defaultConfig: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: !0 },
        variations: {
            0: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: !0 },
            1: { provider: "giphy", fallbackProvider: "tenor", enableMetrics: !0 },
            2: { provider: "klipy", fallbackProvider: "tenor", enableMetrics: !0 },
        },
    }),
    l = new s.A("GifProviderConfig");
function i() {
    try {
        return n.getConfig({ location: "gif_picker" }).provider;
    } catch (e) {
        return l.warn("Error getting provider for API request:", e), "tenor";
    }
}
