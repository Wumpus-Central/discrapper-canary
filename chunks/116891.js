"use strict";
n.d(t, { eT: () => l, fj: () => i });
var r = n(250105);
let i = "1080p",
    s = "1440p",
    a = (0, r.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: i },
        variations: { 1: { streamQualityMarketingResolution: s } },
    });
function o(e) {
    return a.getConfig({ location: e });
}
function l(e) {
    return o(e).streamQualityMarketingResolution;
}
