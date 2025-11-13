n.d(e, { Z: () => E });
var i = n(442837),
    l = n(924557),
    u = n(435064),
    r = n(39604),
    s = n(509613),
    a = n(313789),
    o = n(37113),
    c = n(388032);
let E = (0, s.Em)(a.n.CLIPS_FRAME_RATE, {
    useTitle: () => c.intl.string(c.t["2wScL1"]),
    useSubtitle: () => c.intl.string(c.t["Rf9+fy"]),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getSettings().clipsQuality.frameRate),
    useOptions: () => [
        {
            value: o.ApplicationStreamFPS.FPS_15,
            label: c.intl.formatToPlainString(c.t.Qb44XH, { fps: o.ApplicationStreamFPS.FPS_15 }),
        },
        {
            value: o.ApplicationStreamFPS.FPS_30,
            label: c.intl.formatToPlainString(c.t.Qb44XH, { fps: o.ApplicationStreamFPS.FPS_30 }),
        },
        {
            value: o.ApplicationStreamFPS.FPS_60,
            label: c.intl.formatToPlainString(c.t.Qb44XH, { fps: o.ApplicationStreamFPS.FPS_60 }),
        },
    ],
    usePredicate: l.Go,
    setValue: (t) => {
        let { clipsQuality: e } = u.Z.getSettings();
        r.yi({
            resolution: e.resolution,
            frameRate: t,
        });
    },
});
