n.d(e, { Z: () => c });
var i = n(442837),
    r = n(435064),
    l = n(39604),
    u = n(509613),
    s = n(313789),
    a = n(37113),
    o = n(388032);
let c = (0, u.Em)(s.n.CLIPS_RESOLUTION, {
    useTitle: () => o.intl.string(o.t.aFudZJ),
    useSubtitle: () => o.intl.string(o.t.nIrkW5),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getSettings().clipsQuality.resolution),
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
    setValue: (t) => {
        let { clipsQuality: e } = r.Z.getSettings();
        l.yi({
            resolution: t,
            frameRate: e.frameRate,
        });
    },
});
