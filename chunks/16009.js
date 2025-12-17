n.d(e, { X: () => c });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(383451),
    a = n(313789),
    o = n(595373),
    S = n(65154),
    T = n(388032);
let c = (0, s.qs)(a.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => T.intl.string(T.t.EGn1eN),
    useSubtitle: () => T.intl.string(T.t.iT257i),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
    useValue: function () {
        return (0, i.e7)([u.Z], () => {
            let { pttLatchingEnabled: t } = u.Z.getModeOptions();
            return null != t && t;
        });
    },
    setValue: function (t) {
        l.Z.setMode(S.pM.PUSH_TO_TALK, { pttLatchingEnabled: t });
    },
    usePredicate: function () {
        let t = (0, o.J)(),
            { enableLatching: e } = (0, r.H)({ location: "PushToTalkLatchingSetting" });
        return t && e;
    },
});
