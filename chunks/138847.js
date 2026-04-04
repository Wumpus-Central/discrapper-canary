n.d(t, { X: () => d });
var i = n(311907),
    s = n(274372),
    l = n(399925),
    a = n(419954),
    r = n(780964),
    o = n(985018);
let d = (0, a.zD)(r.X.CLIPS_ENABLE_GAME_SIGNALS, {
    useTitle: () => o.intl.string(o.t.iV6KcI),
    useSubtitle: () => o.intl.string(o.t["dJ2tX+"]),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipSignals.enableGameSignals),
    setValue: (e) => {
        let t = s.A.getSettings().clipSignals;
        l.PW({ ...t, enableGameSignals: e });
    },
});
