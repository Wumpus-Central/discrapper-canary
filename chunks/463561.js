n.d(e, { Z: () => E });
var i = n(442837),
    l = n(924557),
    u = n(435064),
    r = n(39604),
    s = n(509613),
    a = n(313789),
    o = n(37113),
    c = n(388032);
let E = (0, s.Em)(a.n.CLIPS_RESOLUTION, {
    useTitle: () => c.intl.string(c.t.aFudZJ),
    useSubtitle: () => c.intl.string(c.t.nIrkW5),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getSettings().clipsQuality.resolution),
    useOptions: () => [
        {
            value: o.ApplicationStreamResolutions.RESOLUTION_480,
            label: c.intl.formatToPlainString(c.t.TEOC0I, {
                resolution: o.ApplicationStreamResolutions.RESOLUTION_480,
            }),
        },
        {
            value: o.ApplicationStreamResolutions.RESOLUTION_720,
            label: c.intl.formatToPlainString(c.t.TEOC0I, {
                resolution: o.ApplicationStreamResolutions.RESOLUTION_720,
            }),
        },
        {
            value: o.ApplicationStreamResolutions.RESOLUTION_1080,
            label: c.intl.formatToPlainString(c.t.TEOC0I, {
                resolution: o.ApplicationStreamResolutions.RESOLUTION_1080,
            }),
        },
        {
            value: o.ApplicationStreamResolutions.RESOLUTION_1440,
            label: c.intl.formatToPlainString(c.t.TEOC0I, {
                resolution: o.ApplicationStreamResolutions.RESOLUTION_1440,
            }),
        },
        {
            value: o.ApplicationStreamResolutions.RESOLUTION_SOURCE,
            label: c.intl.string(c.t.XjXqzh),
        },
    ],
    usePredicate: l.w9,
    setValue: (t) => {
        let { clipsQuality: e } = u.Z.getSettings();
        r.yi({
            resolution: t,
            frameRate: e.frameRate,
        });
    },
});
