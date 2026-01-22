i.d(e, {
    m: () => o,
});
var n = i(419954),
    l = i(253932),
    s = i(780964),
    r = i(840065),
    u = i(652215),
    a = i(985018);
let o = (0, n.zD)(s.X.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => a.intl.string(a.t["btbS+Z"]),
    useSubtitle: () =>
        a.intl.format(a.t.Q5crhR, {
            onClick: () =>
                (0, r.openUserSettings)(s.X.ACCESSIBILITY_PANEL, {
                    section: u.nc_.ACCESSIBILITY,
                }),
        }),
    useValue: l.on.useSetting,
    setValue: l.on.updateSetting,
});
