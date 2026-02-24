"use strict";
n.d(t, { A: () => o });
var r = n(139099),
    i = n(874124),
    s = n(753070);
function a() {
    let { videoPresetResolutionMax: e } = r.A.getConfig({ location: "getApplicationStreamPresetValues" });
    return {
        [s.jQ.PRESET_DOCUMENTS]: [
            { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_15 },
            { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_5 },
        ],
        [s.jQ.PRESET_VIDEO]: [
            { resolution: e, fps: s.kn.FPS_60 },
            { resolution: s.on.RESOLUTION_1080, fps: s.kn.FPS_60 },
            { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_60 },
            { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_30 },
        ],
        [s.jQ.PRESET_AUTO]: [],
        [s.jQ.PRESET_CUSTOM]: [],
    };
}
function o(e, t, n) {
    let r = a()[e];
    if (null == r) return null;
    for (let s of r) if ((0, i.A)(e, s.resolution, s.fps, t, n)) return [s.resolution, s.fps];
    return null;
}
