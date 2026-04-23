n.d(t, { k: () => u });
var i = n(311907),
    s = n(274372),
    l = n(399925),
    a = n(419954),
    r = n(780964),
    o = n(753070),
    d = n(985018);
let u = (0, a.Hn)(r.X.CLIPS_FRAME_RATE, {
    useTitle: () => d.intl.string(d.t["2wScL1"]),
    useSubtitle: () => d.intl.string(d.t["Rf9+fy"]),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = s.A.getSettings();
        l.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: o.kn.FPS_15, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: o.kn.FPS_15 }) },
        { id: "30", value: o.kn.FPS_30, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: o.kn.FPS_30 }) },
        { id: "60", value: o.kn.FPS_60, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: o.kn.FPS_60 }) },
    ],
});
