i.d(e, { l: () => o });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
    useTitle: () => u.intl.string(u.t.DFPXIG),
    useSubtitle: () => u.intl.string(u.t["UyRX+C"]),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getBypassSystemInputProcessing());
    },
    setValue: function (t) {
        l.A.setBypassSystemInputProcessing(t);
    },
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.showBypassSystemInputProcessing() && r.A.isInputProfileCustom());
    },
});
