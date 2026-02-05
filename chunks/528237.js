i.d(e, { m: () => d });
var n = i(419954),
    l = i(253932),
    s = i(780964),
    r = i(358776),
    a = i(840065),
    u = i(652215),
    o = i(985018);
let d = (0, n.zD)(s.X.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => o.intl.string(o.t["btbS+Z"]),
    useSubtitle: () => {
        let t = (0, r.dk)("TextToSpeechCommandSetting");
        return o.intl.format(o.t.Q5crhR, {
            onClick: () =>
                (0, a.openUserSettings)(t ? s.X.TTS_PLAYBACK_RATE : s.X.ACCESSIBILITY_PANEL, {
                    section: u.nc_.ACCESSIBILITY,
                }),
        });
    },
    useValue: l.on.useSetting,
    setValue: l.on.updateSetting,
});
