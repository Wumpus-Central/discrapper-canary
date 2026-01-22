i.d(e, {
    C: () => o,
});
var n = i(399925),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(358776),
    a = i(985018);
let o = (0, l.zD)(r.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => a.intl.string(a.t.AGDDkH),
    useSubtitle: () => a.intl.string(a.t["wW9/zQ"]),
    useValue: () => s.Q$.useSetting(),
    setValue: (t) =>
        n.eQ({
            allowVoiceRecording: t,
        }),
    usePredicate: function () {
        return (0, u.$m)("DataAndPrivacyPanel");
    },
});
