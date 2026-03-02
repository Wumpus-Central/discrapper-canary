i.d(e, { Z: () => d });
var n = i(311907),
    l = i(734066),
    s = i(274372),
    r = i(399925),
    a = i(419954),
    u = i(780964),
    o = i(985018);
let d = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
    useTitle: () => o.intl.string(o.t["3zwNf6"]),
    useSubtitle: () => o.intl.string(o.t.m4Cjj9),
    useValue: () => (0, n.bG)([s.A], () => s.A.getSettings().remindersEnabled),
    setValue: (t) => r.Mt(t),
    usePredicate: () => {
        let { showClipsHeaderEntrypoint: t } = l.L_.useConfig({ location: "clips_recording_settings" });
        return t;
    },
});
