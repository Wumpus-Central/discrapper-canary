n.d(e, { Z: () => E });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(131951),
    s = n(383451),
    a = n(313789),
    o = n(595373),
    c = n(65154),
    d = n(388032);
let E = (0, l.qs)(a.n.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
    useTitle: () => d.intl.string(d.t.EGn1eN),
    useSubtitle: () => d.intl.string(d.t.iT257i),
    usePredicate: function () {
        let t = (0, o.J)(),
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
        r.Z.setMode(c.pM.PUSH_TO_TALK, { pttLatchingEnabled: t });
    },
    useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
});
