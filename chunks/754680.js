n.d(e, { i: () => S });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let S = (0, s.qs)(r.n.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    useValue: function () {
        return (0, i.e7)([u.Z], () => {
            let { vadUseKrisp: t } = u.Z.getModeOptions();
            return t;
        });
    },
    setValue: function (t) {
        let e = u.Z.getMode();
        l.Z.setMode(e, { vadUseKrisp: t });
    },
    useDisabled: function () {
        return (0, i.e7)([u.Z], () => {
            let t = u.Z.getMode(),
                e = u.Z.getModeOptions().autoThreshold;
            return t === a.pM4.VOICE_ACTIVITY && e;
        });
    },
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.isAdvancedVoiceActivitySupported() && u.Z.isInputProfileCustom());
    },
});
