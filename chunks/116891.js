i.d(t, { eT: () => l, fj: () => n });
var s = i(240921);
let n = "1080p",
    r = (0, s.Ay)({
        name: "2026-04-server-boost-copy-1440p",
        kind: "user",
        defaultConfig: { streamQualityMarketingResolution: n },
        variations: { 1: { streamQualityMarketingResolution: "1440p" } },
    });
function l(e) {
    return r.getConfig({ location: e }).streamQualityMarketingResolution;
}
