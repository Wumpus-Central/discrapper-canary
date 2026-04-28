i.d(e, { eT: () => s, fj: () => n });
var a = i(250105);
let n = "1080p",
    o = (0, a.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: n },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function s(t) {
    return o.getConfig({ location: t }).streamQualityMarketingResolution;
}
