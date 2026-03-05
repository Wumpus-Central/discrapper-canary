n.d(t, { m: () => d });
var i = n(419954),
    s = n(253932),
    l = n(780964),
    a = n(840065),
    r = n(652215),
    o = n(985018);
let d = (0, i.zD)(l.X.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => o.intl.string(o.t["btbS+Z"]),
    useSubtitle: () =>
        o.intl.format(o.t.Q5crhR, {
            onClick: () => (0, a.openUserSettings)(l.X.TTS_PLAYBACK_RATE, { section: r.nc_.ACCESSIBILITY }),
        }),
    useValue: s.on.useSetting,
    setValue: s.on.updateSetting,
});
