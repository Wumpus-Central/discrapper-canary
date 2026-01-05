n.d(e, { N: () => T });
var i = n(442837),
    l = n(435064),
    s = n(39604),
    u = n(509613),
    r = n(313789),
    a = n(37113),
    o = n(388032);
let T = (0, u.Em)(r.n.CLIPS_FRAME_RATE, {
    useTitle: () => o.intl.string(o.t["2wScL1"]),
    useSubtitle: () => o.intl.string(o.t["Rf9+fy"]),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipsQuality.frameRate),
    setValue: (t) => {
        let { clipsQuality: e } = l.Z.getSettings();
        s.yi({
            resolution: e.resolution,
            frameRate: t,
        });
    },
    useOptions: () => [
        {
            id: "15",
            value: a.ws.FPS_15,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ws.FPS_15 }),
        },
        {
            id: "30",
            value: a.ws.FPS_30,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ws.FPS_30 }),
        },
        {
            id: "60",
            value: a.ws.FPS_60,
            label: o.intl.formatToPlainString(o.t.Qb44XH, { fps: a.ws.FPS_60 }),
        },
    ],
});
