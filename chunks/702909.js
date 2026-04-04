n.d(t, { Z: () => c });
var i = n(311907),
    s = n(734066),
    l = n(274372),
    a = n(399925),
    r = n(419954),
    o = n(780964),
    d = n(985018);
let c = (0, r.zD)(o.X.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => d.intl.string(d.t["3zwNf6"]),
    useSubtitle: () => d.intl.string(d.t.m4Cjj9),
    useValue: () => (0, i.bG)([l.A], () => l.A.getSettings().remindersEnabled),
    setValue: (e) => a.Mt(e),
    usePredicate: () => {
        let { showClipsHeaderEntrypoint: e } = s.L_.useConfig({ location: "clips_recording_settings" });
        return e;
    },
});
