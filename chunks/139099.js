"use strict";
n.d(t, { A: () => a });
var r = n(250105),
    i = n(753070);
let s = { videoPresetResolutionMax: i.on.RESOLUTION_1440 },
    a = (0, r.Ay)({
        name: "2026-02-go-live-video-preset-resolution",
        kind: "user",
        defaultConfig: s,
        variations: { 1: { ...s, videoPresetResolutionMax: i.on.RESOLUTION_1080 } },
    });
