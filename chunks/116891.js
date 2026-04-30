"use strict";
n.d(t, { eT: () => a, fj: () => r });
var i = n(240921);
let r = "1080p",
    s = (0, i.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: r },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function a(e) {
    return s.getConfig({ location: e }).streamQualityMarketingResolution;
}
