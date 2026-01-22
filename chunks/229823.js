i.d(e, { j: () => T });
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    u = i(780964),
    a = i(753070),
    o = i(985018);
let T = (0, r.Hn)(u.X.CLIPS_RESOLUTION, {
    useTitle: () => o.intl.string(o.t.aFudZJ),
    useSubtitle: () => o.intl.string(o.t.nIrkW5),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.resolution),
    setValue: (t) => {
        let { clipsQuality: e } = l.A.getSettings();
        s.GS({
            resolution: t,
            frameRate: e.frameRate,
        });
    },
    useOptions: () => [
        {
            id: "480p",
            value: a.on.RESOLUTION_480,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: a.on.RESOLUTION_480 }),
        },
        {
            id: "720p",
            value: a.on.RESOLUTION_720,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: a.on.RESOLUTION_720 }),
        },
        {
            id: "1080p",
            value: a.on.RESOLUTION_1080,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: a.on.RESOLUTION_1080 }),
        },
        {
            id: "1440p",
            value: a.on.RESOLUTION_1440,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: a.on.RESOLUTION_1440 }),
        },
        {
            id: "source",
            value: a.on.RESOLUTION_SOURCE,
            label: o.intl.string(o.t.XjXqzh),
        },
    ],
});
