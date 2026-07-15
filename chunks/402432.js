n.d(t, { F: () => c, k: () => h });
var i = n(17928),
    r = n(888916),
    l = n(915725),
    s = n(430795),
    a = n(419954),
    o = n(780964),
    u = n(753070),
    d = n(375708);
function c() {
    return [
        { id: "15", value: u.kn.FPS_15, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: u.kn.FPS_15 }) },
        { id: "30", value: u.kn.FPS_30, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: u.kn.FPS_30 }) },
        { id: "60", value: u.kn.FPS_60, label: d.intl.formatToPlainString(d.t.Qb44XH, { fps: u.kn.FPS_60 }) },
    ];
}
let h = (0, a.Hn)(o.X.CLIPS_FRAME_RATE, {
    useTitle: () => d.intl.string(d.t["2wScL1"]),
    useSubtitle: () => d.intl.string(d.t["Rf9+fy"]),
    useValue: () => (0, i.bG)([l.Ay], () => l.Ay.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = l.Ay.getSettings();
        s.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: c,
    useDisabled: r.Rt,
});
