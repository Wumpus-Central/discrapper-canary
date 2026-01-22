i.d(e, {
    Z: () => T,
});
var n = i(311907),
    l = i(734066),
    s = i(274372),
    r = i(399925),
    u = i(419954),
    a = i(780964),
    o = i(985018);
let T = (0, u.zD)(a.X.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => o.intl.string(o.t["3zwNf6"]),
    useSubtitle: () => o.intl.string(o.t.m4Cjj9),
    useValue: () => (0, n.bG)([s.A], () => s.A.getSettings().remindersEnabled),
    setValue: (t) => r.Mt(t),
    usePredicate: () => {
        let { showClipsHeaderEntrypoint: t } = l.L_.useExperiment(
            {
                location: "clips_recording_settings",
            },
            {
                autoTrackExposure: !1,
            },
        );
        return t;
    },
});
