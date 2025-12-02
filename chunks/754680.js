n.d(e, { Z: () => c });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, l.qs)(u.n.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    usePredicate: function () {
        return (0, i.e7)([s.Z], () => s.Z.isAdvancedVoiceActivitySupported() && s.Z.isInputProfileCustom());
    },
    useDisabled: function () {
        return (0, i.e7)([s.Z], () => {
            let t = s.Z.getMode(),
                e = s.Z.getModeOptions().autoThreshold;
            return t === a.pM4.VOICE_ACTIVITY && e;
        });
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => {
            let { vadUseKrisp: t } = s.Z.getModeOptions();
            return t;
        });
    },
    setValue: function (t) {
        let e = s.Z.getMode();
        r.Z.setMode(e, { vadUseKrisp: t });
    },
});
