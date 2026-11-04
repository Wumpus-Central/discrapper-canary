let s = (0, i(400845).Ay)({
    name: "2026-04-server-boost-copy-1440p",
    kind: "user",
    defaultConfig: { streamQualityMarketingResolution: "1080p" },
    variations: { 1: { streamQualityMarketingResolution: "1440p" } },
});
i.d(
    t,
    {},
    {
        e: function (e) {
            return s.getConfig({ location: e }).streamQualityMarketingResolution;
        },
    },
);
