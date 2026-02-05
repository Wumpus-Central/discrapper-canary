i.d(e, { A: () => A });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(555444),
    u = i(780964),
    o = i(903427),
    d = i(731854),
    T = i(985018);
let A = (0, s.zD)(u.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => T.intl.string(T.t.EGn1eN),
    useSubtitle: () => T.intl.string(T.t.iT257i),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
    useValue: function () {
        return (0, n.bG)([r.A], () => {
            let { pttLatchingEnabled: t } = r.A.getModeOptions();
            return t ?? !1;
        });
    },
    setValue: function (t) {
        l.A.setMode(d.TB.PUSH_TO_TALK, { pttLatchingEnabled: t });
    },
    usePredicate: function () {
        let t = (0, o.P)(),
            { enableLatching: e } = (0, a.y)({ location: "PushToTalkLatchingSetting" });
        return t && e;
    },
});
