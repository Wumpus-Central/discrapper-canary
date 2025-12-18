n.d(e, { P: () => o });
var i = n(39604),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(526665),
    a = n(388032);
let o = (0, l.qs)(u.n.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => a.intl.string(a.t.AGDDkH),
    useSubtitle: () => a.intl.string(a.t["wW9/zQ"]),
    useValue: () => s.tU.useSetting(),
    setValue: (t) => i.yg({ allowVoiceRecording: t }),
    usePredicate: function () {
        return (0, r.BK)("DataAndPrivacyPanel");
    },
});
