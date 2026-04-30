a.d(e, { eT: () => l, fj: () => i });
var n = a(250105);
let i = "1080p",
    o = (0, n.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: i },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function l(t) {
    return o.getConfig({ location: t }).streamQualityMarketingResolution;
}
