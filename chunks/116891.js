n.d(t, { eT: () => l, fj: () => i });
var r = n(250105);
let i = "1080p",
    a = (0, r.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: i },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function l(e) {
    return a.getConfig({ location: e }).streamQualityMarketingResolution;
}
