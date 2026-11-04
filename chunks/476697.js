var i = n(723702),
    r = n(676030),
    a = n(474626),
    s = n(753070);
n.d(
    t,
    {},
    {
        Ay: function (e, t, n, l) {
            let o = {
                [s.jQ.PRESET_DOCUMENTS]: [
                    { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_15 },
                    { resolution: s.on.RESOLUTION_SOURCE, fps: s.kn.FPS_5 },
                ],
                [s.jQ.PRESET_VIDEO]: [
                    { resolution: s.on.RESOLUTION_1440, fps: s.kn.FPS_60 },
                    { resolution: s.on.RESOLUTION_1080, fps: s.kn.FPS_60 },
                    { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_60 },
                    { resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_30 },
                ],
                [s.jQ.PRESET_AUTO]: [],
                [s.jQ.PRESET_CUSTOM]: [],
                [s.jQ.PRESET_MOBILE_DEFAULT]: [{ resolution: s.on.RESOLUTION_720, fps: s.kn.FPS_30 }],
                [s.jQ.PRESET_MOBILE_PERFORMANCE]: [{ resolution: s.on.RESOLUTION_480, fps: s.kn.FPS_30 }],
                [s.jQ.PRESET_MOBILE_HIGH_QUALITY]: [{ resolution: s.on.RESOLUTION_1080, fps: s.kn.FPS_60 }],
            }[e];
            if (null == o) return null;
            for (let d of o)
                if ((0, r.A)(e, d.resolution, d.fps, t, n)) {
                    if (e === s.jQ.PRESET_VIDEO && i.isPlatformEmbedded && (0, i.xl)()) {
                        let e = (0, a.A)("getStreamSettingsForPreset", t, l);
                        if (
                            e?.maxResolution != null &&
                            null != e.maxFPS &&
                            d.resolution !== s.on.RESOLUTION_SOURCE &&
                            d.resolution < e.maxResolution &&
                            d.fps <= e.maxFPS
                        )
                            return [e.maxResolution, e.maxFPS];
                    }
                    return [d.resolution, d.fps];
                }
            return null;
        },
    },
);
