n.d(e, { G: () => T });
var i = n(442837),
    l = n(435064),
    s = n(39604),
    u = n(509613),
    r = n(313789),
    a = n(37113),
    o = n(388032);
let T = (0, u.Em)(r.n.CLIPS_RESOLUTION, {
    useTitle: () => o.intl.string(o.t.aFudZJ),
    useSubtitle: () => o.intl.string(o.t.nIrkW5),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipsQuality.resolution),
    setValue: (t) => {
        let { clipsQuality: e } = l.Z.getSettings();
        s.yi({
            resolution: t,
            frameRate: e.frameRate,
        });
    },
    useOptions: () => [
        {
            id: "480p",
            value: a.ApplicationStreamResolutions.RESOLUTION_480,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_480,
            }),
        },
        {
            id: "720p",
            value: a.ApplicationStreamResolutions.RESOLUTION_720,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_720,
            }),
        },
        {
            id: "1080p",
            value: a.ApplicationStreamResolutions.RESOLUTION_1080,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_1080,
            }),
        },
        {
            id: "1440p",
            value: a.ApplicationStreamResolutions.RESOLUTION_1440,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_1440,
            }),
        },
        {
            id: "source",
            value: a.ApplicationStreamResolutions.RESOLUTION_SOURCE,
            label: o.intl.string(o.t.XjXqzh),
        },
    ],
});
