i.d(e, { C: () => o });
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    a = i(780964),
    u = i(985018);
let o = (0, r.zD)(a.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
    useTitle: () => u.intl.string(u.t.nHsilt),
    useSubtitle: () => u.intl.string(u.t["s6wq+m"]),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipSignals.enablePhraseSignals),
    setValue: (t) => {
        let e = l.A.getSettings().clipSignals;
        s.PW({ ...e, enablePhraseSignals: t });
    },
});
