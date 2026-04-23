n.d(t, { $: () => u });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, l.zD)(r.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => d.intl.string(d.t.BbESsg),
    useSubtitle: () => d.intl.string(d.t.LoOB1F),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => {
            let { vadUseKrisp: e } = a.Ay.getModeOptions();
            return e;
        });
    },
    setValue: function (e) {
        let t = a.Ay.getMode();
        s.A.setMode(t, { vadUseKrisp: e });
    },
    useDisabled: function () {
        return (0, i.bG)([a.Ay], () => {
            let e = a.Ay.getMode(),
                t = a.Ay.getModeOptions().autoThreshold;
            return e === o.TBI.VOICE_ACTIVITY && t;
        });
    },
    usePredicate: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.isAdvancedVoiceActivitySupported() && a.Ay.isInputProfileCustom());
    },
});
