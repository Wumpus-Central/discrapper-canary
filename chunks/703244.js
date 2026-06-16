"use strict";
n.d(t, { cf: () => a });
var i = n(626584);
let r = (0, n(945810).mj)({
        name: "2025-10-gif-providers-multi-treatment",
        kind: "user",
        defaultConfig: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: !0 },
        variations: {
            0: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: !0 },
            1: { provider: "giphy", fallbackProvider: "tenor", enableMetrics: !0 },
            2: { provider: "klipy", fallbackProvider: "tenor", enableMetrics: !0 },
        },
    }),
    s = new i.A("GifProviderConfig");
function a() {
    try {
        return r.getConfig({ location: "gif_picker" }).provider;
    } catch (e) {
        return s.warn("Error getting provider for API request:", e), "tenor";
    }
}
