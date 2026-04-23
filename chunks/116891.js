"use strict";
n.d(t, { eT: () => a, fj: () => i });
var r = n(250105);
let i = "1080p",
    s = (0, r.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: i },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function a(e) {
    return s.getConfig({ location: e }).streamQualityMarketingResolution;
}
