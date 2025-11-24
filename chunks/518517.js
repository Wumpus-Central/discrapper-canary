n.d(e, { Z: () => c });
var i = n(442837),
    r = n(924557),
    l = n(435064),
    u = n(39604),
    s = n(509613),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => o.intl.string(o.t["3zwNf6"]),
    useSubtitle: () => o.intl.string(o.t.m4Cjj9),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().remindersEnabled),
    usePredicate: () => {
        let { showClipsHeaderEntrypoint: t } = r.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        );
        return t;
    },
    setValue: (t) => u.N0(t),
});
