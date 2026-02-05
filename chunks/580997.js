i.d(e, { A: () => d });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(723702),
    u = i(780964),
    o = i(985018);
let d = (0, s.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getEnableSilenceWarning());
    },
    setValue: function (t) {
        l.A.setSilenceWarning(t);
    },
    usePredicate: function () {
        return a.isPlatformEmbedded;
    },
});
