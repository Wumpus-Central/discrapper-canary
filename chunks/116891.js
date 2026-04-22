i.d(t, { eT: () => n, fj: () => l });
var s = i(250105);
let l = "1080p",
    a = (0, s.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: l },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function n(e) {
    return a.getConfig({ location: e }).streamQualityMarketingResolution;
}
