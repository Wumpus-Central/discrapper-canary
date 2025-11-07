n.d(e, { Z: () => d });
var i = n(442837),
    l = n(846027),
    r = n(509613),
    u = n(131951),
    s = n(383451),
    a = n(313789),
    o = n(595373),
    c = n(65154),
    E = n(388032);
let d = (0, r.qs)(a.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => E.intl.string(E.t.EGn1eN),
    useSubtitle: () => E.intl.string(E.t.iT257i),
    usePredicate: function () {
        let t = (0, o.p)(),
            { enableLatching: e } = (0, s.H)({ location: "PushToTalkLatchingSetting" });
        return t && e;
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => {
            let { pttLatchingEnabled: t } = u.Z.getModeOptions();
            return null != t && t;
        });
    },
    setValue: function (t) {
        l.Z.setMode(c.pM.PUSH_TO_TALK, { pttLatchingEnabled: t });
    },
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
});
