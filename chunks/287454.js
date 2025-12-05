n.d(e, { G: () => c });
var i = n(442837),
    l = n(435064),
    s = n(39604),
    r = n(509613),
    u = n(313789),
    a = n(37113),
    o = n(388032);
let c = (0, r.Em)(u.n.CLIPS_RESOLUTION, {
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
            value: a.ApplicationStreamResolutions.RESOLUTION_480,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_480,
            }),
        },
        {
            value: a.ApplicationStreamResolutions.RESOLUTION_720,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_720,
            }),
        },
        {
            value: a.ApplicationStreamResolutions.RESOLUTION_1080,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_1080,
            }),
        },
        {
            value: a.ApplicationStreamResolutions.RESOLUTION_1440,
            label: o.intl.formatToPlainString(o.t.TEOC0I, {
                resolution: a.ApplicationStreamResolutions.RESOLUTION_1440,
            }),
        },
        {
            value: a.ApplicationStreamResolutions.RESOLUTION_SOURCE,
            label: o.intl.string(o.t.XjXqzh),
        },
    ],
});
