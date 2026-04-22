"use strict";
n.d(t, { A: () => a });
var r = n(139099),
    i = n(874124),
    s = n(753070);
function a(e, t, n) {
    let a = (function () {
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
    })()[e];
    if (null == a) return null;
    for (let r of a) if ((0, i.A)(e, r.resolution, r.fps, t, n)) return [r.resolution, r.fps];
    return null;
}
