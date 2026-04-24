"use strict";
n.d(t, { eT: () => r, fj: () => s });
var i = n(250105);
let s = "1080p",
    l = (0, i.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: s },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function r(e) {
    return l.getConfig({ location: e }).streamQualityMarketingResolution;
}
