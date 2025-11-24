n.d(e, { Z: () => c });
var i = n(442837),
    r = n(435064),
    l = n(39604),
    u = n(509613),
    s = n(313789),
    a = n(37113),
    o = n(388032);
let c = (0, u.Em)(s.n.CLIPS_FRAME_RATE, {
    useTitle: () => o.intl.string(o.t["2wScL1"]),
    useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getSettings().clipsQuality.frameRate),
    useOptions: () => [
        {
            value: a.ApplicationStreamFPS.FPS_15,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ApplicationStreamFPS.FPS_15 }),
        },
        {
            value: a.ApplicationStreamFPS.FPS_30,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ApplicationStreamFPS.FPS_30 }),
        },
        {
            value: a.ApplicationStreamFPS.FPS_60,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ApplicationStreamFPS.FPS_60 }),
        },
    ],
    setValue: (t) => {
        let { clipsQuality: e } = r.Z.getSettings();
        l.yi({
            resolution: e.resolution,
            frameRate: t,
        });
    },
});
