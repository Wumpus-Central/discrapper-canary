n.d(e, { X: () => T });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(383451),
    a = n(313789),
    o = n(595373),
    c = n(65154),
    d = n(388032);
let T = (0, s.qs)(a.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => d.intl.string(d.t.EGn1eN),
    useSubtitle: () => d.intl.string(d.t.iT257i),
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
    useValue: function () {
        return (0, i.e7)([r.Z], () => {
            let { pttLatchingEnabled: t } = r.Z.getModeOptions();
            return null != t && t;
        });
    },
    setValue: function (t) {
        l.Z.setMode(c.pM.PUSH_TO_TALK, { pttLatchingEnabled: t });
    },
    usePredicate: function () {
        let t = (0, o.J)(),
            { enableLatching: e } = (0, u.H)({ location: "PushToTalkLatchingSetting" });
        return t && e;
    },
});
