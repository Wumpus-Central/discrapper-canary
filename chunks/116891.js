i.d(t, { eT: () => a, fj: () => r });
var s = i(240921);
let r = "1080p",
    n = (0, s.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: r },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function a(e) {
    return n.getConfig({ location: e }).streamQualityMarketingResolution;
}
