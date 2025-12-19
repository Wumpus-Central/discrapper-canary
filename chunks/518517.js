n.d(e, { b: () => T });
var i = n(442837),
    l = n(924557),
    s = n(435064),
    u = n(39604),
    r = n(509613),
    a = n(313789),
    o = n(388032);
let T = (0, r.qs)(a.n.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => o.intl.string(o.t["3zwNf6"]),
    useSubtitle: () => o.intl.string(o.t.m4Cjj9),
    useValue: () => (0, i.e7)([s.Z], () => s.Z.getSettings().remindersEnabled),
    setValue: (t) => u.N0(t),
    usePredicate: () => {
        let { showClipsHeaderEntrypoint: t } = l.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        );
        return t;
    },
});
