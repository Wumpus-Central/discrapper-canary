i.d(t, { j: () => d });
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    a = i(780964),
    u = i(753070),
    o = i(985018);
let d = (0, r.Hn)(a.X.CLIPS_RESOLUTION, {
    useTitle: () => o.intl.string(o.t.aFudZJ),
    useSubtitle: () => o.intl.string(o.t.nIrkW5),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsQuality.resolution),
    setValue: (e) => {
        let { clipsQuality: t } = l.A.getSettings();
        s.GS({ resolution: e, frameRate: t.frameRate });
    },
    useOptions: () => [
        {
            id: "480p",
            value: u.on.RESOLUTION_480,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: u.on.RESOLUTION_480 }),
        },
        {
            id: "720p",
            value: u.on.RESOLUTION_720,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: u.on.RESOLUTION_720 }),
        },
        {
            id: "1080p",
            value: u.on.RESOLUTION_1080,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: u.on.RESOLUTION_1080 }),
        },
        {
            id: "1440p",
            value: u.on.RESOLUTION_1440,
            label: o.intl.formatToPlainString(o.t.TEOC0I, { resolution: u.on.RESOLUTION_1440 }),
        },
        { id: "source", value: u.on.RESOLUTION_SOURCE, label: o.intl.string(o.t.XjXqzh) },
    ],
});
