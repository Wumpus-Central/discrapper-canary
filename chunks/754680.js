n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, s.qs)(u.n.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.isAdvancedVoiceActivitySupported() && r.Z.isInputProfileCustom());
    },
    useDisabled: function () {
        return (0, i.e7)([r.Z], () => {
            let t = r.Z.getMode(),
                e = r.Z.getModeOptions().autoThreshold;
            return t === a.pM4.VOICE_ACTIVITY && e;
        });
    },
    useValue: function () {
        return (0, i.e7)([r.Z], () => {
            let { vadUseKrisp: t } = r.Z.getModeOptions();
            return t;
        });
    },
    setValue: function (t) {
        let e = r.Z.getMode();
        l.Z.setMode(e, { vadUseKrisp: t });
    },
});
